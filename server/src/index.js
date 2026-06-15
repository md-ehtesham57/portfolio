import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";


const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "too_many_requests"},
});

const allowedOrigins = process.env.NODE_ENV === "development"
  ? ["http://localhost:3000", "https://md-ehtesham.vercel.app"]
  : ["https://md-ehtesham.vercel.app"];

app.use(cors({
  origin: allowedOrigins,
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"], // Tailwind needs this
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    }
  }
}));
app.use(express.json());
if (process.env.NODE_ENV !== "test") {
  app.use("/api/contact", limiter);
}

app.use("/api/contact", contactRoutes);

export default app;

// Only start the server when run directly (not imported by tests)
if (process.argv[1] && process.argv[1].includes("index.js")) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`[SYSTEM]: Server running on port ${PORT}`);
  });
}