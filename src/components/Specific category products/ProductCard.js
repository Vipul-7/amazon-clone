import styles from './ProductCard.module.scss';

const ProductCard = (props) =>{
    return <div className={styles.main}>
        <section className={styles.image}>
            <img src={props.image} alt="product"/>
        </section>
        <section className={styles.details}>
            <h4 className={styles.title}>{props.title}</h4>
            <section className={styles["rating-info"]}>
                 
            </section>
            <div className={styles["extra-label"]}>Limited time deal</div>
            <section>

            </section>
            <section></section>
        </section>
    </div>
}

export default ProductCard;