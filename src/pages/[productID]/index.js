import ProductMain from "@/components/Single Product/ProductMain";
import { MongoClient } from "mongodb";

const ProductPage = ({ productData }) => {
  return (
    <>
      <ProductMain productData={productData} />
    </>
  );
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
  let selectedProduct = {};

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
        metaData: selectedProduct.metaData,
        aboutItem: selectedProduct.aboutItem,
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

  let paths = [];

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
