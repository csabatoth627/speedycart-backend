import { log } from "console";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"


connectDb();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders",orderRoutes);

app.get("/api/config/paypal", (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
