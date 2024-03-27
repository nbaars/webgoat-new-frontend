"use client";

import {signup} from "@/lib/actions";
import React, {useState, useTransition} from "react";
import FormCard from "@/components/ui/form-card/form-card";
import HorizontalLine from "@/components/ui/horizontal-line/hr";
import {FormError} from "@/components/ui/form-error/form-error";
import FormInput from "@/components/ui/form-input/form-input";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {RegisterSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import FormButton from "@/components/ui/form-button/form-button";
import { Form } from "@/components/ui/form-field/form-field";

export default function Home() {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
        mode: "onTouched",
        resolver: zodResolver(RegisterSchema),
    });

    const {
        formState: { errors },
    } = form;
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(async () => {
            const res = await signup(values);
            setError(res?.error);
            setSuccess(res?.success);
        });
    };

    return (
        <FormCard>
            <Form {...form}>
                <div className={'flex w-full flex-col h-full bg-gray-100 pt-10 pb-10 pl-4 pr-4 gap-2'}>
                    <div className={'text-xl'}>
                        Sign Up
                    </div>
                    <HorizontalLine/>
                    <form className={'flex flex-col gap-5 w-[40%] min-w-96'} onSubmit={form.handleSubmit(onSubmit)}>
                        {!!error && <FormError errorText={error}/>}
                                <FormInput
                                    control={form.control}
                                    disabled={isPending}
                                    error={errors.username?.message}
                                    label={'Username'}
                                    name="username"
                                    align={'column'}
                                    placeholder={"Username"}
                                    type="text"
                                />
                                <FormInput
                                    control={form.control}
                                    disabled={isPending}
                                    error={errors.password?.message}
                                    name="password"
                                    align={'column'}
                                    label={'Password'}
                                    placeholder={"Password"}
                                    type="password"
                                />
                               <FormInput
                                   control={form.control}
                                   disabled={isPending}
                                   error={errors.matchingPassword?.message}
                                   name="matcingPassword"
                                   align={'column'}
                                   label={'Confirm password'}
                                   placeholder={"Confirm password"}
                                   type="password"
                               />

                            <div className={'flex gap-8 w-full'}>
                                <span
                                    className={`text-sm font-bold w-[20%] text-end ${errors.agree ? 'text-red-600' : 'text-black'}`}>
                                    Terms of use

                                </span>
                                <span className={`w-[80%] border-[1px] p-3 overflow-y-scroll max-h-40 text-sm font-light ${errors.agree ? 'border-red-600' : 'border-gray-300'}`}>
                                    While running this program your machine will be extremely vulnerable to attack.You should
                                    disconnect from the Internet while using this program. WebGoat&apos;s default configuration
                                    binds to localhost to minimize the exposure.<br/><br/>

                                    This program is for educational purposes only. If you attempt these techniques without authorization, you are very likely to get caught. If you are caught engaging in unauthorized hacking, most companies will fire you. Claiming that you were doing security research will not work as that is the first thing that all hackers claim.
                                </span>
                            </div>

                            <div className={'flex gap-8 w-full'}>
                                <FormInput
                                    control={form.control}
                                    disabled={isPending}
                                    align={'column'}
                                    label={' '}
                                    error={errors.agree?.message}
                                    name="agree"
                                    type="checkbox"
                                    description={'Agree with terms and conditions'}
                                />
                            </div>

                            <div className={'flex gap-8 w-full'}>
                                <div className={'w-[20%]'}></div>
                                <div className={'w-[80%]'}>
                                    <FormButton
                                        className={'w-[30%] self-start text-md font-light cursor-pointer h-8 bg-[#428bca] hover:bg-blue-800 transition-colors ease-in-out rounded-md border-[1px] border-[#357ebd] text-white'}
                                        disabled={isPending}
                                        type="submit"
                                    >
                                        Sign Up
                                    </FormButton>
                                </div>
                            </div>
                    </form>
                </div>
            </Form>
        </FormCard>
);
}
