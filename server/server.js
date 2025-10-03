import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use(express.json());

// Root route
app.get("/", (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    //  Ensure DB connects first
    await connectDB();

    //  Register routes after DB connection
    app.use("/api/user", userRouter);
    app.use("/api/owner", ownerRouter);
    app.use("/api/bookings", bookingRouter);

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer(); 



