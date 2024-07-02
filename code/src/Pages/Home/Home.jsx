import "./Home.scss";
import { Button } from "@mui/material";
import { auth } from "../../config/firebase";
import {
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    displayName: "",
    photoURL: "",
    email: "",
  });

  const [updateUser, setUpdateUser] = useState({
    displayName: "",
    photoURL: "",
    email: "",
  });

  const handleClick = async () => {
    try {
      updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      console.log(auth.currentUser);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleUpdateEmail = async () => {
    try {
      await updateEmail(auth.currentUser, "hacker@hacking.com");
      console.log(auth.currentUser);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        });
        console.log("user data", user);
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
      <nav>
        <h1>HOME PAGE</h1>
        <Button variant="contained" onClick={handleLogout}>
          LOG OUT
        </Button>
      </nav>
      <div className="home-main">
        <img src={user.photoURL} alt="photo" />
        <p>{user.displayName}</p>
        <p>{user.email}</p>
      </div>
      <div className="home-update">
        <h2>UPDATE PROFILE</h2>
        <TextField
          id="outlined-basic"
          label="photoURL"
          variant="outlined"
          name="photoURL"
          type="text"
          value={updateUser.photoURL}
          onChange={handleChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="display name"
          variant="outlined"
          name="displayName"
          type="text"
          value={updateUser.displayName}
          onChange={handleChange}
          required
        />
        <Button onClick={handleClick} variant="contained">
          UPDATE
        </Button>
      </div>
      <div className="home-update">
        <h2>EMAIL</h2>
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          name="displayName"
          type="text"
          value={updateUser.email}
          onChange={handleChange}
          required
        ></TextField>
        <Button variant="contained" onClick={handleUpdateEmail}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Home;
