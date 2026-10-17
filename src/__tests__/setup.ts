import "@testing-library/jest-dom/vitest";
import { createElement, type CSSProperties, type ReactNode } from "react";

vi.mock("@samasante/liquid-glass", () => ({
  Glass: ({
    children,
    className,
    style,
  }: {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
  }) => createElement("div", { className, style }, children),
}));

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
