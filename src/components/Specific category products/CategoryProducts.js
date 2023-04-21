import ProductCard from "./ProductCard";
import styles from "./CategoryProducts.module.scss";

const CategoryProducts = () => {
  const DUMMY_PRODUCTS = [
    {
      id: "i1",
      image:
        "https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL600_FMwebp_QL65_.jpg",
      title:
        'Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate...',
      offerPrice: 1899,
      actualPrice: 4999,
      offerPercentage: 62,
    },
    {
      id: "i2",
      image:
        "https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL600_FMwebp_QL65_.jpg",
      title:
        'Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate...',
      offerPrice: 1899,
      actualPrice: 4999,
      offerPercentage: 62,
    },
    {
      id: "i3",
      image:
        "https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL600_FMwebp_QL65_.jpg",
      title:
        'Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate...',
      offerPrice: 1899,
      actualPrice: 4999,
      offerPercentage: 62,
    },
    {
      id: "i4",
      image:
        "https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL600_FMwebp_QL65_.jpg",
      title:
        'Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate...',
      offerPrice: 1899,
      actualPrice: 4999,
      offerPercentage: 62,
    },
    {
      id: "i5",
      image:
        "https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL600_FMwebp_QL65_.jpg",
      title:
        'Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate...',
      offerPrice: 1899,
      actualPrice: 4999,
      offerPercentage: 62,
    },
  ];

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
            {DUMMY_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
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
