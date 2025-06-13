import type { Metadata } from "next";
import { Montserrat, Lato, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Definisikan sebagai variabel CSS
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Contoh: memuat ketebalan light, regular, bold, dan black
  variable: "--font-lato", // Definisikan sebagai variabel CSS
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Contoh: memuat ketebalan light, regular, medium, semi-bold, dan bold
  variable: "--font-poppins", // Definisikan sebagai variabel CSS
});

export const metadata: Metadata = {
  title: "Tokoku.co.id",
  description: "Tokoku web ecommerce indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${montserrat.variable} ${lato.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
