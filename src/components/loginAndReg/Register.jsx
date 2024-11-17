import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../utils/UserContext";

const Register = () => {
  const { handleCreateUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleCreateUser(email, password)
      .then((result) => {
        setUser(result.user);
        // e.target.reset();
      })
      .catch((err) => console.log("Error creating user", err.message));
  };

  return (
    <section className="px-5">
      <div className="max-w-6xl mx-auto min-h-screen flex flex-col">
        <Navbar />

        <div className="hero bg-base-200 flex-grow">
          <div className="hero-content flex-col w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control mt-3">
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary"
                  />
                </div>
                <div>
                  <span>
                    Already have an account?{" "}
                    <Link className="text-info" to="/login">
                      Login
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

export default Register;
