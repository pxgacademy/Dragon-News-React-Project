import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="px-5 py-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        <img className="mx-auto max-w-96" src={logo} alt="" />
        <div className="text-center mt-2">
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
