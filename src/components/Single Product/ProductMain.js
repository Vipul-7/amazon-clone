import { useDispatch } from "react-redux";
import ProductDetails from "./Product details/ProductDetails";
import ProductVisuals from "./Product Visual/ProductVisuals";
import ProductActions from "./Product Actions/ProductActions";
import { cartSliceActions } from "@/store/cart-slice";
import styles from "./ProductMain.module.scss";

const ProductMain = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log("clicked");
    dispatch(
      cartSliceActions.addToCart({
        id: props.productData.id,
        title: props.productData.title,
        price: props.productData.offerPrice,
        image: props.productData.image,
        colour: "black",
      })
    );
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
          brandName={props.productData.metaData.Brand}
          onClick={addToCartHandler}
        />
      </div>
    </main>
  );
};

export default ProductMain;
