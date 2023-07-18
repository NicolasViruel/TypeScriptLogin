import axios from "../libs/axios";
import { RiMailFill } from "react-icons/ri";
import { RiHandbagFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiUserFill  } from "react-icons/ri";

const RegisterPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;

    const resRegister = {
      username,
      email,
      password,
    };

    try {
      const res = await axios.post("api/auth/singup", resRegister);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

//   function resetForm() {
//       console.log("reseteando formulario");

//   }

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

    // <form onSubmit={handleSubmit}>
    //     <input type="text" placeholder="Name" />
    //     <input type="email" placeholder="email@email.com" />
    //     <input type="password" placeholder="*********" />
    //     <div>
    //         <input type="button" value="Reset Form" onClick={() => resetForm()}/>
    //     </div>

    // </form>
  );
};

export default RegisterPage;
