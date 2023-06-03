import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import auth1 from "../../assets/others/authentication.png";
import auth2 from "../../assets/others/authentication1.png";
import "./Login.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const LogIn = () => {
  //location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Context
  const { signIn, user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const passwordConfirmation = { email, password };
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        Swal.fire("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Maybe you typed your email address or password incorrectly");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero hero-bg md:mt-[95px]">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={auth2} />
          </div>
          <form
            onSubmit={handleLogin}
            className="card w-1/2 max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha"
                  className="input input-bordered"
                />
                {/* <button className="btn btn-outline btn-xs mt-1">
                  Validate Captcha
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[135px] mx-auto flex gap-3">
        <Link className="btn btn-primary" to="/signup">
          New? Sign Up
        </Link>
        <Link className="btn btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
