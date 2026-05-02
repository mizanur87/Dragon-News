import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col items-center justify-center p-6 font-serif">
      <div className="max-w-3xl w-full text-center">
        {/* Subtle Category Tag */}
        <p className="font-sans uppercase tracking-[0.3em] text-[10px] font-bold text-slate-500 mb-4">
          Status Code: 404
        </p>

        {/* The "Main Headline" */}
        <div className="border-t-8 border-b-2 border-black py-10 mb-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            Page Not Found
          </h1>
        </div>

        {/* Sub-text / Column style */}
        <div className="max-w-lg mx-auto">
          <p className="text-xl md:text-2xl leading-snug text-slate-800 italic">
            Investigation reveals the requested URL contains no data. The link
            may have been redacted or moved to the archives.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 font-sans uppercase tracking-widest text-xs font-bold">
            <div className="w-12 h-px bg-slate-300"></div>
            <Link
              href="/"
              className="hover:text-red-700 transition-colors border-b border-transparent hover:border-red-700 pb-1"
            >
              Return to Front Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
