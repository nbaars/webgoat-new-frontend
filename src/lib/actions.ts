"use client";
import {LoginSchema, RegisterSchema} from "@/schemas";
import {z} from "zod";

export async function login(
    formData: z.infer<typeof LoginSchema>
) {
  const {username, password} = formData

  const res = await fetch('http://localhost:8080/WebGoat/login', {
    method: "POST",
    headers: {
      Accept: "application/form-field-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username, password}),
  });
  if (res.status === 401) {
    return { error: "Wrong username or password" };
  } else if (res.status === 422) {
    return { error: "Something went wrong" };
  } else if (res.status === 200) {
    return { success: "Logged in!" };
  }
}
export async function signup(
    formData: z.infer<typeof RegisterSchema>
) {
  const {username, password, matchingPassword, agree} = formData

  const res = await fetch('http://localhost:8080/WebGoat/register.mvc', {
    body: JSON.stringify({username, password, confirmPassword: matchingPassword, terms: agree}),
    method: "POST",
    headers: {
      Accept: "application/form-field-data",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin" : "*",
    },
  })
  if (res.status === 401) {
    return { error: "User exist" };
  } else if (res.status === 422) {
    return { error: "Something went wrong" };
  } else if (res.status === 200) {
    return { success: "User created succesfully!" };
  }
}