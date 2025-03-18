"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TUserLogin, userLoginSchema } from "@/libs/zod_schema/users";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const UserLogin: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<TUserLogin>({ resolver: zodResolver(userLoginSchema) });

  const onSubmit = async (data: TUserLogin) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (response?.error) {
        setError("email", { type: "manual", message: response.error });
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("email", {
        type: "manual",
        message: "An unexpected error occurred",
      });
    }
  };

  return (
    <div className="user-login">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
