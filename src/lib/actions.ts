"use client";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import axios from "axios";

const auth =async (formData: string) => {
  return await axios.post('http://localhost:8080/WebGoat/login', formData)
}
const userCreate = async (formData: string)=>{
  return await axios.post('http://localhost:8080/WebGoat/register.mvc', formData)
}


export async function login(
    prevState: string | undefined,
    formData: FormData,
) {
  const username = formData.get("username");
  const password = formData.get("password");
  try {
    await auth(`username=${username}&password=${password}`);
  } catch (error) {
    if (error) {
      return 'Invalid login or password'
    }
    throw error;
  }
}export async function signup(
    prevState: string | undefined,
    formData: FormData,
) {
  const username: FormDataEntryValue | null = formData.get("username");
  const password = formData.get("password");
  const terms = formData.get("terms");
  const confirmPassword = formData.get("confirmPassword");
  try {
    await userCreate(`username=${username}&password=${password}&matchingPassword=${confirmPassword}&agree=$agreed`);
  } catch (error) {
    if (error) {
      return 'User already exists'
    }
    throw error;
  }
}