"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { useScrollContext } from "@/context/ScrollContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import LogoLockup from "@/components/SVGs/LogoLockup";

import DrawerMenu from "./DrawerMenu";

interface NavItem {
  name: string;
  value: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const { isAboveFold, isScrollUp } = useScrollContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-40 w-screen bg-white/50 shadow-md backdrop-blur-lg transition-transform duration-300",
        !isAboveFold && !isScrollUp && !isMenuOpen
          ? "-translate-y-full"
          : "translate-y-0"
      )}
    >
      <nav className="site-container site-max-w">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-gray-900 transition-colors hover:text-gray-500"
            title="Home"
            aria-label="Home"
          >
            <span className="sr-only">Home</span>
            <LogoLockup
              className="text-primary h-7 w-auto sm:h-8 lg:h-10"
              aria-hidden="true"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            type="button"
            className="focus:ring-primary text-primary cursor-pointer rounded-md p-2 hover:bg-gray-100 hover:text-red-800 focus:ring-2 focus:outline-none focus:ring-inset"
            onClick={() => setIsMenuOpen(true)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            title={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <FontAwesomeIcon
              icon={faBars}
              className="size-4!"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      {/* Drawer Menu */}
      <DrawerMenu
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
