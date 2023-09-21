import verifyToken from "@/database/verifyToken";
import Product from "@/models/product";
import User from "@/models/user";

const updateQuantity = async (req, res) => {
  // update quantity in cart
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      const error = new Error("Not authenticated");
      error.statusCode = 401;
      throw error;
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      const error = new Error("Invalid token");
      error.statusCode = 401;
      throw error;
    }

    const userId = decodedToken.userId;
    const productId = req.body.productId;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const productIndex = user.cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (productIndex < 0) {
      const error = new Error("Product not found in cart");
      error.statusCode = 404;
      throw error;
    }

    const product = await Product.findById(productId);

    const productQuantity = user.cart.items[productIndex].quantity;
    const productPrice = product.offerPrice;

    const quantity = parseInt(req.body.quantity);

    user.cart.items[productIndex].quantity = quantity;
    user.cart.totalQuantity =
      user.cart.totalQuantity - productQuantity + quantity;

    user.cart.subTotal =
      user.cart.subTotal -
      productQuantity * productPrice +
      quantity * productPrice;

    await user.save();

    res.status(200).json({ message: "Quantity updated", productId });
  } catch (err) {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({ messge: err.messge });
  }
};

export default updateQuantity;
