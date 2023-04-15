"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";

import { AiOutlineMenu } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  /* ==================== Click Outside Close ==================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  /* ==================== Click Outside Close End ==================== */

  const toggleOpen = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <div
          onClick={rentModal.onOpen}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={() => {}}
          className="hidden md:block p-3 mr-2 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <VscGlobe size={20} />
        </div>
        <div
          onClick={toggleOpen}
          className="p-3 md:py-1 md:px-2 border-[1px] border-neutral-300 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-14 border-[1px] text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={loginModal.onOpen} label="Log in" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              <hr />
              <MenuItem onClick={rentModal.onOpen} label="Airbnb your home" />
              <MenuItem onClick={() => {}} label="Help" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
