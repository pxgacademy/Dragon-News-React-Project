import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import RightAside from "../rightAside/RightAside";

const NewsDetails = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const news = data[0];

  return (
    <>
      <Header />
      <section className="px-5 mt-7">
        <div className="max-w-6xl mx-auto grid grid-cols-4">
          <section className="col-span-3">
            <h2 className="text-2xl font-semibold">Dragon News</h2>

            <div className="p-5 border rounded-lg mt-8">
              <img className="w-full" src={news.image_url} alt="" />
              <h2 className="text-2xl font-semibold py-3">{news.title}</h2>
              <p>{news.details}</p>

              <button
                onClick={() => navigate(`/category/${news.category_id}`)}
                className="bg-[#d72050] text-white py-1 px-3 mt-4"
              >
                All news in this category
              </button> 
            </div>
          </section>
          <aside>
            <RightAside />
          </aside>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
