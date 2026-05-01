import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-gray-400">
          Short intro about yourself.
        </p>
      </Container>
    </section>
  );
}