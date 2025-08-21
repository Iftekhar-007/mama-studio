"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/Components/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith("/dashboard");

  return showNavbar ? <Navbar /> : null;
}
