import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function BackOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col debug">
      <Header />
      <main className="flex-grow container mx-auto p-2">{children}</main>
      <Footer />
    </div>
  );
}
