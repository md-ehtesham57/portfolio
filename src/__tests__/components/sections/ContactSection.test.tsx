import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "@/components/sections/ContactSection";

async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByPlaceholderText(/your name/i), "Test");
  await user.type(screen.getByPlaceholderText("your@email.com"), "test@test.com");
  await user.type(
    screen.getByPlaceholderText(/tell me about your project/i),
    "This is a test message."
  );
}

describe("ContactSection", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_API_URL", "http://localhost:5000");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("renders form fields", () => {
    render(<ContactSection />);
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/tell me about your project/i)).toBeInTheDocument();
  });

  it("renders contact info (email, location)", () => {
    render(<ContactSection />);
    expect(screen.getByText("mdehtesham313@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Bhopal, India")).toBeInTheDocument();
  });

  it("renders GitHub and LinkedIn links", () => {
    render(<ContactSection />);
    const github = screen.getByText("GitHub");
    const linkedin = screen.getByText("LinkedIn");
    expect(github.closest("a")).toHaveAttribute("href", "https://github.com/md-ehtesham57");
    expect(linkedin.closest("a")).toHaveAttribute("href", "https://www.linkedin.com/in/md-ehtesham-153344259/");
  });

  it("shows success message on submit", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", mockFetch);

    render(<ContactSection />);
    const user = userEvent.setup();
    await fillForm(user);
    await user.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledOnce();
  });

  it("shows error message on network failure", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("Network error"));
    vi.stubGlobal("fetch", mockFetch);

    render(<ContactSection />);
    const user = userEvent.setup();
    await fillForm(user);
    await user.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it("shows rate limit message on 429", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ status: 429, ok: false });
    vi.stubGlobal("fetch", mockFetch);

    render(<ContactSection />);
    const user = userEvent.setup();
    await fillForm(user);
    await user.click(screen.getByText("Send Message"));

    await waitFor(() => {
      expect(screen.getByText(/too many messages/i)).toBeInTheDocument();
    });
  });
});
