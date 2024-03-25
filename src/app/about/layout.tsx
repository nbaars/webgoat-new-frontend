import React from "react";

type AboutLayoutProps = {
  children: React.ReactNode;
};
export default function AboutLayout({ children }: Readonly<AboutLayoutProps>) {
  return <>{children}</>;
}
