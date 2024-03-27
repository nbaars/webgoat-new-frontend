"use client";

import {login} from "@/lib/actions";
import {useForm} from "react-hook-form";
import {LoginSchema} from "@/schemas";
import {useState, useTransition} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import FormCard from "@/components/ui/form-card/form-card";
import FormButton from "@/components/ui/form-button/form-button";
import RedirectLink from "@/components/ui/redirect-link/redirect-link";
import FormInput from "@/components/ui/form-input/form-input";
import {FormError} from "@/components/ui/form-error/form-error";
import HorizontalLine from "@/components/ui/horizontal-line/hr";
import { Form } from "@/components/ui/form-field/form-field";

export default function Home() {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
        resolver: zodResolver(LoginSchema),
    });

    const {
        formState: { errors },
    } = form;
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(async () => {
            const res = await login(values)
            setError(res?.error);
            setSuccess(res?.success);
        });
    };


    return (
        <FormCard>
            <Form {...form}>
                <div className={'flex w-full flex-col min-h-60 h-screen pt-10 pb-10 pl-4 pr-4 gap-2'}>
                    <div className={"text-xl"}>Login</div>
                    <HorizontalLine/>
                    <form className={"max-w-48 flex flex-col gap-4"} onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            {!!error && <FormError errorText={error}/>}
                            <FormInput
                                control={form.control}
                                disabled={isPending}
                                error={errors.username?.message}
                                label={'Username'}
                                name="username"
                                placeholder={"Username"}
                                type="text"
                            />
                        </div>
                        <FormInput
                            control={form.control}
                            disabled={isPending}
                            error={errors.password?.message}
                            name="password"
                            label={'Password'}
                            placeholder={"Password"}
                            type="password"
                        />

                        <div className={'flex flex-col gap-2 justify-center'}>
                            <FormButton disabled={isPending} type={"submit"}>
                                Sign in
                            </FormButton>

                            <RedirectLink href={"/signup"} size={"normal"}>
                                Or create new account
                            </RedirectLink>
                        </div>
                    </form>
                </div>
            </Form>
        </FormCard>
    );
}
