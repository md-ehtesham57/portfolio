import { renderHook, act } from "@testing-library/react";
import { useTypewriter } from "@/hooks/useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial empty string", () => {
    const { result } = renderHook(() => useTypewriter("hello"));
    expect(result.current).toBe("");
  });

  it("types characters one by one", () => {
    const { result } = renderHook(() => useTypewriter("hey", 50));

    // At 50ms: interval fires, i=0, slice(0,0)="" then i=1
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("");

    // At 100ms: interval fires, i=1, slice(0,1)="h" then i=2
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("h");

    // At 150ms: interval fires, i=2, slice(0,2)="he" then i=3
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("he");

    // At 200ms: interval fires, i=3, slice(0,3)="hey" then i=4, clears
    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe("hey");
  });

  it("returns full string after all delays", () => {
    const { result } = renderHook(() => useTypewriter("abc", 30));

    // 4 ticks to complete "abc": t=0→30→60→90→120
    act(() => vi.advanceTimersByTime(120));
    expect(result.current).toBe("abc");
  });

  it("cleans up interval on unmount", () => {
    const { result, unmount } = renderHook(() => useTypewriter("abc", 100));
    unmount();
    act(() => vi.advanceTimersByTime(500));
    expect(result.current).toBe("");
  });
});
