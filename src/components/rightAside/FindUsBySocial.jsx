import fbIcon from "../../assets/fb.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

const FindUsBySocial = () => {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-semibold">Find Us On</h2>
      <div className="w-full join join-vertical mt-3">
        <button className="join-item hover:bg-base-200 flex items-center gap-2 w-full border py-3 text-left px-5">
          <span className="bg-zinc-200 p-1 rounded-full w-7 h-7 flex items-center justify-center">
            <img src={fbIcon} alt="fb" />
          </span>
          Facebook
        </button>
        <button className="join-item hover:bg-base-200 flex items-center gap-2 w-full border py-3 text-left px-5">
          <span className="bg-zinc-200 p-1 rounded-full w-7 h-7 flex items-center justify-center">
            <img src={twitterIcon} alt="twitter" />
          </span>
          Twitter
        </button>
        <button className="join-item hover:bg-base-200 flex items-center gap-2 w-full border py-3 text-left px-5">
          <span className="bg-zinc-200 p-1 rounded-full w-7 h-7 flex items-center justify-center">
            <img src={instagramIcon} alt="instagram" />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUsBySocial;
