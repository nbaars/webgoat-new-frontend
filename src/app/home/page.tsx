"use client"
import Pagination from "@/components/ui/pagination/pagination";

export default function Home() {

    return (
        <>
            <main className={"w-full bg-gray-200 flex justify-center items-center"}>
                <section className={"w-3/4 h-3/4 p-1 bg-white rounded-lg"}>
                    <div className={"pt-2 pl-2 mb-8"}>
                        <button
                            className={
                                "bg-gray-200 p-1 text-xs text-black rounded-md hover:bg-gray-300 transition-colors ease-in-out duration-200 border-[1px] border-dashed focus:border-black"
                            }
                        >
                            Reset Lesson
                        </button>
                    </div>
                    <div className={"bg-gray-300 w-full h-[1px]"}></div>

                    <Pagination/>

                    <section className={"text-black"}>

                    </section>
                </section>
            </main>
        </>
    );
}
