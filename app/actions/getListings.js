import { listingsData } from "../components/listingsData";

export default async function getListings(params) {
  const {
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
    startDate,
    endDate,
    category,
  } = params;

  let filteredListings = [...listingsData];

  if (category) {
    filteredListings = filteredListings.filter(
      (listing) => listing.category === category
    );
  }

  if (roomCount) {
    filteredListings = filteredListings.filter(
      (listing) => listing.roomCount >= +roomCount
    );
  }

  if (guestCount) {
    filteredListings = filteredListings.filter(
      (listing) => listing.guestCount >= +guestCount
    );
  }

  if (bathroomCount) {
    filteredListings = filteredListings.filter(
      (listing) => listing.bathroomCount >= +bathroomCount
    );
  }

  if (locationValue) {
    filteredListings = filteredListings.filter(
      (listing) => listing.locationValue === locationValue
    );
  }

  if (startDate && endDate) {
    filteredListings = filteredListings.filter((listing) => {
      const reservations = listing.reservations || [];
      const overlappingReservations = reservations.filter(
        (reservation) =>
          reservation.endDate >= startDate && reservation.startDate <= endDate
      );
      return overlappingReservations.length === 0;
    });
  }

  return filteredListings;
}
