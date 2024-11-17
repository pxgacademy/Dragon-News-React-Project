import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNewsTitle = () => {
  const [newsTitles, setNewsTitles] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then((response) => response.json())
      .then((data) => setNewsTitles(data.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex items-center gap-2 bg-zinc-100 p-2">
      <div className="bg-[#D72050] text-white py-2 px-5 font-semibold">
        <p>Latest</p>
      </div>
      <div className="overflow-hidden">
        <Marquee pauseOnHover speed={70}>
          {newsTitles.map((title) => (
            <button key={title._id} className="ml-5">
              <Link to={`news/details/${title._id}`}>{title.title}</Link>
            </button>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNewsTitle;
