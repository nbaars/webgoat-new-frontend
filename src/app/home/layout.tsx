'use client'

import Header from "@/components/shared/header/header";
import Aside from "@/components/shared/aside/aside";
import React from "react";
import {useUserLessonMenu} from "@/hooks/useUserLessonMenu";
type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Readonly<HomeLayoutProps>) => {
    const lesson = useUserLessonMenu()

    return (
        <>
            <Header isNavigation={true}/>
            <main className={"flex"}>
                {lesson ? <Aside lesson={lesson}/> : <>Loading</> }
                {children}
            </main>
        </>
    );
};
export default HomeLayout;
