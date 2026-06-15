import { render, screen } from "@testing-library/react";
import Container from "@/components/ui/Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container>
        <p>Hello</p>
      </Container>
    );
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders with max-w-6xl mx-auto px-6 classes", () => {
    const { container } = render(<Container>content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("max-w-6xl");
    expect(div.className).toContain("mx-auto");
    expect(div.className).toContain("px-6");
  });
});
