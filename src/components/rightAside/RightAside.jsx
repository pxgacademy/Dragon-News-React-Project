import { useContext } from "react";
import FindUsBySocial from "./FindUsBySocial";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../utils/UserContext";

const RightAside = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="pl-5">
      {!user && <SocialLogin />}
      <FindUsBySocial />
    </section>
  );
};

export default RightAside;
