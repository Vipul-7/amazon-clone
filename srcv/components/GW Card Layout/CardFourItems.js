import styles from "./CardFourItems.module.scss";

const CardFourItems = (props) => {
  return (
    <div className={styles.main}>
      <h2>{props.title}</h2>
      <section className={styles["show-up"]}>
        <section className={styles["image-box"]}>
          <img src={props.image1}></img>
          <p>{props.imageTitle1}</p>
        </section>
        <section>
          <img src={props.image2}></img>
          <p>{props.imageTitle2}</p>
        </section>
        <section>
          <img src={props.image3}></img>
          <p>{props.imageTitle3}</p>
        </section>
        <section>
          <img src={props.image4}></img>
          <p>{props.imageTitle4}</p>
        </section>
      </section>
      <section className={styles["bottom-text"]}>
        <h5>{props.bottomText}</h5>
      </section>
    </div>
  );
};

export default CardFourItems;
