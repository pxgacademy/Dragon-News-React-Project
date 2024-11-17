import { Outlet } from "react-router-dom";
import LeftAside from "../leftAside/LeftAside";
import RightAside from "../rightAside/RightAside";

const Home = () => {
  return (
    <section className="px-5 mt-10 font-poppins">
      <section className="max-w-6xl mx-auto grid grid-cols-4">
        <aside>
          <LeftAside />
        </aside>
        <section className="col-span-2">
          <Outlet/>
        </section>
        <aside>
          <RightAside />
        </aside>
      </section>
    </section>
  );
};

export default Home;
