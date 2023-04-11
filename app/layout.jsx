// import Modal from "./components/modals/Modal";
import { Providers } from "./GlobalRedux/provider";
import RegisterModal from "./components/modals/RegisterModal";
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
        <Providers>
          {/* <Modal isOpen title="Login" actionLabel="Submit" /> */}
          <RegisterModal />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
