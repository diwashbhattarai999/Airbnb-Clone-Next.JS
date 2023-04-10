import Container from "../Container";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          {/* left */}
          <div>Left</div>

          {/* middle */}
          <div>Middle</div>

          {/* right */}
          <div>Right</div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
