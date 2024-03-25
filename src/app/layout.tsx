import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebGoatNEXT",
  icons: "/favicon.ico",
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          {modal}
        </Provider>
      </body>
    </html>
  );
}
