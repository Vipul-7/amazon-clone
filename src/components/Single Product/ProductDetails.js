import React from "react";

const ProductDetails = (props) => {
  return (
    <main>
      <div>
        <h1>{props.title}</h1>
        <p>Visit the {props.metaData.Brand} Store</p>
        <section></section>
      </div>
      <div>
        <section>
          <span>-{props.offerPercentage}%</span>
          <span>{props.offerPrice}</span>
        </section>
        <section>
          <span>M.R.P</span>
          <span>{props.actualPrice}</span>
        </section>
        <p>Inclusive of all taxes</p>
        <section>
          <p>
            <span>EMI</span>starts at ₹78. No Cost EMI available
            <span>EMI options</span>
          </p>
        </section>
      </div>
      <div>
        <section>
          <span></span>
          <span>Offers</span>
        </section>
        {"Carousel"}
      </div>
      <div></div>
      <div>
        {/* Object.keys returns an array of keys */}
        {Object.keys(props.metaData).map((key) => (
          <section key={key}>
            <span>{key}</span>
            <span>{props.metaData[key]}</span>
          </section>
        ))}
      </div>
      <div>
        <h3>About this item</h3>
        <ul>
          {props.aboutItem.map((item, index) => (
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
