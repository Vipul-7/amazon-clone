import { MongoClient } from "mongodb";

const {
  default: CategoryProducts,
} = require("@/components/Specific category products/CategoryProducts");

const watches = (props) => {
  return (
    <div>
      <CategoryProducts products={props.watchesProducts} />
    </div>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING
  );

  const db = client.db();

  const watchesCollection = db.collection("watches");

  const watchesProducts = await watchesCollection.find().toArray();

  client.close();

  return {
    props: {
      watchesProducts: watchesProducts.map((product) => ({
        title: product.title,
        image: product.image,
        offerPrice: product.offerPrice,
        actualPrice: product.actualPrice,
        offerPercentage: product.offerPercentage,
        id: product._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default watches;
