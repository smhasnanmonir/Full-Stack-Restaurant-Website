import { useEffect, useRef, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import auth1 from "../../assets/others/authentication.png";
import auth2 from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));
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
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero hero-bg md:mt-[95px]">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={auth2} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card w-1/2 max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600 mt-2" role="alert">
                    Minimum 6 length Password required.
                  </span>
                )}
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
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
