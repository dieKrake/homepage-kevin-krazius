import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch";
// import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krazius Solutions | Kevin Krazius",
  description: "Krazius Solutions ist...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-[4.5rem] bg-gray-950 text-gray-50 text-opacity-90`}
      >
        {/* <ThemeContextProvider> */}

        <Header />
        {children}
        <Footer />

        <Toaster position="top-right" />
        {/* <ThemeSwitch /> */}
        {/* </ThemeContextProvider> */}
      </body>
    </html>
  );
}
