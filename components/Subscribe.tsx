import Image from "next/image";
import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#171321] py-[5rem] px-[5vw] relative transition-colors duration-200 ease-linear">
      <div className="mx-auto my-0 text-center w-[90vw] max-w-[780px]">
        <h2>Get booped on the brain.</h2>
        <p className="text-lg">
          Jason believes in lifelong learning and continuous improvement. In his
          newsletter, he shares his experience — both technical and otherwise —
          in hopes of connecting with more lifelong learners and building a
          community of practice.
        </p>
      </div>
      <div className="grid items-center gap-[1.5rem ] grid-cols-[140px_1fr]">
        <div className="mx-auto my-0 text-center w-[500px] mt-[3rem]">
          <Image
            width={500}
            height={500}
            className="w-full h-auto"
            src="/opt-in.webp"
            alt=""
          />
        </div>
        <form className="flex flex-col">
          <label>First Name</label>
          <input id="firstName" name="firstName" type="text" />
          <label>Email</label>
          <input id="email" name="email" type="email" />
          <button
            type="submit"
            data-sound-hover="pop"
            data-sound-focus="pop"
            data-sound-click="hooray"
          >
            Subscribe
          </button>
          <p className="notice">
            <small>
              I will never share your personal information because I&apos;m not
              a jerk.
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
