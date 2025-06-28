// app/LayoutWithLanguage.jsx
"use client";

import { useLanguage } from "./context/LanguageContext";
import Header from "../../Components/Header";
import Main from "../../Components/Main";
import Footer from "../../Components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function LayoutWithLanguage({ children }) {
  const { language } = useLanguage();

  return (
    <div className={`${poppins.className} bg-white`}>
      <Header />
      <Main />
      {children}
      <Footer />
    </div>
  );
}
