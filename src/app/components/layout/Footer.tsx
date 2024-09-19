import React from "react";
import { DEFAULT_MAIN_BG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className={DEFAULT_MAIN_BG + " sticky p-2 bottom-0"}>
      <div className="container mx-auto text-center">Footer</div>
    </footer>
  );
}
