"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  y: number;
  opacity: number;
  size: number;
  speed: number;
}

export default function ScrollArea({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef    = useRef<HTMLDivElement>(null);
  const thumbRef        = useRef<HTMLDivElement>(null);
  const filledRef       = useRef<HTMLDivElement>(null);
  const unfilledRef     = useRef<HTMLDivElement>(null);
  const canvasRef       = useRef<HTMLCanvasElement>(null);
  const trackRef        = useRef<HTMLDivElement>(null);

  const isDragging      = useRef(false);
  const dragStartY      = useRef(0);
  const dragStartScroll = useRef(0);
  const rafId           = useRef<number>(0);
  const particleRaf     = useRef<number>(0);
  const particles       = useRef<Particle[]>([]);
  const thumbTopRef     = useRef(0);
  const prevThumbTop    = useRef(0);
  const isScrolling     = useRef(false);
  const scrollTimeout   = useRef<ReturnType<typeof setTimeout> | null > (null);

  // ── Spawn particles ───────────────────────────────────────────────────
  const spawnParticles = useCallback((thumbTop: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
      particles.current.push({
        y       : thumbTop + 10,
        opacity : Math.random() * 0.7 + 0.3,
        size    : Math.random() * 2.5 + 1,
        speed   : Math.random() * 1.5 + 0.8,
      });
    }
    if (particles.current.length > 40) {
      particles.current = particles.current.slice(-40);
    }
  }, []);

  // ── Main updater (DOM-direct, zero state) ─────────────────────────────
  const updateThumb = useCallback(() => {
    const container = containerRef.current;
    const thumb     = thumbRef.current;
    const filled    = filledRef.current;
    const unfilled  = unfilledRef.current;
    const track     = trackRef.current;
    if (!container || !thumb || !filled || !unfilled || !track) return;

    const thumbSize  = thumb.getBoundingClientRect().width || 22;
    const trackH     = track.clientHeight;
    const scrollRatio = container.scrollHeight / container.clientHeight;
    const thumbH     = Math.max(trackH / scrollRatio, thumbSize);
    const maxTop     = trackH - thumbH;
    const progress   = container.scrollTop /
                       (container.scrollHeight - container.clientHeight) || 0;
    const thumbTop   = progress * maxTop;

    if (thumbTop > prevThumbTop.current) spawnParticles(thumbTop);
    prevThumbTop.current = thumbTop;
    thumbTopRef.current  = thumbTop;

    thumb.style.height    = `${thumbH}px`;
    thumb.style.transform = `translate(-50%, ${thumbTop}px)`;

    const filledH   = thumbTop + thumbH / 2;
    const unfilledH = trackH - filledH;
    filled.style.height   = `${filledH}px`;
    unfilled.style.height = `${unfilledH}px`;
  }, [spawnParticles]);

  // ── Scroll listener ───────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      isScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateThumb);
    };

    updateThumb();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateThumb);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateThumb]);

  // ── Particle loop ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const canvasEl = canvas;
    const context = ctx;

    function animate() {
      context.clearRect(0, 0, canvasEl.width, canvasEl.height);

      const next: Particle[] = [];
      for (const p of particles.current) {
        const opacity = p.opacity * 0.93;
        if (opacity <= 0.02) continue;
        const y = p.y - p.speed;
        next.push({ ...p, y, opacity });

        context.beginPath();
        context.arc(canvasEl.width / 2, y, p.size, 0, Math.PI * 2);
        context.fillStyle   = `rgba(0, 255, 136, ${opacity})`;
        context.shadowColor = "#00ff88";
        context.shadowBlur  = 6;
        context.fill();
      }
      particles.current = next;

      particleRaf.current = requestAnimationFrame(animate);
    }

    particleRaf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(particleRaf.current);
  }, []);

  // ── Canvas sizing — reads actual track width for mobile accuracy ──────
  useEffect(() => {
    const canvas = canvasRef.current;
    const track  = trackRef.current;
    if (!canvas || !track) return;
    const resize = () => {
      canvas.width  = track.clientWidth;   // ← dynamic, not hardcoded 24
      canvas.height = track.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ── Mouse drag ────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current      = true;
    dragStartY.current      = e.clientY;
    dragStartScroll.current = containerRef.current?.scrollTop ?? 0;
  }, []);

  // ── Touch drag ────────────────────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current      = true;
    dragStartY.current      = e.touches[0].clientY;
    dragStartScroll.current = containerRef.current?.scrollTop ?? 0;
  }, []);

  // ── Global mouse + touch move/up listeners ────────────────────────────
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const container = containerRef.current;
      const track     = trackRef.current;
      const thumb     = thumbRef.current;
      if (!container || !track || !thumb) return;
      const delta      = e.clientY - dragStartY.current;
      const scrollable = track.clientHeight - thumb.clientHeight;
      const ratio      = (container.scrollHeight - container.clientHeight) / scrollable;
      container.scrollTop = dragStartScroll.current + delta * ratio;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const container = containerRef.current;
      const track     = trackRef.current;
      const thumb     = thumbRef.current;
      if (!container || !track || !thumb) return;
      const delta      = e.touches[0].clientY - dragStartY.current;
      const scrollable = track.clientHeight - thumb.clientHeight;
      const ratio      = (container.scrollHeight - container.clientHeight) / scrollable;
      container.scrollTop = dragStartScroll.current + delta * ratio;
    };

    const onMouseUp  = () => { isDragging.current = false; };
    const onTouchEnd = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend",  onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend",  onTouchEnd);
    };
  }, []);

  // ── Track click to jump ───────────────────────────────────────────────
  const onTrackClick = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    const track     = trackRef.current;
    const thumb     = thumbRef.current;
    if (!container || !track || !thumb) return;
    if ((e.target as HTMLElement).closest("[data-thumb]")) return;
    const rect   = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top - thumb.clientHeight / 2;
    const ratio  = (container.scrollHeight - container.clientHeight) /
                   (track.clientHeight - thumb.clientHeight);
    container.scrollTop = clickY * ratio;
  }, []);

  return (
    <div
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      className={className}
    >
      {/* ── Responsive CSS vars ──────────────────────────────────── */}
      <style>{`
        :root {
          --sb-width: 24px;
          --sb-right: 12px;
          --sb-top:   20px;
          --sb-thumb: 22px;
          --sb-track: 2px;
        }
        @media (max-width: 768px) {
          :root {
            --sb-width: 14px;
            --sb-right: 4px;
            --sb-top:   12px;
            --sb-thumb: 14px;
            --sb-track: 1.5px;
          }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── Scrollable content ───────────────────────────────────── */}
      <div
        ref={containerRef}
        style={{
          height                  : "100%",
          overflowY               : "scroll",
          overflowX               : "hidden",
          scrollbarWidth          : "none",
          msOverflowStyle         : "none" as React.CSSProperties["msOverflowStyle"],
          WebkitOverflowScrolling : "touch",
        }}
      >
        {children}
      </div>

      {/* ── Scrollbar track column ───────────────────────────────── */}
      <div
        ref={trackRef}
        onClick={onTrackClick}
        style={{
          position : "absolute",
          right    : "var(--sb-right)",
          top      : "var(--sb-top)",
          bottom   : "var(--sb-top)",
          width    : "var(--sb-width)",
          cursor   : "pointer",
          zIndex   : 9999,
        }}
      >
        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position      : "absolute",
            top           : 0,
            left          : 0,
            width         : "100%",
            height        : "100%",
            pointerEvents : "none",
            zIndex        : 0,
          }}
        />

        {/* Filled track — scrolled portion */}
        <div
          ref={filledRef}
          style={{
            position     : "absolute",
            top          : 0,
            left         : "50%",
            transform    : "translateX(-50%)",
            width        : "var(--sb-track)",
            height       : 0,
            background   : "linear-gradient(to bottom, #003d1f, #00a854)",
            borderRadius : "2px 2px 0 0",
            boxShadow    : "0 0 6px rgba(0,255,136,0.4)",
            zIndex       : 1,
          }}
        />

        {/* Unfilled track — remaining portion */}
        <div
          ref={unfilledRef}
          style={{
            position     : "absolute",
            bottom       : 0,
            left         : "50%",
            transform    : "translateX(-50%)",
            width        : "var(--sb-track)",
            height       : "100%",
            background   : "rgba(0,255,136,0.12)",
            borderRadius : "0 0 2px 2px",
            zIndex       : 1,
          }}
        />

        {/* Thumb */}
        <div
          ref={thumbRef}
          data-thumb="true"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          style={{
            position       : "absolute",
            top            : 0,
            left           : "50%",
            transform      : "translate(-50%, 0px)",
            width          : "var(--sb-thumb)",
            height         : "var(--sb-thumb)",
            display        : "flex",
            alignItems     : "center",
            justifyContent : "center",
            cursor         : "grab",
            willChange     : "transform",
            zIndex         : 2,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,255,136,0.9))" }}
          >
            <circle cx="11" cy="11" r="9"
              stroke="#00ff88" strokeWidth="1"
              fill="rgba(0,255,136,0.05)" />
            <circle cx="11" cy="11" r="5"
              stroke="#00ff88" strokeWidth="1"
              fill="rgba(0,255,136,0.1)" />
            <circle cx="11" cy="11" r="2" fill="#00ff88" />
            <line x1="11" y1="1"  x2="11" y2="5"
              stroke="#00ff88" strokeWidth="1" strokeLinecap="round" />
            <line x1="11" y1="17" x2="11" y2="21"
              stroke="#00ff88" strokeWidth="1" strokeLinecap="round" />
            <line x1="1"  y1="11" x2="5"  y2="11"
              stroke="#00ff88" strokeWidth="1" strokeLinecap="round" />
            <line x1="17" y1="11" x2="21" y2="11"
              stroke="#00ff88" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}