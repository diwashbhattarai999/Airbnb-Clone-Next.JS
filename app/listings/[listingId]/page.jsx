import { listingsData } from "@/app/components/listingsData";
import EmptyContainer from "@/app/components/EmptyContainer";
import ListingClient from "./ListingClient";

const ListingPage = ({ params }) => {
  const { listingId } = params;

  const listing = listingsData[listingId - 1];

  if (!listingsData) {
    return <EmptyContainer />;
  }

  return <ListingClient listing={listing} />;
};

export default ListingPage;
