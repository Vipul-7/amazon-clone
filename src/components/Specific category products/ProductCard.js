import CheckIcon from "../Icons/CheckIcon";
import ChevronDownIcon from "../Icons/ChevronDownIcon";
import CorrectIcon from "../Icons/CorrectIcon";
import RatingStarEmpty from "../Icons/RatingStarEmpty";
import RatingStarFull from "../Icons/RatingStarFull";
import RightArrowIcon from "../Icons/RightArrowIcon";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={styles.main}>
      <section className={styles.image}>
        <img src={props.image} alt="product" />
      </section>
      <section className={styles.details}>
        <h4 className={styles.title}>{props.title}</h4>
        <section className={styles["rating-info"]}>
          <section className={styles.icons1}>
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarEmpty />
          </section>
          <section className={styles.diff}>
            {" "}
            <ChevronDownIcon />
            <span>2,472</span>
          </section>
        </section>
        {/* <div className={styles["extra-label"]}>Limited time deal</div> */}
        <section className={styles["price-details"]}>
          <div className={styles["price-details__upper"]}>
            <span className={styles["price-details__upper-offerPrice"]}>
              <span>₹</span>
              {props.offerPrice}
            </span>
            <span className={styles.span2}>
              <span>₹</span>
              <s>{props.actualPrice}</s>{" "}
            </span>
            <span className={styles.span3}>({props.offerPercentage}% off)</span>
          </div>
          <div className={styles["price-details__lower"]}>
            <p>Buy 2 items, get 5% off</p>
          </div>
        </section>
        <section className={styles["delivery-details"]}>
          <div className={styles["delivery-details__upper"]}>
            <span>
              <CheckIcon />
            </span>
            <span className={styles.prime}>prime </span>
            <span>Get it by </span>
            <span className={styles.date}>Monday, 24 April</span>
          </div>
          <div className={styles["delivery-details__lower"]}>
            FREE Delivery by Amazon
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductCard;
