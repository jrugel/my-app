import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function BackOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-2 py-5">{children}</main>
      <Footer />
    </div>
  );
}
