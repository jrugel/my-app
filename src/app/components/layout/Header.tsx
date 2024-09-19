import React from "react";
import { DEFAULT_MAIN_BG } from "@/lib/constants";
import LogoutButton from "./LogoutButton";

export default async function Header() {
  return (
    <header className={DEFAULT_MAIN_BG}>
      <div className="container mx-auto">
        <LogoutButton />
      </div>
    </header>
  );
}
