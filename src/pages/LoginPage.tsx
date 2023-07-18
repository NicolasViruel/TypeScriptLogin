import { loginRequest, profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import "../Css/HomePage.css";
import React from "react";
import { RiMailFill } from "react-icons/ri";
import { RiHandbagFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
// import { RiUserFill  } from "react-icons/ri";

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken); //almacenamos el token
  const setProfile = useAuthStore((state) => state.setProfile); // almacenamos el perfil

  const navigate = useNavigate();

  //aca le digo a TypeScript que tipo de evento voy a recibir
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    //  retornamos el login
    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    //  retornamos el perfil
    const resProfile = await profileRequest();
    console.log(resProfile);

    setProfile(resProfile.data.profile);

    //mandamos al profile
    navigate("/profile");
  };
  return (
    <>
      <div className="form">
        <div className="wrapper">
          <span className="icon-close"><RiCloseFill/></span>
          {/* Login */}
          <div className="form-box login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} action="#">
              <div className="input-box">
                <span className="icon">
                  <RiMailFill className="custom-icon"/>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <RiHandbagFill className="custom-icon" />
                </span>
                <input type="password" required/>
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  {" "}
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot Password</a>
              </div>
              <button className="btn">Login</button>
              {/* Register */}
              <div className="login-register">
                <p>
                  Don`t have an account?
                  <a href="/singup" className="register-link">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
          {/* Register */}
          {/* <div className="form-box register">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} action="#">
            <div className="input-box">
                <span className="icon">
                  <RiUserFill className="custom-icon" />
                </span>
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <RiMailFill className="custom-icon" />
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <RiHandbagFill className="custom-icon" />
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  {" "}
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot Password</a>
              </div>
              <button className="btn">Login</button>
              <div className="login-register">
                <p>
                  Don`t have an account?
                  <a href="#" className="register-link">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
