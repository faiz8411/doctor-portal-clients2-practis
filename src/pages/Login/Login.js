import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input className="input input-bordered w-full " {...register("email", { required: "Email is required", maxLength: 20 })} />
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
            <label className="label">
              <span className="label-text text-black">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full" type="submit" value="Login" />
        </form>
        <p>
          New To Doctors Portal?
          <span className="text-primary">
            <Link to="/signup">Create new account</Link>
          </span>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
