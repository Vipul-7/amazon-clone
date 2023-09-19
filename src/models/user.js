const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
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
    subTotal: {
      type: Number,
      //   required: true,
    },
    totalQuantity: {
      type: Number,
      //   required: true,
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
