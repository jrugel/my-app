import React from "react";
import { logout } from "@/lib/actions";
import { Button } from "primereact/button";
import { DEFAULT_SEVERITY } from "@/lib/constants";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" label="Logout" icon="pi pi-sign-out" severity={DEFAULT_SEVERITY} />
    </form>
  );
}
