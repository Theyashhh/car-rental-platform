import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.json({ success: false, message: "not authorized" });
  }

  try {
    // If token comes as "Bearer <token>"
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded.id should match the payload you set while signing
    req.user = await User.findById(decoded._id).select("-password");

    if (!req.user) {
      return res.json({ success: false, message: "user not found" });
    }

    next();
  } catch (error) {
    return res.json({ success: false, message: "not authorized" });
  }
};
