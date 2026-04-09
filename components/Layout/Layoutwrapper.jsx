"use client";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Bottomsections from "../Landingpage/Bottomsections";


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

    {!hidenav && <Bottomsections/>}  
    </>
  );
};

export default Layoutwrapper;
