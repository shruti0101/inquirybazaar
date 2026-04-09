"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Layoutwrapper = ({ children }) => {
  const pathname = usePathname();

  const hidenav =
    pathname === "/admin" ||
    pathname === "/login" ||
    pathname.startsWith("/admin/");

  return (
    <>
      {!hidenav && <Navbar />}

      {children}
    </>
  );
};

export default Layoutwrapper;
