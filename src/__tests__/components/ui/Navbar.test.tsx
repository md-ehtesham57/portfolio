import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "@/components/ui/Navbar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navbar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  it("renders nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders logo initials", () => {
    render(<Navbar />);
    expect(screen.getByText("ME")).toBeInTheDocument();
  });

  it("renders Resume link pointing to the PDF", () => {
    render(<Navbar />);
    const resume = screen.getByText("Resume");
    expect(resume).toBeInTheDocument();
    expect(resume).toHaveAttribute("href", "/resume.pdf");
  });

  it("toggles mobile menu on hamburger click", async () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button");
    expect(screen.getAllByText("Resume")).toHaveLength(1);
    fireEvent.click(toggle);
    expect(screen.getAllByText("Resume")).toHaveLength(2);
    fireEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getAllByText("Resume")).toHaveLength(1)
    );
  });

  it("marks itself scrolled after scrolling past the threshold", () => {
    const { container } = render(<Navbar />);
    const nav = container.firstChild as HTMLElement;
    expect(nav.getAttribute("data-scrolled")).toBe("false");
    window.scrollY = 100;
    fireEvent.scroll(window);
    expect(nav.getAttribute("data-scrolled")).toBe("true");
  });
});
