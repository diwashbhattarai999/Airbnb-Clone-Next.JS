"use client";

import { useEffect, useState } from "react";
import { listingsData } from "../components/listingsData";
import EmptyContainer from "../components/EmptyContainer";
import FavoritesClient from "./FavoritesClient";

const ListingPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteId = JSON.parse(sessionStorage.getItem("favorites")) || [];
    setFavorites(favoriteId);
  }, []);

  const newListings = listingsData.filter((listing) => favorites[listing.id]);

  if (newListings.length === 0) {
    return (
      <EmptyContainer
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return (
    <div>
      <FavoritesClient listings={newListings} />
    </div>
  );
};

export default ListingPage;
