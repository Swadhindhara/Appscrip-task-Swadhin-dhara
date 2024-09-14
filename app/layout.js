import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "./_components/layout";

const simplonNorm = localFont({
  src: "./fonts/SimplonNorm-Regular-WebS.woff",
  variable: "--font-simplon",
  weight: "100 400 500 600 700 900",
});

export const metadata = {
  title: "Appscrip - Assignment",
  description: "Build by Swadhin Dhara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${simplonNorm.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
