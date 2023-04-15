"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { useEffect, useRef, useState } from "react";

import { categories } from "../categoriesData";

const Catagories = () => {
  const categoriesRef = useRef();
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(true);

  const isMainPage = pathName === "/";

  useEffect(() => {
    const container = categoriesRef.current;

    const handleScroll = () => {
      setHideLeftArrow(!(container.scrollLeft > 0));
      setHideRightArrow(
        !(container.scrollLeft < container.scrollWidth - container.clientWidth)
      );
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  if (!isMainPage) {
    return null;
  }

  const scrollCategories = (dir) => {
    const container = categoriesRef.current;

    const scrollAmount =
      dir === "left" ? container.scrollLeft - 260 : container.scrollLeft + 260;

    container.scrollTo({
      left: scrollAmount,
      behavir: "smooth",
    });
  };

  return (
    <Container>
      <div
        ref={categoriesRef}
        className="scroll-smooth pt-4 flex flex-row items-center justify-between overflow-x-auto categories"
      >
        {!hideLeftArrow && (
          <SlArrowLeft
            size={24}
            className="absolute left-4 sm:left-7 md:left-10 xl:left-[4.5rem] border-[1px] border-neutral-300 rounded-full p-[6px] cursor-pointer"
            onClick={() => scrollCategories("left")}
          />
        )}
        {!hideRightArrow && (
          <SlArrowRight
            size={24}
            className="absolute right-4 sm:right-7 md:right-10 xl:right-[4.5rem] border-[1px] border-neutral-300 rounded-full p-[6px] cursor-pointer"
            onClick={() => scrollCategories("right")}
          />
        )}
        {/* <div ref={categoriesRef}> */}
        {categories.map((item) => {
          return (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          );
        })}
        {/* </div> */}
      </div>
    </Container>
  );
};

export default Catagories;
