import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/ui/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  it("renders nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders name and logo", () => {
    render(<Navbar />);
    expect(screen.getByText("Md Ehtesham")).toBeInTheDocument();
  });

  it("renders Resume link", () => {
    render(<Navbar />);
    const resume = screen.getByText("Resume ↗");
    expect(resume).toBeInTheDocument();
    expect(resume).toHaveAttribute("href", "https://drive.google.com/file/d/1VhiLrgksoReN4KRsgk-4YCQY2tm9p01T/view?usp=sharing");
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button");
    expect(screen.queryByText("Download Resume ↗")).not.toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByText("Download Resume ↗")).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.queryByText("Download Resume ↗")).not.toBeInTheDocument();
  });

  it("adds scrolled class when scrolled past 20px", () => {
    render(<Navbar />);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
  });
});
