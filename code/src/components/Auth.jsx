import "./Auth.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { auth, googleProvider } from "../config/firebase";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("signup");
  const navigate = useNavigate();
  const [mailError, setMailError] = useState({
    error: false,
    message: "",
  });
  const [passError, setPassError] = useState({
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMailError({
      error: false,
      message: "",
    });
    setPassError({
      error: false,
      message: "",
    });
    try {
      if (data.email === "") {
        setMailError({
          error: true,
          message: "This field required",
        });
        setLoading(false);
        return;
      }
      if (data.password === "") {
        setPassError({
          error: true,
          message: "This field required",
        });
        setLoading(false);
        return;
      }
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.email
      );
      console.log(response);
      navigate("/home");
    } catch (e) {
      if (e.code === AuthErrorCodes.EMAIL_EXISTS) {
        setMailError({
          error: true,
          message: "Email already exists",
        });
      }
    }
    setLoading(false);
  };

  const handleSignInWithGoogle = async () => {
    try {
      setLoading(true);
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setMailError({
      error: false,
      message: "",
    });
    setPassError({
      error: false,
      message: "",
    });

    console.log(data.email, data.password);
    try {
      if (data.email === "") {
        setMailError({
          error: true,
          message: "This field required",
        });
        setLoading(false);
        return;
      }
      if (data.password === "") {
        setPassError({
          error: true,
          message: "This field required",
        });
        setLoading(false);
        return;
      }
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(response);
      navigate("/home");
    } catch (e) {
      if (e.code === AuthErrorCodes.INVALID_IDP_RESPONSE) {
        setPassError({
          error: true,
          message: "Invalid credentials",
        });
      } else {
        setMailError({
          error: true,
          message: "Bad request",
        });
        setPassError({
          error: true,
          message: "Bad request",
        });
      }
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="auth-main">
      {loading && (
        <Box sx={{ width: "100%", position: "absolute", top: "0px" }}>
          <LinearProgress />
        </Box>
      )}
      <div className="auth-main-1">
        <div className="auth-1">
          <span className="material-symbols-outlined">lock</span>
          <p>{form === "signup" ? "SIGN UP" : "LOGIN"}</p>
        </div>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            onChange={handleChange}
            required
            value={data.email}
            error={mailError.error}
            helperText={mailError.message}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            onChange={handleChange}
            value={data.password}
            required
            error={passError.error}
            helperText={passError.message}
          />
          <div className="account-1-main">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            {form === "signup" ? (
              <p onClick={() => setForm("login")}>
                Already having an account? <span>login</span>
              </p>
            ) : (
              <p onClick={() => setForm("signup")}>
                Don't have an account? <span>create one</span>
              </p>
            )}
          </div>
          <Button
            variant="contained"
            onClick={form === "signup" ? handleSubmit : handleLogin}
          >
            {form === "signup" ? "SIGN UP" : "LOGIN"}
          </Button>
          <button className="google-btn" onClick={handleSignInWithGoogle}>
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
              alt=""
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
