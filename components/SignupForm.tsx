"use client";
import React, { useState } from "react";
import { userSchema, TUser } from "@/libs/zod_schema/users";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TRole } from "@/libs/zod_schema/roles";
import { ZodFormattedError } from "zod";

type SignUpErrors = ZodFormattedError<TUser, string>;

// Fetch roles function
const fetchRoles = async (): Promise<TRole[]> => {
  const { data: roles } = await axios.get("/api/roles");
  return roles.data;
};

// Fetch user data function
const fetchUserData = async (): Promise<TUser[]> => {
  const { data: users } = await axios.get("/api/users"); // Assuming there's an endpoint to fetch user data
  console.log(users);
  return users.data; // Ensure it's an array of users
};

// Function to create a user
const createUser = async (userData: TUser) => {
  const response = await axios.post("/api/users", userData);
  return response.data;
};

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<TUser>({
    name: "",
    email: "",
    password: "",
    roles: "",
    address: "",
  });
  const [errors, setErrors] = useState<SignUpErrors | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string>("");

  // fetch("asdf@g.com");

  // Fetch roles using react-query
  const {
    data: roles,

    isPending,
  } = useQuery<TRole[]>({
    queryKey: ["roles"],
    queryFn: fetchRoles,
  });

  // Fetch user data using react-query
  const { data: users, isPending: isUserLoading } = useQuery<TUser[]>({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  const mutation = useMutation({
    mutationFn: async (newUser: TUser) => {
      try {
        const response = await createUser(newUser); // Calling the createUser function
        console.log("API Response:", response); // Log the response to see the returned data
        return response;
      } catch (error) {
        console.error("Error creating user:", error); // Log the error for troubleshooting
        throw error; // Rethrow the error to be caught in the onError
      }
    },
    onSuccess: () => {
      setSuccess("User created successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        roles: "",
        address: "",
      });
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        // Check if the error is due to duplicated email or other errors returned from the server
        setFormError(error.response.data.message); // Display the duplicate email message
      } else {
        setFormError("An error occurred while creating the user.");
      }
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = userSchema.safeParse(formData);

    if (result.success) {
      setErrors(null);
      console.log("Valid form data:", formData);
      mutation.mutate(formData); // Trigger mutation to create user
    } else {
      setErrors(result.error.format());
      setSuccess(null);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border text-white p-5 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Name Field */}
        <div className="mb-4 text-black">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300  p-2 rounded focus:outline-none focus:border-blue-500"
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name._errors[0]}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4 text-black">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300  p-2 rounded focus:outline-none focus:border-blue-500"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email._errors[0]}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4 text-black">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
          {errors?.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password._errors[0]}
            </p>
          )}
        </div>

        {/* Role Field */}
        <div className="mb-4 text-black">
          <label className="block text-gray-700 font-semibold mb-2">Role</label>
          <select
            name="roles" // Match the key in formData
            value={formData.roles}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Role</option>
            {isPending ? (
              <option>Loading...</option>
            ) : (
              roles?.map((role) => (
                <option key={role._id} value={role._id}>
                  {role.name}
                </option>
              ))
            )}
          </select>
        </div>

        {/* Address Field */}
        <div className="mb-4 text-black">
          <label className="block text-gray-700 font-semibold mb-2">
            Address (Optional)
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>

        {/* Form Error Message */}
        {formError && (
          <p className="text-red-600 text-center mt-4">{formError}</p>
        )}

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-center mt-4">{success}</p>
        )}
      </form>

      {/* Displaying User Data */}
      {isUserLoading ? (
        <p>Loading user data...</p>
      ) : (
        users?.map((user) => (
          <div
            key={user._id}
            className="max-w-md mx-auto mt-6 p-5 border rounded-lg bg-gray-800 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">User Information</h3>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.roles}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default SignupForm;
