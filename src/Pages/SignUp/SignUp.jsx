import { useContext, useEffect, useRef, useState } from "react";
import auth1 from "../../assets/others/authentication.png";
import auth2 from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        <Navigate to="/"></Navigate>;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User Updated");
          })
          .catch((error) => console.log(error));
        Swal.fire({
          title: "Register Success",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email already in use",
        });
      });
  };
  console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      {user ? (
        <>
          <div className="flex items-center justify-center text-center min-h-[100vh] flex-col gap-4">
            <img
              className="w-[256px]"
              src="https://i.ibb.co/CPFvfkN/happiness.png"
            />
            <p className="text-2xl font-bold">
              What are you doing here? You are already logged in.{" "}
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </>
      ) : (
        <>
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
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      {...register("PhotoURL", { required: true })}
                      placeholder="Photo URL"
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
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password && (
                      <span className="text-red-600 mt-2" role="alert">
                        Minimum 6 length Password required.
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <input
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
      )}
    </>
  );
};

export default SignUp;
