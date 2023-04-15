"use client";

import Container from "../Container";
import Catagories from "./Catagories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container className="flex">
          <div className="flex flex-row justify-between items-center gap-1 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Catagories />
    </nav>
  );
};

export default Navbar;
