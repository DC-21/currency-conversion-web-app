
const Footer = () => {
  return (
    <div className="py-0 px-3 items-center w-full">
      <div className="container py-3 px-4 mx-auto rounded-lg flex items-center sm:flex-row flex-col bg-[#260c65]">
        <p className="text-sm text-white sm:py-2 sm:mt-0 mt-0">
          <span className="text-l text-white font-bold">DiCE</span> © 2023 DC WRLD —
          <a href="https://twitter.com/dcwrld" className="text-white ml-1">
            @dc wrld
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com/cho.lah.9" className="text-white">
            <svg fill="currentColor" className="w-5 h-5">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/dcwrld" className="ml-3 text-white">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://github.com/dc-21" className="pb-5 ml-3 text-white">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.3em"
              width="1.3em"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
