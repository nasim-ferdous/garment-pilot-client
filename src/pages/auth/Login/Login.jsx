import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signinUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signinUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>garment-pilot-login</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="py-6">Enter your email and password to continue.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Email is required
                  </p>
                )}
                {/* password */}
                <label className="label">Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required{" "}
                  </p>
                )}

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p>
                New to Garment Pilot? Please{" "}
                <Link
                  state={location.state}
                  to={"/register"}
                  className="text-green-500"
                >
                  Register
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
