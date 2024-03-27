"use client"

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function NotFound() {
  const router = useRouter()
  return (
    <main
      className={"flex w-screen h-screen justify-center items-center flex-col"}
    >
      <div className={"p-4 flex items-center flex-col min-h-24 bg-red-500 gap-4"}>
        <div className={"flex justify-start items-center"}>
          <Image src={"/images/logo.png"} alt={"Logo"} width={35} height={35} />
          <span className={"p-2 text-4xl"}>404</span>
        </div>
        <div>You&apos;re insecure</div>
        <div>
          <button
              className={'rounded-md bg-blue-500 hover:bg-blue-800 transition-colors ease-in-out p-2'}
              onClick={() => router.back()}
          >
            Get back to safety
          </button>
        </div>
      </div>
    </main>
  );
}
