import { useSelector } from "react-redux";
import ProductDetails from "./Product details/ProductDetails";
import ProductVisuals from "./Product Visual/ProductVisuals";
import ProductActions from "./Product Actions/ProductActions";
import styles from "./ProductMain.module.scss";
import { useMutation } from "@tanstack/react-query";
import { addToCart, queryClient } from "@/util/http";

const ProductMain = (props) => {
  const token = useSelector((state) => state.auth.token);

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  const addToCartHandler = (quantity) => {
    mutate({
      cartData: {
        productId: props.productData.id,
        quantity,
        price: props.productData.offerPrice,
      },
      Token: localStorage.getItem("token"),
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.visuals}>
        <ProductVisuals />
      </div>
      <div className={styles.details}>
        <ProductDetails
          title={props.productData.title}
          aboutItem={props.productData.aboutItem}
          metaData={props.productData.metaData}
          offerPrice={props.productData.offerPrice}
          actualPrice={props.productData.actualPrice}
          offerPercentage={props.productData.offerPercentage}
        />
      </div>
      <div className={styles.actions}>
        <ProductActions
          price={props.productData.offerPrice}
          // brandName={props.productData.metaData.}
          onClick={addToCartHandler}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </main>
  );
};

export default ProductMain;
