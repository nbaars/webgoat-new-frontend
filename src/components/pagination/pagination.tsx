"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { lesson } from "@/content/lesson_menu.json";

const Pagination: React.FC = () => {
  const [activePagin, setActivePagin] = useState(0);
  const lessonLength = lesson.length;
  const [lastActive, setLastActive] = useState(
    lessonLength > 4 ? 4 : lessonLength,
  );
  const [firstActive, setFisrtActive] = useState(0);

  const paginPageHandler = (activeIndex: number) => {
    if (!(lessonLength == lastActive) && activeIndex > lastActive) {
      setLastActive(activeIndex);
      setFisrtActive(firstActive + 1);
    }
    if (activeIndex === lastActive || activeIndex === firstActive) {
    }
    if (firstActive != 0 && activeIndex < firstActive) {
      setLastActive(lastActive < 6 ? lastActive - 1 : lastActive - 2);
      setFisrtActive(firstActive - 2);
    }
    if (activePagin < activeIndex && activeIndex < lessonLength - 2) {
      setFisrtActive(firstActive + 2);
      setLastActive(lastActive + 2);
    }
    if (activePagin > activeIndex && activeIndex >= firstActive) {
      setFisrtActive(firstActive - 1);
      setLastActive(lastActive - 1);
    }
    setActivePagin(activeIndex);
  };
  const nextPage = () => {
    lastActive === lessonLength
      ? setLastActive(lastActive)
      : setLastActive(lastActive + 1);
    setFisrtActive(firstActive + 1);
    setActivePagin(activePagin + 1);
  };
  const prevPage = () => {
    setLastActive(lastActive - 1);
    firstActive === 0
      ? setFisrtActive(firstActive)
      : setFisrtActive(firstActive - 1);
    setActivePagin(activePagin - 1);
  };

  return (
    <div className={"flex justify-center text-xs text-white mt-4 ml-1 "}>
      <ChevronLeftIcon
        onClick={prevPage}
        className={`bg-gray-500 rounded-xl mr-1 min-w-6 min-h-6 transition-opacity duration-200 ease-in-out cursor-pointer hover:bg-red-500 ${activePagin === 0 ? "invisible opacity-0" : "visible opacity-100"}`}
      />
      {lesson.map((page, index) => {
        return (
          <button
            key={index}
            className={`mr-1 min-w-6 min-h-6 rounded-lg hover:bg-red-500 transition-colors ease-in-out ${activePagin === index ? "bg-red-500" : "bg-gray-600"} ${lastActive >= index && firstActive <= index ? "" : "hidden"}`}
            onClick={() => paginPageHandler(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <ChevronRightIcon
        onClick={nextPage}
        className={`bg-gray-500 rounded-xl min-w-6 min-h-6 transition-opacity duration-200 ease-in-out cursor-pointer hover:bg-red-500 ${activePagin === lesson.length - 1 ? "invisible opacity-0" : "visible opacity-100"}`}
      />
    </div>
  );
};

export default Pagination;
