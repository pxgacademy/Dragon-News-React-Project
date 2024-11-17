import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CategoryBtn = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category_id}`}>
      <button
      className="py-2 px-5 bg-zinc-100 hover:bg-zinc-200 w-full text-left rounded"
      >{category.category_name}</button>
    </NavLink>
  );
};

CategoryBtn.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryBtn;
