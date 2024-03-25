'use client'

import Header from "@/components/shared/header/header";
import Aside from "@/components/shared/aside/aside";
import {lesson} from "@/content/lesson.json"
import React from "react";
type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Readonly<HomeLayoutProps>) => {
    return (
        <>
            <Header isNavigation={true}/>
            <main className={"flex"}>
                <Aside lesson={lesson}/>
                {children}
            </main>
        </>
    );
};
export default HomeLayout;
