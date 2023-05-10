import ProductActions from "./ProductActions";
import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";

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
          actualPrice={props.productData.actualProce}
          offerPercentage={props.productData.offerPercentage}
        />
      </div>
      <div className={styles.actions}>
        <ProductActions />
      </div>
    </main>
  );
};

export default ProductMain;
