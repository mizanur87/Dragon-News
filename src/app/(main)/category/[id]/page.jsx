import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data;
}

async function getNewsByCatID(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );

  const data = await res.json();
  return data.data;
}

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCatID(id);

  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto my-[30px]">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6 text-center p-5 text-white font-bold text-md bg-gray-500">
        All News
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <div key={n._id} className="p-3 rounded-sm border">
                  {n.title}
                </div>
              );
            })
          ) : (
            <h2>No News Found</h2>
          )}
        </div>
      </div>
      <div className="col-span-3 ">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
