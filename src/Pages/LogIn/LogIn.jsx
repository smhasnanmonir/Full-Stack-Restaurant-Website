import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import auth1 from "../../assets/others/authentication.png";
import auth2 from "../../assets/others/authentication1.png";
import "./Login.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
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
    const passwordConfirmation = { email, password };
    console.log(passwordConfirmation);
  };
  return (
    <div>
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
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha"
                  className="input input-bordered"
                />
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-xs mt-1"
                >
                  Validate Captcha
                </button>
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
      <div className="w-[135px] mx-auto">
        <Link className="btn btn-primary" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
