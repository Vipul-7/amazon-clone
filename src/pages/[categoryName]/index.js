import CategoryProducts from "@/components/Specific category products/CategoryProducts";
import { connectToDatabase } from "@/database/mongoose";
import Product from "@/models/product";

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

  const connect = await connectToDatabase();

  if (!connect) {
    const error = new Error("Database connection failed!");
    error.statusCode = 500;
    throw error;
  }

  const products = await Product.find({ category: categoryName }); // returns an array of products

  if (!products) {
    const error = new Error("No products found!");
    error.statusCode = 404;
    throw error;
  }

  return {
    props: {
      categoryProducts: products.map((product) => ({
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
  // paths.push({ params: { categoryName: "smart-phones" } });

  return {
    fallback: false,
    paths: paths,
  };
};

export default CategoryPage;
