import getListings from "@/app/actions/getListings";
import EmptyContainer from "@/app/components/EmptyContainer";
import ListingClient from "./ListingClient";

const ListingPage = ({ params }) => {
  const { listingId } = params;

  const listings = getListings();
  const listing = listings[listingId - 1];

  if (!listings) {
    return <EmptyContainer />;
  }

  return <ListingClient listing={listing} />;
};

export default ListingPage;
