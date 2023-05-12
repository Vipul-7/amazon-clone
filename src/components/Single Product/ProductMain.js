// import ProductActions from "./Product Actions/ProductActions";
import ProductDetails from "./Product details/ProductDetails";
import ProductVisuals from "./Product Visual/ProductVisuals";
import ProductActions from "./Product Actions/ProductActions";

import styles from "./ProductMain.module.scss";

const ProductMain = (props) => {
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
        />
      </div>
    </main>
  );
};

export default ProductMain;
