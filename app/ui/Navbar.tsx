import Link from "next/link";
import React from "react";
import { ModeToggle } from "./modeToggle";

function Navbar() {
  return (
    <div className="w-full h-16 sticky backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <h6 className="font-bold">Student Credential System</h6>
        <ul className="flex gap-8 txt-xl items-center">
          <li className="">
            <ModeToggle />
          </li>
          <li>
            <Link
              className=" hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href=""
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="#signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
