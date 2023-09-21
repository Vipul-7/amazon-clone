import ProductMain from "@/components/Single Product/ProductMain";
import { connectToDatabase } from "@/database/mongoose";
import Product from "@/models/product";
import Head from "next/head";

const ProductPage = ({ productData }) => {
  return (
    <>
      <Head>
        <title>{productData.title}</title>
        <link rel="icon" href="/amazon.png" />
      </Head>
      <div style={{ backgroundColor: "#fff" }}>
        <ProductMain productData={productData} />
      </div>
    </>
  );
};

export default ProductPage;

export const getStaticProps = async (context) => {
  const productId = context.params.productID;

  const connect = await connectToDatabase();

  if (!connect) {
    const error = new Error("Database connection failed!");
    error.statusCode = 500;
    throw error;
  }

  const product = await Product.findById(productId); // returns a single product

  if (!product) {
    const error = new Error("No product found!");
    error.statusCode = 404;
    throw error;
  }

  return {
    props: {
      productData: {
        title: product.title,
        image: product.image,
        offerPrice: product.offerPrice,
        actualPrice: product.actualPrice,
        offerPercentage: product.offerPercentage,
        metaData: JSON.stringify(product.metaData), // serialize the metaData object
        aboutItem: product.aboutItem,
        id: product._id.toString(),
      },
    },
  };
};

export const getStaticPaths = async () => {
  const connect = await connectToDatabase();

  if (!connect) {
    const error = new Error("Database connection failed!");
    error.statusCode = 500;
    throw error;
  }

  const products = await Product.find();

  if (!products) {
    const error = new Error("No products found!");
    error.statusCode = 404;
    throw error;
  }

  const paths = [];

  for (const product of products) {
    paths.push({
      params: {
        categoryName: product.category,
        productID: product._id.toString(),
      },
    });
  }

  return {
    fallback: false,
    paths: paths,
  };
};
