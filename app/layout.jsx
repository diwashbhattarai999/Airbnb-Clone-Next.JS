import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import Footer from "./components/footer/Footer";
import Hosting from "./components/Hosting";

export const metadata = {
  title: "Airbnb | Airbnb clone ",
  description: "Airbnb clone",
  icons: {
    icon: "/assets/mobile-logo.png",
  },
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        <div className="pb-20 pt-28">{children}</div>
        <Hosting />
        <Footer />
      </body>
    </html>
  );
}
