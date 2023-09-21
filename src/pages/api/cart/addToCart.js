import verifyToken from "@/database/verifyToken";
import User from "@/models/user";

const addToCart = async (req, res) => {
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
    const quantity = parseInt(req.body.quantity);
    const price = req.body.price;

    const user = await User.findById({ _id: userId });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const productIndex = user.cart.items.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (user.cart.items.length === 0) {
      user.cart.subTotal = 0;
      user.cart.totalQuantity = 0;
    }

    if (productIndex >= 0) {
      user.cart.items[productIndex].quantity += quantity;
    } else {
      user.cart.items.push({
        productId,
        quantity,
      });
    }

    user.cart.subTotal += quantity * price;
    user.cart.totalQuantity += quantity;

    await user.save();
    res
      .status(200)
      .json({ message: "Product added to cart", productId, quantity });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    res.status(error.statusCode).json({ message: error.message });
  }
};

export default addToCart;
