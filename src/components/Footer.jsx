import React from "react";

const Footer = () => {
  return (
    <div className="md:py-4 py-0 px-3 items-center w-full">
      <div className="container py-3 px-4 mx-auto rounded-lg flex items-center sm:flex-row flex-col bg-[#260c65]">
        <p className="text-sm text-white sm:py-2 sm:mt-0 mt-0">
          © 2023 DC WRLD —
          <a href="https://twitter.com/dcwrld" className="text-white ml-1">
            @dc wrld
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-white">
            <svg fill="currentColor" className="w-5 h-5">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg
              fill="currentColor"
              stroke="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
