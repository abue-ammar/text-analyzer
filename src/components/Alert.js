import React from "react";

export default function Alert(props) {
  return (
    props.alert && ( //it means if(alert = null) ? '' : showTheContent
      <div
        className={`flex w-56 md:w-80 overflow-hidden bg-white rounded-lg shadow-md  ${props.className}`}
      >
        <div className="flex items-center justify-center w-10 md:w-12 ">
          <svg
            className="w-6 h-6 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="pb-1.5 px-1 md:py-2 -mx-3">
          <div className="mx-3">
            <span className="font-semibold text-green-400 text-sm md:text-base">
              {props.alert.type}
            </span>
            <p className="text-xs md:text-sm text-gray-600">
              {props.alert.msg}
            </p>
          </div>
        </div>
      </div>
    )
  );
}
