import { useEffect, useState } from "react";
import CategoryBtn from "./CategoryBtn";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);


  return (
    <section className="pr-10">
      <div>
        <h2 className="text-lg font-semibold">All Categories</h2>
        <div id="leftAsideCategory" className="flex flex-col gap-2 mt-3">
          {categories.map((category) => (
            <CategoryBtn key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeftAside;
