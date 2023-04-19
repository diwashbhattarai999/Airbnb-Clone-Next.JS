"use client";

import { useEffect, useState } from "react";
import getListings from "../actions/getListings";
import EmptyContainer from "../components/EmptyContainer";
import FavoritesClient from "./FavoritesClient";

const ListingPage = () => {
  const [favorites, setFavorites] = useState([]);
  const listings = getListings();

  useEffect(() => {
    const favoriteId = JSON.parse(sessionStorage.getItem("favorites")) || [];
    setFavorites(favoriteId);
  }, []);

  const newListings = listings.filter((listing) => favorites[listing.id]);

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
