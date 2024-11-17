import PropTypes from "prop-types";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-base-200 p-3">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img className="object-cover" src={news.author.img} alt="" />
          </div>
          <div className="ml-4">
            <h3>{news.author.name}</h3>
            <p>{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-zinc-500">
          <button>
            <FaBookmark />
          </button>
          <button>
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="p-3">
        <h1 className="text-lg font-semibold py-3">{news.title}</h1>
        <img src={news.image_url} alt="" />

        {news.others_info.is_trending && (
          <div className="text-base text-red-400 mt-3">Trending News</div>
        )}
      </div>

      <div className="flex justify-between p-3 bg-base-200">
        <div className="text-yellow-500 flex items-center gap-1">
          <FaStar />
          <span className="text-sm font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600 gap-2">
          <FaEye />
          <span className="text-sm">{news.total_view}</span>
        </div>
        <Link to={`/news/details/${news._id}`}>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-500">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

SingleNews.propTypes = {
  news: PropTypes.object.isRequired,
};

export default SingleNews;
