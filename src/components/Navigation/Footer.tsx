import React from "react";
import Link from "next/link";

import NextJsLockup from "@/components/SVGs/NextJsLockup";

interface NavItem {
  name: string;
  value: string;
}

interface FooterProps {
  navItems: NavItem[];
}

const Header: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer className="py-20">
      <div className="site-container site-max-w">
        <div className="block space-y-10">
          <h2 className="text-primary text-center font-black uppercase font-sans h100">
            Contact
          </h2>

          <div className="text-primary space-y-6 text-base font-light text-pretty sm:text-lg">
            <div className="block space-y-1">
              <h2 className="font-heading h200 text-center uppercase">
                Laura Nielsen Torres
              </h2>
              <span className="block text-center text-xs font-black tracking-widest uppercase">
                Pastry Chef
              </span>
            </div>

            <span className="h300 block text-center">Ann Arbor, Michigan</span>
            <span className="h300 block text-center">(678)499-4378</span>
          </div>
          {/* Logo */}
          {/* <Link
            href="/"
            className="block shrink-0"
            title="Home"
            aria-label="Home"
          >
            <span className="sr-only">Home</span>
            <NextJsLockup
              className="h-6 w-auto text-current"
              aria-hidden="true"
            />
          </Link>
          <nav className="block space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={`drawer-menu-item-${index}`}
                href={item.value}
                className="block text-lg font-medium hover:underline"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Header;
