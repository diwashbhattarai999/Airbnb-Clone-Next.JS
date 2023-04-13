import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import { SessionProvider } from "next-auth/react";

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

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <SessionProvider session={session}> */}
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
