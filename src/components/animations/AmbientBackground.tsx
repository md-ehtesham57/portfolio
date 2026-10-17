export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="ambient-base" />
      <div className="ambient-blob ambient-blob--violet" />
      <div className="ambient-blob ambient-blob--cyan" />
      <div className="ambient-blob ambient-blob--magenta" />
      <div className="ambient-blob ambient-blob--indigo" />
      <div className="ambient-vignette" />
      <div className="film-grain" />
    </div>
  );
}
