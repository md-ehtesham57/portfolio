import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import PremiumBackground from "@/components/animations/PremiumBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative">

        {/* Background Layer */}
        <div className="fixed inset-0 -z-10">
          <PremiumBackground />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 pt-20 md:pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}