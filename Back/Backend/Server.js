import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import khaltiRoutes from "./Route/KhaltiRoute.js";
import userroute from "./Route/userRoute.js";
import productRoutes from "./Route/Product.js";
import Favoriteroute from "./Route/Favoriteroute.js";
import AdminRoute from "./Route/AdminRoute.js";

dotenv.config();         
connectDB();            

const app = express();
const port = process.env.PORT || 5001;

// ✅ Middleware should come BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ✅ Routes
app.use("/api/khalti", khaltiRoutes); 
app.use("/api/auth", userroute); 
app.use("/api", Favoriteroute); 
app.use("/api", AdminRoute); // moved here after middleware
app.use("/api/product", productRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on PORT ${port}`);
  console.log(`🌐 Backend URI: ${process.env.BACKEND_URI}`);
});
