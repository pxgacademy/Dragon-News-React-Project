import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../utils/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading)
    return (
      <section className="w-full min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-purple-700"></span>
      </section>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
