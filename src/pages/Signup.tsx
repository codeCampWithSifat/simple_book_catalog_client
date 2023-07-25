/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/feature/user/userSlice";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = (data: any) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  return (
    <div className="">
      <h2 className="text-indigo-800 text-3xl text-center font-bold">
        Register Your Account
      </h2>
      <form
        className="grid grid-cols-1 justify-items-center mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Your Name"
          type="text"
          className="input input-bordered w-1/4 my-3"
          {...register("name", { required: true })}
        />
        <input
          placeholder="example@gmail.com"
          type="email"
          className="input input-bordered w-1/4 my-3"
          {...register("email", { required: true })}
        />
        <input
          placeholder="Your Password"
          type="password"
          className="input input-bordered w-1/4 my-3"
          {...register("password", { required: true })}
        />
        <button type="submit" className="btn btn-primary  w-1/4">
          Register
        </button>
        <p className="text-indigo-800 mt-3">
          Already Have An Account{" "}
          <strong>
            <Link to="/login"> Please Login</Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Signup;
