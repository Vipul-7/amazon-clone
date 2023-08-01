import React from "react";
import styles from "./ProductDetails.module.scss";
import Button from "../../Layouts/Button";
import RatingStarFull from "../../Icons/RatingStarFull";
import RatingStarEmpty from "../../Icons/RatingStarEmpty";
import ChevronDownIcon from "../../Icons/ChevronDownIcon";
import OfferIcon from "../../Icons/OfferIcon";
import OffersCard from "./OffersCard";
import ServicesOnProduct from "./ServicesOnProduct";

const ProductDetails = (props) => {
  return (
    <main>
      <div className={styles.container1}>
        <h1>{props.title}</h1>
        <p>
          <Button text="Visit the Brand store" />
        </p>
        <section className={styles.ratingInfo}>
          <span className={styles["ratingInfo--text"]}>4.0</span>
          <span className={styles["ratingInfo--icons"]}>
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarFull />
            <RatingStarEmpty />
            <ChevronDownIcon />
          </span>
          <span className={styles["ratingInfo--rating-count"]}>
            <Button text="3,306 ratings" />
          </span>
          |
          <span className={styles["ratingInfo--ans-count"]}>
            <Button text="391 answered questions" />
          </span>
        </section>
      </div>

      <div className={styles.container2}>
        <section className={styles["offer-price"]}>
          <span className={styles["offer-price__percentage"]}>
            -{props.offerPercentage}%
          </span>
          <span className={styles["offer-price__price"]}>
            <span className={styles["offer-price__price--rupee"]}>₹</span>
            {props.offerPrice}
          </span>
        </section>
        <section className={styles["actual-price"]}>
          <span>M.R.P:</span>
          <s>₹{props.actualPrice}</s>
        </section>
        <div className={styles["fullfilled-image"]}>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
            alt="amazon fulfillment"
          />
        </div>
        <p>Inclusive of all taxes</p>
        <p>
          <span className={styles.s1}>EMI</span>starts at ₹78. No Cost EMI
          available
          <span className={styles.s2}>EMI options</span>
          <ChevronDownIcon />
        </p>
      </div>

      <div className={styles.container3}>
        <section className={styles.offerTitle}>
          <OfferIcon />
          <span>Offers</span>
        </section>
        <div className={styles.offersSlider}>
          <OffersCard
            title="No Cost EMI"
            description="Upto ₹81.03 EMI interest savings on Amazon Pay ICICI…"
            offersCount="2 offers"
          />
          <OffersCard
            title="Bank Offer"
            description="Upto ₹179.90 discount on select Credit Cards"
            offersCount="5 offers"
          />
          <OffersCard
            title="Partner Offers"
            description="Get GST invoice and save up to 28% on business purchases."
            offersCount="1 offers"
          />
        </div>
      </div>

      <div className={styles.container4}>
        <ServicesOnProduct />
      </div>

      <div className={styles.container5}>
        {/* Object.keys returns an array of keys */}
        {Object.keys(props.metaData).map((key) => (
          <section key={key}>
            <p className={styles.key}>{key}</p>
            <p className={styles.value}>{props.metaData[key]}</p>
          </section>
        ))}
      </div>

      <div className={styles.container6}>
        <h3>About this item</h3>
        <ul>
          {props.aboutItem && props.aboutItem.map((item, index) => (
            <section key={index}>
              <li>{item}</li>
            </section>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProductDetails;
