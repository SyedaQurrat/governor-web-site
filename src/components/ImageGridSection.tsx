'use client';

import Image from "next/image";

const ImageGridSection: React.FC = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] mx-auto mt-10 mb-10 grid sm:grid-cols-3 grid-cols-1 gap-5">
      <Image
        alt="solo1"
        loading="lazy"
        width={1088}
        height={896}
        decoding="async"
        className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
        src="/images/img-1.jpg"
      />
      <Image
        alt="solo2"
        loading="lazy"
        width={500}
        height={375}
        decoding="async"
        className="shadow-2xl shadow-black rounded-lg h-[300px] w-full"
        src="/images/img-2.jpg"
      />
      <Image
        alt="solo3"
        loading="lazy"
        width={1088}
        height={896}
        decoding="async"
        className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
        src="/images/img-3.jpg"
      />
    </div>
  );
};

export default ImageGridSection;
