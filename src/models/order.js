const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
