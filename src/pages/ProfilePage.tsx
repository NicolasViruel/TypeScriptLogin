import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import "../Css/HomePage.css";

const ProfilePage = () => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  return (
    <>
      <div className="form">
        <div className="wrapperprofile">
          <div className="form-box profile">
            <h2>Profile</h2>
            <div className="input-box">{JSON.stringify(profile)}</div>
            <button
              className="btn"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
