import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../utils/UserContext";

const Navbar = () => {
  const { user, setUser, handleSignOut } = useContext(AuthContext);

  const handleLogout = () => {
    handleSignOut()
      .then(() => {
        // console.log("user successfully signed out");
        setUser(null);
      })
      .catch((error) => {
        console.log("Error signing out user", error);
      });
  };

  return (
    <nav className="py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>{user && <p>{user.email}</p>}</div>
        <div className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex items-center">
          <img className="w-10 rounded-full" src={userIcon} alt="" />
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-zinc-700 hover:bg-zinc-800 text-white py-2 px-5 ml-4"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-zinc-700 hover:bg-zinc-800 text-white py-2 px-5 ml-4">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
