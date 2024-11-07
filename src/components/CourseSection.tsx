'use client';
import React from 'react';
const CourseSection: React.FC = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-lef text-sky-800  text-main font-extrabold mt-10">
        Core Courses Sequence
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-10">
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="programming fundamentals"
                loading="lazy"
                width="400" 
                height="250"
                className="object-cover w-full"
                src="images/core-img-1.jpg"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Programming Fundamentals</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="nextjs"
                loading="lazy"
                width="400"
                height="250" 
                className="object-cover w-full"
                src="images/core-img-2.jpg"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Web2 Using NextJS</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="earn as you learn"
                loading="lazy"
                width="400"
                height="250"
                className="object-cover w-full"
                src="images/core-img-3.jpg"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Earn as You Learn</span>
            </div>
          </div>
        </a>
      </div>

      {/* Advanced Courses Section */}
      <h1 className="lg:text-4xl sm:text-4xl text-2xl text-sky-800 sm:text-left text-center text-main font-extrabold mt-10">
        Advanced Courses
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-10">
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="artificial intelligence"
                loading="lazy"
                width="400"
                height="250" 
                className="object-cover w-full"
                src="images/core-img-4.jpg"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Artificial Intelligence</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="web 3 and metaverse"
                loading="lazy"
                width="400" 
                height="250"
                className="object-cover w-full"
                src="images/core-img-5.jpg" 
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Web 3 and Metaverse</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="cloud-native computing"
                loading="lazy"
                width="400"
                height="250" 
                className="object-cover w-full"
                src="images/core-img-6.jpg" 
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Cloud-Native Computing</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="ambient computing and IoT"
                loading="lazy"
                width="400" 
                height="250" 
                className="object-cover w-full"
                src="images/core-img-7.jpg" 
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Ambient Computing and IoT</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="genomics and bioinformatics"
                loading="lazy"
                width="400" 
                height="250"
                className="object-cover w-full"
                src="images/core-img-8.jpg" 
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Genomics and Bioinformatics</span>
            </div>
          </div>
        </a>
        <a className="hover:scale-105 duration-200 transition-all" href="#">
          <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold">
            <div>
              <img
                alt="network programmability and automation"
                loading="lazy"
                width="400"
                height="250"
                className="object-cover w-full"
                src="images/core-img-9.jpg" 
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Network Programmability and Automation</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CourseSection;



