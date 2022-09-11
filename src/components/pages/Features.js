import React from "react";
import ProjectFeatureCheckList from "../ProjectFeatureCheckList";

export default function features() {
  document.title = "Text Analyzer - Features";

  return (
    <section className="text-gray-600 container py-10 md:py-14">
      <div className="text-center pb-5">
        <h1 className="sm:text-4xl text-2xl font-medium text-center title-font text-green-500">
          Features
        </h1>
      </div>
      <div className="flex flex-wrap lg:w-4/5 text-sm md:text-base sm:mx-auto sm:mb-2 -mx-2">
        <ProjectFeatureCheckList text="Convert text to title case" />
        <ProjectFeatureCheckList text="Convert text lowercase to uppercase" />
        <ProjectFeatureCheckList text="Convert text uppercase to lowercase" />
        <ProjectFeatureCheckList text="Remove extra whitespace" />
        <ProjectFeatureCheckList text="Reverse the text" />
        <ProjectFeatureCheckList text="Copy to clipboard" />
        <ProjectFeatureCheckList text="Count words and charecters" />
        <ProjectFeatureCheckList text="Count reading time" />
      </div>
    </section>
  );
}
