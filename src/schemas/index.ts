import * as z from "zod";

export const LoginSchema = z.object({
    login: z.string().min(1, 'Login is required'),
    password: z.string().min(1, 'Password is required')
})
export const RegisterSchema = z.object({
    login: z.string().min(6, 'Login should be at least 6 letters length'),
    password: z.string().min(6, 'Password should be at least 6 letters length')
})