import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import LabelContact from "@/components/SVGs/LabelContact";

import { CTA_URL } from "@/sanity/env";

interface NavItem {
  name: string;
  value: string;
}

interface FooterProps {
  navItems: NavItem[];
}

const Header: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer id="contact" className="py-20">
      <div className="site-container site-max-w">
        <div className="block space-y-10">
          <LabelContact className="text-primary mx-auto h-auto w-full max-w-48" />

          <div className="bg-primary mx-auto my-6 h-px w-16" />

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

          <nav className="mx-auto flex items-center justify-center gap-8">
            <a
              href={CTA_URL}
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <FontAwesomeIcon
                icon={faFacebook}
                className="size-6!"
                aria-hidden="true"
              />
            </a>

            <a
              href="mailto:laurason1@aim.com"
              className="text-primary"
              aria-label="Email"
              title="Email"
            >
              <span className="sr-only">Email</span>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-6!"
                aria-hidden="true"
              />
            </a>

            <a
              href="tel:6784994378"
              className="text-primary"
              aria-label="Phone"
              title="Phone"
            >
              <span className="sr-only">Phone</span>
              <FontAwesomeIcon
                icon={faPhone}
                className="size-6!"
                aria-hidden="true"
              />
            </a>
          </nav>
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
