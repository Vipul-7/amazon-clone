import ProductCard from "./ProductCard";
import styles from "./CategoryProducts.module.scss";

const CategoryProducts = (props) => {
  return (
    <>
      <div className={styles.header}>
        <h3>24 results</h3>
        <select name="sort" id="sort">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="discount">Discount</option>
        </select>
      </div>
      <div className={styles.main}>
        <section className={styles["extra-info"]}></section>

        <section className={styles.products}>
          <h2>RESULTS</h2>
          <section className={styles["products-cards"]}>
            {props.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                offerPrice={product.offerPrice}
                actualPrice={product.actualPrice}
                offerPercentage={product.offerPercentage}
              />
            ))}
          </section>
        </section>
      </div>
    </>
  );
};

export default CategoryProducts;
