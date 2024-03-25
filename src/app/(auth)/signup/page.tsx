"use client";

import {login, signup} from "@/lib/actions";
import { useFormState } from 'react-dom';
import Link from "next/link";
import React, {useState} from "react";

export default function Home() {
    const [errorMessage, dispatch] = useFormState(signup, undefined)
    const [invalidLogin, setInvalidLogin] = useState<boolean>(false)
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false)
    const [invalidConfirm, setInvalidConfirm] = useState<boolean>(false)
    const [invalidTerms, setInvalidTerms] = useState<boolean>(false)

    const handleDispatch = (formData: FormData) => {
        const username = formData.get("username");
        const password = formData.get("password");
        const terms = formData.get("terms");
        const confirmPassword = formData.get("confirmPassword");


        if(typeof username === 'string' && username!.length < 6) {
            setInvalidLogin(true)
        } else {
            setInvalidLogin(false)
        }
        if(typeof password === 'string' && ( password!.length < 6 || password!.length > 10)) {
            setInvalidPassword(true)
        } else {
            setInvalidPassword(false)
        }
        if(confirmPassword !== password || (typeof confirmPassword === 'string' && confirmPassword.length < 6)) {
            setInvalidConfirm(true)
        } else {
            setInvalidConfirm(false)
        }
        if(!terms) {
            setInvalidTerms(true)
        } else {
            setInvalidTerms(false)
        }

        if (!invalidConfirm && !invalidTerms && !invalidLogin && !invalidPassword) {
            return dispatch(formData)
        }
        return;
    }

    return (
        <div className={'w-full bg-gray-200 flex justify-center items-center'}>
            <div className={'flex w-full flex-col h-full bg-gray-100 pt-10 pb-10 pl-4 pr-4 gap-6'}>
                <div className={'font-light text-2xl text-black'}>
                    Sign Up
                    <div className={'w-full h-[1px] bg-gray-200'}></div>
                </div>
                <form action={handleDispatch} className={'text-black flex flex-col gap-5 w-[55%] min-w-96'}>
                    <div className={'flex gap-8 items-center'}>
                        <label htmlFor={'login'} className={`font-bold text-sm w-[20%] text-end ${invalidLogin ? 'text-red-600' : 'text-black'}`}>
                            Username
                        </label>

                        <div className={'flex w-[80%] relative'}>
                            {errorMessage && <div className={'absolute top-0 top-1/2 translate-y-1/2 translate-x-full text-sm pl-2 font-light'}>{errorMessage}</div>}
                            <input
                                className={`w-full text-sm font-light  h-8 p-4 placeholder:text-sm shadow-inner rounded-md border-[1px] ${invalidLogin ? 'border-red-600' : 'border-[#cccccc]'}`}
                                id={'login'}
                                type="text"
                                name="username"
                                placeholder="Username"
                                autoComplete="off"

                            />
                            {invalidLogin && <div className={'absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-sm pl-2 font-light'}>Login size should be between 6 and 45</div>}
                        </div>
                    </div>

                    <div className={'flex gap-8 items-center'}>
                        <label htmlFor={'password'} className={`font-bold text-sm w-[20%] text-end ${invalidPassword ? 'text-red-600' : 'text-black'}`}>
                            Password
                        </label>

                        <div className={'flex w-[80%] relative'}>
                            <input
                                className={`w-full h-8 p-4 text-sm font-light placeholder:text-sm shadow-inner rounded-md border-[1px] ${invalidPassword ? 'border-red-600' : 'border-[#cccccc]'}`}
                                id={'password'}
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                            />
                            {invalidPassword && <div className={'absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-sm pl-2 font-light '}>Password size should be between 6 and 10</div>}
                        </div>
                    </div>

                    <div className={'flex gap-8 items-center'}>
                        <label htmlFor={'password'} className={`font-bold text-sm w-[20%] text-end ${invalidConfirm ? 'text-red-600' : 'text-black'}`}>
                            Confirm Password
                        </label>
                        <div className={'flex w-[80%] relative'}>
                            <input
                                className={`w-full text-sm font-light  h-8 p-4 placeholder:text-sm shadow-inner rounded-md border-[1px] ${invalidConfirm ? 'border-red-600' : 'border-[#cccccc]'}`}
                                id={'confirmPassword'}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                autoComplete="off"
                            />
                            {invalidConfirm && <div className={'absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-sm pl-2 font-light'}>Password should match</div>}
                        </div>
                    </div>
                    <div className={'flex gap-8 w-full'}>
                        <span className={`text-sm font-bold w-[20%] text-end ${invalidTerms ? 'text-red-600' : 'text-black'}`}>
                            Terms of use
                        </span>
                        <span
                            className={`w-[80%] border-[1px] p-3 overflow-y-scroll max-h-40 text-sm font-light ${invalidTerms ? 'border-red-600' : 'border-gray-300'}`}>
                            While running this program your machine will be extremely vulnerable to attack.You should
                            disconnect from the Internet while using this program. WebGoat&apos;s default configuration
                            binds to localhost to minimize the exposure.<br/><br/>

                            This program is for educational purposes only. If you attempt these techniques without authorization, you are very likely to get caught. If you are caught engaging in unauthorized hacking, most companies will fire you. Claiming that you were doing security research will not work as that is the first thing that all hackers claim.
                        </span>
                    </div>

                    <div className={'flex gap-8 w-full'}>
                        <div className={'w-[20%]'}></div>
                        <label
                            htmlFor={'terms'}
                            className={'w-[80%] cursor-pointer flex gap-4'}>
                            <input
                                className={`cursor-pointer`}
                                id={'terms'}
                                name={'terms'}
                                type="checkbox"
                            />
                            <span className={`font-light text-sm ${invalidConfirm ? 'text-red-600' : 'text-black'}`}>Agree with the terms and conditions</span>
                        </label>
                    </div>

                    <div className={'flex gap-8 w-full'}>
                        <div className={'w-[20%]'}></div>
                        <div className={'w-[80%]'}>
                            <input
                                className={'w-[30%] self-start text-md font-light cursor-pointer h-8 bg-[#428bca] hover:bg-blue-800 transition-colors ease-in-out rounded-md border-[1px] border-[#357ebd] text-white'}
                                type="submit" value="Sign Up"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
