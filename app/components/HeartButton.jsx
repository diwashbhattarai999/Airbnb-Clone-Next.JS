"use client";

import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const HeartButton = ({ listingId }) => {
  const [hasFavorited, setHasFavorited] = useState(false);

  const toggleFavorite = () => {
    setHasFavorited(!hasFavorited);
  };

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || {};
    if (favorites[listingId]) {
      setHasFavorited(true);
    }
  }, [listingId]);

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || {};
    if (hasFavorited) {
      favorites[listingId] = true;
    } else {
      delete favorites[listingId];
    }
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  }, [listingId, hasFavorited]);

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={`${hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};

export default HeartButton;
