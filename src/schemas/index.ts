import * as z from "zod";

export const LoginSchema = z.object({
    username: z.string().min(1, 'Login is required'),
    password: z.string().min(1, 'Password is required')
})
export const RegisterSchema = z.object({
    username: z.string().min(6, 'Login should be at least 6 letters length'),
    password: z.string().min(6, 'Password should be at least 6 letters length'),
    matchingPassword: z.string().min(1, 'Confirm your password'),
    agree:  z.literal<boolean>(true, { errorMap: () => ({ message: "", }), })
}).refine(
    data => {
        return data.password === data.matchingPassword;
    },
    {
        message: "Passwords do not match",
        path: ["matchingPassword"], // path of error
    },
);