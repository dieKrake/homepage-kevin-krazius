import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch";
// import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antik Schwarz | Christian Schwarz",
  description: "Antik Schwarz...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-[4.5rem] bg-gray-900 text-gray-50 text-opacity-90`}
      >
        {/* <ThemeContextProvider> */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="top-right" />
          {/* <ThemeSwitch /> */}
        </ActiveSectionContextProvider>
        {/* </ThemeContextProvider> */}
      </body>
    </html>
  );
}
