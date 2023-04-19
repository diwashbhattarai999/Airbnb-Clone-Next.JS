import Container from "./components/Container";
import EmptyContainer from "./components/EmptyContainer";
import getListings from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";

export default async function Home({ searchParams }) {
  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return (
      <EmptyContainer
        title="No exact matches"
        subtitle="Try changing or removing some of your filters"
        showReset
      />
    );
  }

  return (
    <Container>
      <div className="pt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
        {listings?.map((listing) => {
          return <ListingCard key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
}
