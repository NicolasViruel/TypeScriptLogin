import { RiMailFill } from "react-icons/ri";
import { RiHandbagFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiUserFill  } from "react-icons/ri";
import { registerRequest } from "../api/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;

    

    try {
      const res = await registerRequest(username, email, password);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="form">
        <div className="wrapper">
          <span className="icon-close">
            <RiCloseFill />
          </span>
                {/* Register */}
          <div className="form-box register">
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
                <input type="checkbox" />I agree to terms & conditions
              </label>
            </div>
            <button className="btn">Register</button>
            <div className="login-register">
              <p>
                Already have an account?
                 <a href="/login" className="login-link">
                   Login
                </a>
              </p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
