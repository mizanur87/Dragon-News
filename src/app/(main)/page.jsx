import { lightFormat } from "date-fns";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto my-[30px]">
      <div className=" p-5 text-center text-black col-span-3 font-bold text-md ">
        All Categories
        <ul className="flex flex-col gap-3 mt-5">
          {categories.news_category.map((cat) => {
            return (
              <li
                className="bg-slate-200  text-center p-2 text-black text-sm font-normal rounded-sm"
                key={cat.category_id}
              >
                {cat.category_name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-span-6 text-center p-5 text-white font-bold text-md bg-gray-500">
        All News
      </div>
      <div className="col-span-3 text-center p-5 text-white font-bold text-md bg-gray-600">
        Social Icons
      </div>
    </div>
  );
}
