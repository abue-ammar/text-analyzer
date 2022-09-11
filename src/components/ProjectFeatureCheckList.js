import React from "react";

export default function ProjectFeatureCheckList(props) {
  return (
    <div className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-100 rounded flex p-3 md:p-4 h-full items-center">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="text-green-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span
          className="title-font font-medium capitalize"
          style={{ wordSpacing: "3px" }}
        >
          {props.text}
        </span>
      </div>
    </div>
  );
}
