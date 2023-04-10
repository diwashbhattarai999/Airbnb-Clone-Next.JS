"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        alt="logo"
        className="hidden lg:block cursor-pointer"
        height="100"
        width="100"
        src="/assets/logo.png"
      />
      <Image
        alt="logo"
        className="lg:hidden cursor-pointer"
        height="100"
        width="34"
        src="/assets/mobile-logo.png"
      />
    </>
  );
};

export default Logo;
