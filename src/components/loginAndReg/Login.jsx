import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../utils/UserContext";

const Login = () => {
  const { handleLoginUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLoginUser(email, password)
      .then((result) => {
        setUser(result.user);
        // e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="px-5">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col">
        <Navbar />

        <div className="hero bg-base-200 flex-grow">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>

                <div>
                  <span>
                    {`Don't have an account? `}
                    <Link className="text-info" to="/register">
                      Register
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
