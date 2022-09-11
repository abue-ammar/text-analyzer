import React from "react";

export default function TheFooter() {
  return (
    <footer className="container border-t py-5">
      <div className="flex items-center justify-center text-gray-500 text-base md:text-base">
        <div>
          &copy; Copyright 2022 -
          <a
            className=" hover:underline hover:text-blue-500 pl-1"
            href="https://abdarker.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Abue Ammar
          </a>
        </div>
      </div>
    </footer>
  );
}
