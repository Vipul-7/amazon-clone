import { MongoClient } from "mongodb";
import CategoryProducts from "@/components/Specific category products/CategoryProducts";

const CategoryPage = (props) => {
  return (
    <div>
      <CategoryProducts
        products={props.categoryProducts}
        categoryName={props.categoryName}
      />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const categoryName = context.params.categoryName;

  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING
  );

  const db = client.db();

  const categoryCollection = db.collection(categoryName);

  const categoryProducts = await categoryCollection.find().toArray();

  client.close();

  return {
    props: {
      categoryProducts: categoryProducts.map((product) => ({
        title: product.title,
        image: product.image,
        offerPrice: product.offerPrice,
        actualPrice: product.actualPrice,
        offerPercentage: product.offerPercentage,
        id: product._id.toString(),
      })),
      categoryName: categoryName,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const paths = [];
  paths.push({ params: { categoryName: "watches" } });

  return {
    fallback: false,
    paths: paths,
  };
};

export default CategoryPage;
