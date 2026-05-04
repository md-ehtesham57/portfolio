import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";


const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "too_many_requests"},
});

app.use(cors({
  origin: ["http://localhost:3000", "https://md-ehtesham.vercel.app"],
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());
app.use("/api/contact", limiter);

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Check User:", process.env.EMAIL_USER);
  console.log("Check Pass Length:", process.env.EMAIL_PASS?.length);
  console.log(`[SYSTEM]: Server running on port ${PORT}`);
});