import React, { useState } from "react";

export default function Home(props) {
  document.title = "Text Analyzer - Home";

  const [text, setText] = useState("");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function handleUppercase() {
    let purifyText = text.split(/[ ]+/).join(" "); //remove extra whitespace
    let newText = purifyText.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase.", "Success!");
  }

  function handleLowercase() {
    let purifyText = text.split(/[ ]+/).join(" "); //remove extra whitespace
    let newText = purifyText.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase.", "Success!");
  }

  function handleTitleCase() {
    //split the above string into an array of strings
    //whenever a blank space is encountered
    const array = text.toLowerCase().split(" ");

    //loop through each element of the array and capitalize the first letter.
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    let newText = array.join(" ");
    let purifyText = newText.split(/[ ]+/).join(" "); //remove extra whitespace
    setText(purifyText);
    props.showAlert("Converted to title case.", "Success!");
  }

  function handleReverse() {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Reversed successfully.", "Success!");
  }

  function clearFormData() {
    setText("");
    props.showAlert("Data cleared successfully.", "Success!");
  }

  const handleCopyToClipboard = () => {
    // const content = document.getElementById("content");
    // content.select();
    // content.setSelectionRange(0, 99999); /* For mobile devices */
    // navigator.clipboard.writeText(content.value);
    // document.getSelection().removeAllRanges(); // deselect text

    // Alternative Way
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard.", "Success!");
  };

  const RemoveExtraSpace = () => {
    let purifyTextArr = text.split(/[ ]+/); //remove extra whitspace
    let newText = purifyTextArr.join(" ");
    setText(newText);
    props.showAlert("Extra space removed.", "Success!");
  };

  // slow reading speed 125wpm
  // avg reading speed 300wpm
  // fast reading speed 450wpm
  //Math.round(), Returns rounded to its nearest integer

  function slowReadTime() {
    const countWords = text.split(" ").length;
    const countMinutes = countWords / 125;
    if (countMinutes < 1) {
      return Math.round(countMinutes * 60) + " sec";
    } else {
      return Math.round(countMinutes) + " min";
    }
  }

  function avgReadTime() {
    const countWords = text.split(" ").length;
    const countMinutes = countWords / 300;
    if (countMinutes < 1) {
      return Math.round(countMinutes * 60) + " sec";
    } else {
      return Math.round(countMinutes) + " min";
    }
  }

  function fastReadTime() {
    const countWords = text.split(" ").length;
    const countMinutes = countWords / 450;
    if (countMinutes < 1) {
      return Math.round(countMinutes * 60) + " sec";
    } else {
      return Math.round(countMinutes) + " min";
    }
  }

  return (
    <div className="pt-6 pb-8 lg:pt-10-pb-15 container">
      <div className="py-2 flex items-center gap-x-6 md:gap-x-4 text-gray-500">
        <div className="md:text-xl font-semibold ">Reading Time :</div>
        {text.length < 1 ? (
          ""
        ) : (
          <>
            <div className="text-sm sm:text-base hidden md:block">
              {slowReadTime()} <span className="text-xs">(slow)</span>,
            </div>
            <div className="text-sm sm:text-base">
              {avgReadTime()} <span className="text-xs">(avg)</span>,
            </div>
            <div className="text-sm sm:text-base hidden md:block">
              {fastReadTime()} <span className="text-xs">(fast)</span>
            </div>
          </>
        )}
      </div>
      <form>
        <div className="mb-2 w-full bg-gray-50 rounded-lg border border-gray-200">
          <div className="py-3 px-5 bg-white rounded-t-lg">
            <textarea
              value={text}
              onChange={handleOnChange}
              id="content"
              rows=""
              className="px-0 w-full h-44 md:h-64 text-sm md:text-base text-gray-500 bg-white focus:ring-0 border-none"
              placeholder="Write your content..."
              autoFocus={true}
            ></textarea>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-y-3 lg:gap-y-0 p-3 md:py-4 border-t">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                disabled={text.length === 0}
                onClick={handleTitleCase}
                type="button"
                className="py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm font-medium text-green-500 bg-transparent rounded-l-lg border border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:bg-green-500 focus:text-white"
              >
                Title Case
              </button>
              <button
                disabled={text.length === 0}
                onClick={handleUppercase}
                type="button"
                className="py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm font-medium text-green-500 bg-transparent border-t border-b border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:bg-green-500 focus:text-white"
              >
                UPPERCASE
              </button>
              <button
                disabled={text.length === 0}
                onClick={handleLowercase}
                type="button"
                className="py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm font-medium text-green-500 bg-transparent border-t border-b border-l border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:bg-green-500 focus:text-white"
              >
                lowercase
              </button>
              <button
                disabled={text.length === 0}
                onClick={RemoveExtraSpace}
                type="button"
                className="hidden md:block py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm font-medium text-green-500 bg-transparent border-t border-b border-l border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:bg-green-500 focus:text-white"
              >
                RemoveExtraSpace
              </button>
              <button
                disabled={text.length === 0}
                onClick={handleReverse}
                type="button"
                className="py-1 px-2 text-xs md:py-2 md:px-4 md:text-sm font-medium text-green-500 bg-transparent rounded-r-md border border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:bg-green-500 focus:text-white"
              >
                Reverse
              </button>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-4">
              <button
                disabled={text.length === 0}
                onClick={clearFormData}
                title="Clear"
                type="button"
                className="inline-flex items-center gap-x-2 text-xs md:text-sm py-1 px-2 md:py-2 md:px-4 text-pink-500 border border-pink-500 rounded hover:bg-pink-500 hover:text-white active:bg-pink-600 focus:outline-none focus:ring cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <button
                disabled={text.length === 0}
                onClick={handleCopyToClipboard}
                title="Copy to Clipboard"
                type="button"
                className="inline-flex items-center gap-x-2 text-xs md:text-sm py-1 px-2 md:py-2 md:px-4 text-green-500 border border-green-500 rounded hover:bg-green-500 hover:text-white active:bg-blue-600 focus:outline-none focus:ring cursor-pointer"
              >
                <span className="font-medium">Copy</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className="ml-auto text-gray-500 space-x-3 text-sm md:text-base">
        <span className="font-bold">
          {/* remove whitespace & count accurate word */}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </span>{" "}
        words,
        <span className="font-bold">{text.length}</span> Charecters
      </p>
    </div>
  );
}
