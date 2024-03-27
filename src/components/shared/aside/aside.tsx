"use client";
import { FC, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
// TODO CHANGE TYPES
const DropDownMenu = ({
                        lesson,
                        isListOpenned,
                        toggleLessonList,
                        index,
                      }: {
  lesson: any;
  isListOpenned: number;
  toggleLessonList: () => void;
  index: number;
}) => {
  return (
      <>
        <div
            key={lesson.name}
            onClick={toggleLessonList}
            onBlur={toggleLessonList}
            className={`relative pl-4 pt-0.5 pb-0.5 text-black text-sm ${isListOpenned === index ? "bg-red-500 text-white" : ""} transition duration-300 ease-in-out cursor-pointer`}
        >
          <span>{lesson.name}</span>
          <ChevronRightIcon
              className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform ease-in-out ${isListOpenned === index ? "rotate-90" : ""}`}
          />
        </div>
        {isListOpenned === index && (
            <div
                className={`text-black text-xs ${isListOpenned === index ? "" : "content-none"}`}
            >
              {lesson.children?.map((lesson) => {
                return (
                    <div
                        key={lesson.name}
                        className={
                          "pl-8 pt-1 pb-1 bg-gray-500 text-white hover:bg-red-500 transition-transform ease-in-out cursor-pointer"
                        }
                    >
                      {lesson.name}
                    </div>
                );
              })}
            </div>
        )}
      </>
  );
};

//TODO CHANGE LESSON TYPE FROM ANY TO LESSON MENU
const Aside: FC<{lesson?: any}> = ({lesson}) => {
  const [isListOpenned, setOpenned] = useState(-1);

  const openLessonList = (index: number) => {
    if (isListOpenned === index) {
      setOpenned(-1);
      return;
    }
    setOpenned(index);
  };
  console.log(lesson)

  if (!lesson) {
      return (
          <>Loading</>
      )
  }
  return (
    <aside className={"min-w-60 h-full bg-white flex flex-col"}>
      {lesson && lesson.map((lesson, index) => {
        return (
          <DropDownMenu
            key={index}
            lesson={lesson}
            isListOpenned={isListOpenned}
            toggleLessonList={() => {
              openLessonList(index);
            }}
            index={index}
          />
        );
      })}
    </aside>
  );
};
export default Aside;
