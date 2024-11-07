import React from 'react';
import Footer from '@/components/Footer';

const JobsPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex justify-center items-center flex-grow text-center text-zinc-800 text-2xl font-semibold">
        <h1>Jobs/ Internships coming soon.</h1>
      </div>
      <Footer />
    </div>
  );
}

export default JobsPage;

