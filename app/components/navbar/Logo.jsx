"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="hidden lg:block cursor-pointer"
        height="100"
        width="100"
        src="/assets/logo.png"
      />
      <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="lg:hidden cursor-pointer"
        height="100"
        width="33"
        src="/assets/mobile-logo.png"
      />
    </>
  );
};

export default Logo;
