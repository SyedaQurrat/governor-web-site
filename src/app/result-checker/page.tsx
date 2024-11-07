"use client"; 
import Footer from '@/components/Footer';
import { useState } from 'react';

const ResultPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [cnicOrBFormNumber, setCnicOrBFormNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationNumber, cnicOrBFormNumber);
    // Aap yahan result fetch karne ka logic daal sakte hain
  };

  return (
    <main className=" text-sky-800 flex flex-col items-center justify-center  bg-white">
      <h1 className="my-8 text-center text-lg font-bold text-main print:hidden md:text-4xl">
        Grand Entrance Exam Result
      </h1>
      <form
        onSubmit={handleSubmit}
        className="-top-10 z-10 mx-4 my-10 mt-0 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg sm:mt-10 md:mx-10 md:px-6"
        noValidate
      >
        <div className="my-6">
          <label htmlFor="regNo" className="mb-6 mt-4 text-slate-700 md:text-xl">
            Registration Number *
          </label>
          <div>
            <input
              type="tel"
              id="regNo"
              maxLength={10}
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded"
              placeholder="Registration Number"
              name="regNo"
            />
          </div>
        </div>
        <div className="my-6">
          <label htmlFor="cnic" className="mb-6 mt-4 text-slate-700 md:text-xl">
            CNIC or B-Form Number *
          </label>
          <div>
            <input
              type="tel"
              id="cnic"
              maxLength={13}
              value={cnicOrBFormNumber}
              onChange={(e) => setCnicOrBFormNumber(e.target.value)}
              className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded"
              placeholder="CNIC or B-Form Number"
              name="cnic"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-5 w-full bg-sky-800 py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-52 sm:py-4 sm:text-base"
          >
            GET RESULT
          </button>
        </div>
      </form>
      <Footer/>
    </main>
    
  );
};

export default ResultPage;
