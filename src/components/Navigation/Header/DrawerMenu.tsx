import React from "react";
import Link from "next/link";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import Button from "@/components/Controls/Button";
import Logo from "@/components/SVGs/Logo";

import { CTA_URL } from "@/sanity/env";

interface NavItem {
  name: string;
  value: string;
}

interface DrawerMenuProps {
  isOpen: boolean;
  handleClose: () => void;
  navItems: NavItem[];
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  handleClose,
  navItems,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-out data-closed:translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="size-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex h-full flex-col justify-between overflow-y-scroll bg-white py-4 shadow-xl">
                <div className="relative flex-1 space-y-10 px-4 sm:px-6">
                  <Logo
                    className="text-primary h-20 w-auto"
                    aria-hidden="true"
                  />

                  <nav className="flex flex-col">
                    {navItems.map((item, index) => (
                      <Link
                        key={`drawer-menu-item-${index}`}
                        href={item.value}
                        className="text-primary rounded-md px-3 py-2 text-lg font-semibold tracking-wide uppercase hover:bg-gray-100"
                        onClick={() => {
                          handleClose();
                          window.location.href = item.value;
                        }}
                        aria-label={item.name}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="my-10 w-full border-t border-gray-200 px-4 sm:px-6">
                  <nav className="mx-auto flex items-center justify-center gap-8 py-6">
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

                  <Button
                    href={CTA_URL}
                    className="w-full"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    Find Out More
                  </Button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DrawerMenu;
