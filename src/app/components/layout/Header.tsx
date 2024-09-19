import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import LogoutButton from "./LogoutButton";
import { DEFAULT_REDIRECT } from "@/lib/routes";

export default function Header() {
  const items: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      url: DEFAULT_REDIRECT,
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];

  return <Menubar model={items} className="rounded-none border-none shadow-xl sticky top-0" end={<LogoutButton />} />;
}
