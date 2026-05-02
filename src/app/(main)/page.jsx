import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { lightFormat } from "date-fns";
import Image from "next/image";

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

export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCatID("01");
  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto my-[30px]">
      <div className="  col-span-3  ">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6 text-center p-5 text-white font-bold text-md bg-gray-500">
        All News
        <div className="space-y-4">
          {news.map((n) => {
            return (
              <div className="p-3 rounded-sm border" key={n._id}>
                {" "}
                {n.title}{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-3 ">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
