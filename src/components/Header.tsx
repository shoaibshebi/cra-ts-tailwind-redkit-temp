import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../reusable/PrimaryButton";

const NavItems = ["Network", "Developers", "Solutions", "Company"];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NavItems.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to="#"
            className="flex items-center text-black text-[18px] font-medium"
          >
            {item}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 shadow-transparent bg-themeClr border-none ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
          <Link to="/">
            <img
              src="https://cryptoicons.org/api/icon/eth/200"
              alt="ethereum"
              className="h-8"
            />
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="flex justify-center items-center space-x-8">
          <PrimaryButton size="" styles="">
            <span onClick={() => window.open("https://docs.ethereum.io/")}>
              Logo
            </span>
          </PrimaryButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <PlusIcon className="text-black h-6" />
          ) : (
            <Bars3Icon className="text-black h-6" />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex justify-center items-center space-x-8">
            <PrimaryButton styles="block w-full" size="">
              <span className="normal-case"> Logo</span>
            </PrimaryButton>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
