"use client";

import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React from "react";
import { DEFAULT_SEVERITY } from "@/lib/constants";

const loginInitialState = {
  message: "",
  errors: {
    email: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

export default function LoginForm() {
  const [formState, formAction] = useFormState(login, loginInitialState);

  console.log(23, formState);

  return (
    <form action={formAction} className="flex align-items-center justify-content-center w-96 p-3">
      <Card className="p-4 shadow-2 w-full">
        <div className="text-center mb-5">
          <h1 className="text-900 text-3xl font-medium mb-3">my-app-scaffold</h1>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText required id="email" name="email" type="text" placeholder="Email address" className="w-full mb-3" />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText required id="password" name="password" type="password" placeholder="Password" className="w-full mb-3" />

          <div className="flex align-items-center justify-content-between mb-6">
            {/* <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a> */}
          </div>

          <Button label="Sign In" type="submit" icon="pi pi-user" severity={DEFAULT_SEVERITY} className="w-full" />
        </div>
      </Card>
    </form>
  );
}
