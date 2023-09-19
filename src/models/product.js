const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  offerPercentage: {
    type: Number,
    required: true,
  },
  aboutItem: [
    {
      type: String,
    },
  ],
  metaData: [
    {
      brand: {
        type: String,
      },
      modelName: {
        type: String,
      },
      colour: {
        type: String,
      },
      style: {
        type: String,
      },
      ScreenSize: {
        type: String,
      },
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
