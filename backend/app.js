import express from "express";
import cors from "cors";
import { user } from "./routes/user.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8081",
  }),
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
});

app.use("/user", require("./routes/user/User"));
app.use("/auth", require("./routes/user/Auth"));
app.use("/clubs", require("./routes/club/Club"));
app.use("/display", require("./routes/display/Display"));
app.use("/payment", require("./routes/payment/Payment"));
app.use("/product", require("./routes/shop/Products"));
app.use("/events", require("./routes/events/Event"));

export default app;
