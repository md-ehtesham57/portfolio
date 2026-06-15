import { describe, it, expect, vi, beforeAll } from "vitest";
import request from "supertest";

// Mock nodemailer before importing the app
vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: "mock-id" }),
    })),
  },
}));

let app;

beforeAll(async () => {
  process.env.NODE_ENV = "test";
  process.env.EMAIL_USER = "test@example.com";
  process.env.EMAIL_PASS = "test-pass";
  const mod = await import("../index.js");
  app = mod.default || mod;
});

describe("POST /api/contact/send", () => {
  it("returns 200 for valid contact submission", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({ name: "Test", email: "test@example.com", message: "Hello, this is a test message." });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("returns 200 for bot submissions (honeypot company field silently accepted)", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({
        name: "Bot",
        email: "bot@spam.com",
        message: "Buy my product!",
        company: "SpamCo",
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("returns 400 for missing required fields", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({ name: "Test" });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("validation_failed");
  });

  it("returns 400 for invalid email", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({ name: "Test", email: "not-an-email", message: "a".repeat(20) });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("validation_failed");
  });

  it("returns 400 for message too short", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({ name: "Test", email: "test@example.com", message: "short" });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("validation_failed");
  });

  it("returns 400 for name too long", async () => {
    const res = await request(app)
      .post("/api/contact/send")
      .send({ name: "A".repeat(100), email: "test@example.com", message: "a".repeat(20) });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe("validation_failed");
  });
});
