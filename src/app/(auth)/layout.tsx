import Header from "@/components/shared/header/header";
import Aside from "@/components/shared/aside/aside";
import React from "react";
type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout ({ children }: Readonly<HomeLayoutProps>) {

  return (
    <>
      <Header/>
      <main className={'flex'}>
          <Aside/>
          {children}
      </main>
    </>
  );
};