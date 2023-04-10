import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

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
        <Modal isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
