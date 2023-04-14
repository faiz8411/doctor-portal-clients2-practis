import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input className="input input-bordered w-full " {...register("name", { required: "name is required" })} />
            {errors.name && (
              <p role="alert" className="text-red-800">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input className="input input-bordered w-full " type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && (
              <p role="alert" className="text-red-800">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", { required: "password is required", minLength: { value: 6, message: "Password should be 6 characters or longer" } })}
            />
            {errors.password && (
              <p role="alert" className="text-red-800">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input className="btn btn-accent w-full mt-4" type="submit" value="CREATE ACCOUNT" />
        </form>
        <p>
          All ready have account?
          <span className="text-primary">
            <Link to="/login">Please Login</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
