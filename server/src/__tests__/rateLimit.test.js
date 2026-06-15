import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import express from "express";
import rateLimit from "express-rate-limit";

// This test validates the rate limiter directly (not through the main app)
// since the main app skips rate limiting in test mode.

describe("rate limiter middleware", () => {
  it("blocks requests after the limit is reached", async () => {
    const app = express();
    app.use(express.json());

    const limiter = rateLimit({
      windowMs: 60 * 1000,
      max: 3,
      message: { error: "too_many_requests" },
    });

    app.use("/test", limiter);
    app.post("/test", (_req, res) => res.json({ ok: true }));

    for (let i = 0; i < 3; i++) {
      const res = await request(app).post("/test").send({});
      expect(res.status).toBe(200);
    }

    const blocked = await request(app).post("/test").send({});
    expect(blocked.status).toBe(429);
    expect(blocked.body.error).toBe("too_many_requests");
  });
});
