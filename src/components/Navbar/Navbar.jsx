import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "./Logo";
import Search from "./Search";
import Wislist from "./Wislist";
import Cart from "./Cart";
import Account from "./Account";
import DarkBtn from "./DarkBtn";
import MobileMenu from "./MobileMenu";

export default function Navbar({ dark, setDark }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav
      className={`px-2 sm:px-3 md:px-4 py-2 shadow-md ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Top Row */}
      <div className="flex items-center w-full">
        {/* Mobile Menu */}
        <div className="md:hidden shrink-0 mr-1">
          <HiOutlineMenu
            size={22}
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer"
          />

          <MobileMenu
            dark={dark}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        </div>

        {/* Logo */}
        <div className="shrink-0 scale-90 sm:scale-100">
          <Logo />
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-auto px-5">
          <Search />
        </div>

        {/* Icons */}
        <div
          className="
            flex
            items-center
            gap-1
            sm:gap-2
            md:gap-5
            ml-auto
            shrink-0
          "
        >
          {/* Wishlist */}
          <div className="shrink-0 scale-90 sm:scale-100">
            <Wislist />
          </div>

          {/* Cart */}
          <div className="shrink-0 scale-90 sm:scale-100">
            <Cart />
          </div>

          {/* Account */}
          <div className="shrink-0 scale-90 sm:scale-100">
            <Account />
          </div>

          {/* Dark Mode */}
          <div className="shrink-0 scale-90 sm:scale-100">
            <DarkBtn dark={dark} setDark={setDark} />
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-2 md:hidden">
        <Search />
      </div>
    </nav>
  );
}
