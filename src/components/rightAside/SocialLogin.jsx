import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-semibold">Login with</h2>
      <div className="mt-3 space-y-2">
        <button className="flex items-center gap-2 py-2 px-5 border border-info/50 text-info w-full text-left">
          <FaGoogle />
          Login with Google
        </button>
        <button className="flex items-center gap-2 py-2 px-5 border w-full text-left">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
