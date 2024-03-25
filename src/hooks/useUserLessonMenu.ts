"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUserLessonMenu =async () => {
  // return useQuery({
  //   queryKey: ["lessonJson"],
  //   queryFn: (): Promise<JSON> =>
  //     axios
  //         .get(`http://localhost:8080/WebGoat/service/lessonmenu.mvc`, {
  //           headers: {
  //               referer: 'http://localhost:8080/WebGoat/start.mvc?username=test12345',
  //               cookie: "JSESSIONID=jYv-FERU-6oTwTcVJtIhel9rPbW0C85rfHnjaH3s;"
  //           }
  //         })
  // });
    const res = await fetch('http://localhost:8080/WebGoat/service/lessonmenu.mvc', {
        method: 'GET',
        credentials: 'include'
    } )
};
