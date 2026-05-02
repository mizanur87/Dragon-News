import { Bentham } from "next/font/google";
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    headline:
      " --Measles Outbreak: Death Toll Rises to 235 Across Bangladesh--> ",
  },
  {
    id: 2,
    headline:
      " --PM Tarique Rahman Inaugurates Major Riverfront Development in Sylhet-->",
  },
  {
    id: 3,
    headline:
      " --New Zealand Defeats Bangladesh by 6 Wickets to Level T20 Series--> ",
  },
];

const BreakingNews = () => {
  return (
    <div className="container mx-auto flex justify-between items-center p-4 bg-gray-100">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={80}>
        {news.map((n) => {
          return <span key={n.id}>{n.headline}</span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
