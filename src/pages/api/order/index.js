import verifyToken from "@/database/verifyToken";
import Order from "@/models/order";

const postOrder = async (req, res) => {
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

    const items = req.body.items;
    const totalQuantity = req.body.totalQuantity;
    const subTotal = req.body.subTotal;
    const address = req.body.address;

    const order = new Order({
      items,
      totalQuantity,
      userId,
      subTotal,
      address,
      userId,
    });

    if (!order) {
      const error = new Error("Invalid order");
      error.statusCode = 401;
      throw error;
    }

    await order.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ message: error.message });
  }
};

export default postOrder;
