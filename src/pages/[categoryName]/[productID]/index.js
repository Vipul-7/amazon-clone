import ProductMain from "@/components/Single Product/ProductMain";
import { MongoClient } from "mongodb";

const ProductPage = ({ productData }) => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <ProductMain productData={productData} />
    </div>
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

  if (!collections) {
    return {
      notFound: true,
    };
  }

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
        title: selectedProduct.title || null,
        image: selectedProduct.image || null,
        offerPrice: selectedProduct.offerPrice || null,
        actualPrice: selectedProduct.actualPrice || null,
        offerPercentage: selectedProduct.offerPercentage || null,
        metaData: selectedProduct.metaData || null,
        aboutItem: selectedProduct.aboutItem || null,
        id: selectedProduct._id.toString() || null,
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

  if (!collections) {
    return {
      fallback: false,
      paths: [],
    };
  }

  let paths = [];

  for (const collection of collections) {
    const data = await db
      .collection(collection.name)
      .find({}, { _id: 1 })
      .toArray();

    for (const product of data) {
      paths.push({
        params: {
          categoryName: 'watches', // Replace 'watches' with the actual value for the first dynamic route
          productID: product._id.toString(),
        },
      });
    }
  }

  client.close();

  return {
    fallback: false,
    paths: paths,
  };
};
