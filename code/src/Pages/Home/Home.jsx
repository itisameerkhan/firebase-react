import "./Home.scss";
import { Button } from "@mui/material";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
      console.log("successfully logged out");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user data", user);
        console.log(user.uid);
        console.log(user.email);
      } else {
        console.log("user not logged in.");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="home">
      <h1>HOME PAGE</h1>
      <Button variant="contained" onClick={handleLogout}>
        LOG OUT
      </Button>
    </div>
  );
};

export default Home;
