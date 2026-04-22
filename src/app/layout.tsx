import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}