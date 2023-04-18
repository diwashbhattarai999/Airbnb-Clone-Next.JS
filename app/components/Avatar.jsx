"use client";

import Image from "next/image";

const Avatar = ({ srcImg }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={srcImg || "/assets/placeholder.jpg"}
    />
  );
};

export default Avatar;
