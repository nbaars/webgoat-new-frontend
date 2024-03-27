"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserLessonMenu =async () => {
    const res = await fetch('http://localhost:8080/WebGoat/service/lessonmenu.mvc', {
        method: 'GET',
        credentials: 'include'
    }).then((res) => {
        return res
    })
    return res
};
