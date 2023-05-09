import { MongoClient, ObjectId } from "mongodb";

const ProductPage = ({ productData }) => {
  return <></>;
};

export default ProductPage;

export const getStaticProps = async (context) => {
  const productId = context.params.productID;

  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING
  );

  const db = client.db();

  const collections = await db.listCollections().toArray();

  // const data = [];
  const selectedProduct = {};

  for (const collection of collections) {
    const data = await db.collection(collection.name).find({}).toArray();

    for (const product of data) {
      if (product._id.toString() === productId) {
        selectedProduct = product;
        break;
      }
    }
  }

  client.close();

  return {
    props: {
      productData: {
        title: selectedProduct.title,
        image: selectedProduct.image,
        offerPrice: selectedProduct.offerPrice,
        actualPrice: selectedProduct.actualPrice,
        offerPercentage: selectedProduct.offerPercentage,
        id: selectedProduct._id.toString(),
      },
    },
  };
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING
  );

  const db = client.db();

  const collections = await db.listCollections().toArray();

  const paths = [];

  for (const collection of collections) {
    const data = await db
      .collection(collection.name)
      .find({}, { _id: 1 })
      .toArray();

    for (const product of data) {
      paths.push({ params: { productID: product._id.toString() } });
    }
  }

  client.close();

  return {
    fallback: false,
    paths: paths,
  };
};
