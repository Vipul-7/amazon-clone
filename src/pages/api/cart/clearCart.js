const verifyToken = require("@/database/verifyToken");
const { default: User } = require("@/models/user");

const clearCart = async (req, res) => {
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
    const user = await User.findById({ _id: userId });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    user.cart.items = [];
    user.cart.totalQuantity = 0;
    user.cart.subTotal = 0;
    await user.save();

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ message: error.message });
  }
};

export default clearCart;
