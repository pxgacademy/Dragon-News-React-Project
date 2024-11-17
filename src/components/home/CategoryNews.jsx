import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";

const CategoryNews = () => {
  const { data } = useLoaderData();

  if (data.length === 0)
    return (
      <section>
        <h2 className="text-3xl font-semibold">Dragon News Home</h2>
        <h2 className="text-xl py-2 font-semibold">News Not Found</h2>
      </section>
    );

  return (
    <section>
      <h2 className="text-3xl font-semibold">Dragon News Home</h2>
      <h2 className="text-xl py-2 font-semibold">{data.length} News Found</h2>

      <div className="space-y-5 mt-5">
        {data.map((news) => (
          <SingleNews key={news._id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default CategoryNews;
