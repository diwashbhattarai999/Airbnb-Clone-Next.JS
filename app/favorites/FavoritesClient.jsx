import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import Container from "../components/Container";

const FavoritesClient = ({ listings }) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 ">
        {listings?.map((listing) => {
          return <ListingCard key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
};

export default FavoritesClient;
