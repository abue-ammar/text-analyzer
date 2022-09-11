import React from "react";

export default function details() {
  document.title = "Text Analyzer - Project Details";

  return (
    <section className="text-gray-600 container py-10 md:py-14">
      <div className="text-center pb-5">
        <h1 className="sm:text-4xl text-2xl font-medium text-center title-font text-green-500">
          Project Details
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-4/5 text-sm md:text-base sm:mx-auto ">
        <div classNameName="container px-10 md:px-40">
          <ul className="mb-8 space-y-4 ml-12 text-left text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span>ReactJS</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span>Progressive Web App</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center hover:text-green-500 font-bold text-base md:text-xl">
        <p className="border-b-2 border-green-500">
          <a
            href="https://github.com/abdarker/text-analyzer"
            target="_blank"
            rel="noreferrer"
          >
            View project on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
