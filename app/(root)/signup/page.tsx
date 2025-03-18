import SignupForm from "@/components/SignupForm";
import connectMongoDB from "@/libs/connnectMongoDB";
import { User } from "@/libs/mongoose_models/users";
import React from "react";

const demoFetcher = async () => {
  await connectMongoDB();
  const user = await User.findOne({ email: "asdf@g.com" });
  console.log("Fetched user:", user);
  return null;
};
const page = () => {
  demoFetcher();
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default page;
