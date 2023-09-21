import verifyToken from "@/database/verifyToken";

const { default: User } = require("@/models/user");

const getCart = async (req, res) => {
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

    const user = await User.findById({ _id: userId }).populate(
      "cart.items.productId"
    );

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ cart: user.cart });
  } catch (err) {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({ message: err.message });
  }
};

export default getCart;
