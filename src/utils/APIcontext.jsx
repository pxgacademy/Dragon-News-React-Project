import PropTypes from "prop-types";
import { AuthContext } from "./UserContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase.init";

function APIcontext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe(); // Clean up subscription when component unmounts
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    handleCreateUser,
    handleLoginUser,
    handleSignOut,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

APIcontext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default APIcontext;
