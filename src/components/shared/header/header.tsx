"use client";
import { FC, useState } from "react";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import {
  ChartBarSquareIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const Header: FC<{isNavigation?: boolean}> = ({isNavigation = false}) => {
  const [isHeaderMenu, setMenuOpened] = useState("");

  const menuHandler = (option: string) => {
    if (isHeaderMenu === option) setMenuOpened("");
    setMenuOpened(option);
  };

  return (
    <header className={"w-screen h-20 flex items-center bg-white max-w-full"}>
      <div
        className={"w-60 h-full relative bg-cover bg-center"}
        style={{ backgroundImage: "url('/image/logoBG.jpg')" }}
      >
        <Link href={""} className={""}>
          <div
            className={"absolute left-1/3 top-1/2 tracking-wide -translate-y-1/2 text-2xl"}
          >
            <span className={"font-bold"}>WEB</span>
            GOAT
          </div>
        </Link>
      </div>
      {isNavigation && <nav
          className={
            "w-auto flex-grow p-10 h-full items-center flex justify-between"
          }
      >
        <div className={"text-4xl text-black"}>WebWolf</div>
        <div className={"flex gap-1"}>
          <input
              className={"border-2 shadow-inner rounded-md pl-4"}
              type="text"
              placeholder={"Search @lesson"}
          />
          <Link href="" className={"nav-icon"}>
            <Image
                src={"/image/wolf.svg"}
                width={35}
                height={35}
                alt={"WebWolf"}
            />
          </Link>
          <div
              onBlur={() => menuHandler("user")}
              onClick={() => menuHandler("user")}
              className={`nav-icon pr-0.5 relative flex-col`}
          >
            <div
                className={
                  "nav-icon w-full h-full flex items-center justify-center"
                }
            >
              <UserIcon/>
              <ChevronDownIcon
                  className={"absolute right-0 top-1/2 -translate-y-1/2"}
              />
            </div>
            {isHeaderMenu === "user" && (
                <div
                    className={
                      "absolute w-44 left-0 top-8 bg-white pt-3 pb-2 text-sm rounded-sm shadow-2xl"
                    }
                >
                  <div className={"pl-6 pb-1"}>UserName</div>

                  <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>

                  <div className={"pl-6 pb-1 pt-1 text-gray-400"}>UserName</div>
                  <div className={"pl-6 pb-1 pt-1 text-gray-400"}>UserRole</div>

                  <div className={"w-full h-[1px] bg-gray-300 mt-1 mb-1"}></div>

                  <div className={"pl-6 pb-1 pt-1 text-gray-400"}>Version</div>
                  <div className={"pl-6 pt-1 text-gray-400"}>Build</div>
                </div>
            )}
          </div>
          <Link href="" className={"nav-icon"}>
            <ChartBarSquareIcon/>
          </Link>
          <Link href={`/about`} className={"nav-icon"}>
            <span>i</span>
          </Link>
          <Link
              href="mailto:webgoat@owasp.org?Subject=Webgoat%20feedback"
              className={"nav-icon"}
              target={"_top"}
          >
            <EnvelopeIcon/>
          </Link>
        </div>
      </nav>}
    </header>
  );
};
export default Header;
