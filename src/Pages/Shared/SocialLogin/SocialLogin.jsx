import { useContext } from "react";
import { FaGit, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleLogin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleLogin().then((result) => {
      const user = result.user;
      const saveUser = { name: user.displayName, email: user.email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <button onClick={handleGoogle} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
      <div className="divider divider-horizontal"></div>
      <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
        <button className="btn btn-circle">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
