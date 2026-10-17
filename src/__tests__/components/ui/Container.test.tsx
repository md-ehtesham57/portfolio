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

  it("renders centered with responsive padding classes", () => {
    const { container } = render(<Container>content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toMatch(/max-w-\w+/);
    expect(div.className).toContain("mx-auto");
    expect(div.className).toContain("px-4");
    expect(div.className).toContain("sm:px-6");
  });
});
