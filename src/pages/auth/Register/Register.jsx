import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const { createUser, updateProfileUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const profileImg = data.photo[0];

    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log("created user:", user);

      // image upload
      const formData = new FormData();
      formData.append("image", profileImg);

      const image_API_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_HOST_KEY
      }`;

      axios.post(image_API_URL, formData).then((res) => {
        console.log("after image upload", res.data.data.display_url);

        //   update profile
        const updatedUser = {
          displayName: data.name,
          photoURL: res.data.data.display_url,
        };
        updateProfileUser(updatedUser)
          .then(() => {
            console.log("user profile updated");
            navigate(location.state || "/");
          })
          .catch((err) => console.error(err));
      });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>garment-pilot-register</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Name is required
                  </p>
                )}
                {/* Photo */}
                <label className="label">Photo</label>

                <input
                  {...register("photo", { required: true })}
                  type="file"
                  className="file-input"
                  placeholder="Photo"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Photo is required
                  </p>
                )}
                {/* Role */}
                <label className="label">Role</label>
                <select
                  {...register("role", { required: true })}
                  defaultValue="buyer"
                  className="select"
                >
                  <option disabled={true}>Role</option>
                  <option>buyer</option>
                  <option>manager</option>
                </select>
                {errors.role?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Role is required
                  </p>
                )}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600" role="alert">
                    Password is required{" "}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    Password must be at least 6 characters or longer
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600" role="alert">
                    Password must contain both uppercase and lowercase letters.
                  </p>
                )}

                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p>
                Already registered?{" "}
                <Link
                  state={location.state}
                  to={"/login"}
                  className="text-green-500"
                >
                  Login
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

export default Register;
