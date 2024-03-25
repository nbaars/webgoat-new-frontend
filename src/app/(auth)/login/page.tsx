"use client";

import {login} from "@/lib/actions";
import { useFormState } from 'react-dom';
import Link from "next/link";

export default function Home() {
    const [errorMessage, dispatch] = useFormState(login, undefined)



    return (
      <div className={'w-full bg-gray-200 flex justify-center items-center'}>
          <div className={'flex w-full flex-col h-full bg-gray-100 pt-10 pb-10 pl-4 pr-4 gap-6'}>
              <div className={'font-light text-2xl text-black'}>
                  Login
                  <div className={'w-full h-[1px] bg-gray-200'}></div>
              </div>
              <form action={dispatch} className={'text-black flex flex-col w-64 h-72 ml-6 p-2 gap-3'}>
                  <div className={'flex flex-col gap-2'}>
                      <label htmlFor={'login'} className={'font-bold text-sm'}>
                          Username
                      </label>
                      <input
                          className={'w-full h-8 p-4 placeholder:text-sm shadow-inner rounded-md border-[1px] border-[#cccccc]'}
                          id={'login'}
                          type="text"
                          name="username"
                          placeholder="Username"
                          autoComplete="off"
                          required
                      />
                  </div>

                  <div className={'flex flex-col gap-2'}>
                      <label htmlFor={'password'} className={'font-bold text-sm'}>
                          Password
                      </label>
                      <input
                          className={'w-full h-8 p-4 placeholder:text-sm shadow-inner rounded-md border-[1px] border-[#cccccc]'}
                          id={'password'}
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="off"
                          required
                      />
                  </div>

                  <div>
                      <input className={'w-full cursor-pointer h-8 bg-[#428bca] hover:bg-blue-800 transition-colors ease-in-out rounded-md border-[1px] border-[#357ebd] text-white'}
                             type="submit" value="Sign In"/>
                  </div>

                  <div className={'flex justify-center items-center max-h-32'}>
                      <Link
                          href={'/signup'}
                          className={'text-center text-blue-500 text-sm font-bold hover:text-blue-800 transition-colors ease-in-out'}
                      >
                          Or create new account
                      </Link>
                  </div>
              </form>
          </div>
      </div>
    );
}
