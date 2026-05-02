import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId, category }) => {
  return (
    <div>
      <h2 className=" text-center text-black font-bold text-md">
        All Categories
      </h2>
      <ul className="flex flex-col gap-3 mt-5">
        {categories.news_category.map((cat) => {
          return (
            <li
              className={`bg-slate-100  text-center  text-black text-sm font-normal rounded-sm hover:bg-slate-300 transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 ${activeId === cat.category_id && "bg-slate-300"}`}
              key={cat.category_id}
            >
              <Link className="block p-2 " href={`/cat/${cat.category_id}`}>
                {cat.category_name}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
