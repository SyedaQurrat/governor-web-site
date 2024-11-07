import React from 'react';
import Footer from '@/components/Footer';

const Apply = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16">
          <h1
            className="text-center text-sky-800 text-4xl xs:text-5xl leading-snug"
            style={{
              fontFamily: "__Poppins_092cb9, __Poppins_Fallback_092cb9",
              fontStyle: "normal",
              lineHeight: "1.6",
              letterSpacing: "0.5px",
            }}
          >
            Before continuing to the application, please subscribe on these social media platforms.
          </h1>
          <div className="mt-5 flex gap-3 md:text-sm">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center bg-[#4267B2] rounded-full text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </div>
          </div>
          <div className="group w-full flex flex-col items-center xs:w-52 relative">
            <div className="absolute -top-8 rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
              <p>Click the icon above first.</p>
            </div>
            <button
              disabled
              className="bg-main py-2 px-4 text-center bg-sky-700 font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-auto"
              style={{
                fontFamily: "__Poppins_092cb9, __Poppins_Fallback_092cb9",
                fontStyle: "normal",
                maxWidth: "200px",
              }}
            >
              CONTINUE
            </button>
          </div>
          <p className="text-center mt-4">
            Already applied?{" "}
            <a className="text-blue-400 underline" href="/admit-card">
              Get Admit Card
            </a>
          </p>
        </div>
      </div>

      {/* Horizontal Progress Bar */}
      <div className="flex justify-center items-center mt-4 mb-6 w-full">
        <div className="flex items-center justify-between w-[90%] lg:w-[800px] space-x-6">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white">
              1
            </div>
            <span className="text-sky-800">Facebook</span>
          </div>
          <div className="flex-grow h-px bg-gray-500"></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-sky-800 border-2  border-gray-400">
              2
            </div>
            <span className="text-sky-800">YouTube</span>
          </div>
          <div className="flex-grow h-px bg-gray-500"></div>

          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-sky-800 border-2  border-gray-400">
              3
            </div>
            <span className="text-sky-800">Twitter</span>
          </div>
          <div className="flex-grow h-px bg-gray-500"></div>

          {/* Step 4 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full  bg-white text-sky-800 border-2  border-gray-400">
              4
            </div>
            <span className="text-sky-800">Instagram</span>
          </div>
          <div className="flex-grow h-px bg-gray-500"></div>

          {/* Step 5 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-sky-800 border-2  border-gray-400">
              5
            </div>
            <span className="text-sky-800">Apply</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;

