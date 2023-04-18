import { VscGlobe } from "react-icons/vsc";
import { CgDollar } from "react-icons/cg";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Container from "../Container";
import { aboutData, communityData, hostData, supportData } from "./FooterData";
import FooterSection from "./FooterSection";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 py-4">
      <Container>
        <div className="lg:flex justify-between">
          <FooterSection title="About" data={aboutData} />
          <FooterSection title="Community" data={communityData} />
          <FooterSection title="Host" data={hostData} />
          <FooterSection title="Support" data={supportData} />
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row py-4 gap-4">
          <p className="flex items-center justify-center gap-2">
            <span className="flex items-center gap-1 text-lg cursor-pointer hover:opacity-80">
              <VscGlobe />
              English
            </span>
            <span className="flex items-center gap-1 text-lg cursor-pointer hover:opacity-80">
              <CgDollar />
              USD
            </span>
            <FiFacebook className="text-lg cursor-pointer hover:opacity-80" />
            <FiTwitter className="text-lg cursor-pointer hover:opacity-80" />
            <FiInstagram className="text-lg cursor-pointer hover:opacity-80" />
          </p>
          <p className="text-lg">
            &copy; 2021{" "}
            <a
              className="font-bold tracking-[-.25rem]"
              href="https://diwashb.com.np"
              target="_blank"
              rel="noreferrer"
            >
              DB
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
