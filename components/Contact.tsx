import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4  gap-5 my-20   ">
      <div className=" md:col-span-3 contact flex flex-col lg:flex-row rounded-[20px] overflow-hidden shadow-sm">
        {/* Content Section */}
        <div className=" p-8 flex-1">
          <h2 className="gradient retro-2 font-bold">Say hi!</h2>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row mt-4 gap-4 sm:gap-6">
            <a
              href="mailto:hi@vjy.me"
              className="cursor-pointer flex items-center text-base sm:text-lg hover:opacity-80 transition-opacity"
            >
              <Image
                src="/message.svg"
                width={30}
                height={30}
                className="mr-2 w-5 h-5"
                alt="Email icon"
              />
              hi@vjy.me
            </a>
            <a
              href="https://twitter.com/realvjy"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center text-base sm:text-lg hover:opacity-80 transition-opacity"
            >
              <Image
                src="/bird.svg"
                width={30}
                height={30}
                className="mr-2 w-5 h-5"
                alt="Twitter icon"
              />
              realvjy
            </a>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl font-normal my-4 sm:my-6 tracking-[-0.3px] opacity-80 max-w-[440px]">
            Want to create something awesome? Or, you have any query? Drop an
            email, or tweet.
          </p>

          {/* CTA Button */}
          <a
            href="#enquiry"
            className="text-left flex items-center justify-center py-2 px-5 enquiry rounded-[18px] w-fit hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Send Enquiry
          </a>
        </div>

        {/* Image Section */}
        <div className="chat hidden md:flex items-center justify-center p-4 lg:p-0 w-full lg:w-auto">
          <Image
            height={500}
            width={500}
            src="/chat.png"
            alt="Chat illustration"
            className="h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[320px] w-auto object-cover"
          />
        </div>
      </div>
      <div
        className="col-span-1
       flex flex-col lg:flex-row rounded-[20px] overflow-hidden shadow-sm  bg-[linear-gradient(90deg,rgba(63,50,121,0.2)_0%,rgba(20,23,153,0.2)_100%)]"
      >
        <div className="flex flex-col my-[40px] items-center py-[24px] px-[16px] space-y-3">
          <Image width={300} height={50} src="designletter.svg" alt="" />
          <h5>Subscribe to weekly newsletter</h5>
          <textarea
            className="bg-slate-100 text-primary dark:text-black max-h-[40px] px-5 py-[10px] font-medium text-[15px] rounded-[22px] resize-y 
  w-full flex-grow border border-gray-300 appearance-none outline-none 
  transition duration-200 leading-[20px]"
          ></textarea>

          <Button
            className="px-6 py-[11px] font-semibold text-[15px] max-h-[44px] w-full 
  bg-[linear-gradient(334.12deg,_rgb(126,61,254)_-22.4%,_rgb(41,43,254)_98.06%)] 
  text-white border-0 appearance-none cursor-pointer rounded-[25px] leading-[100%] hover:opacity-90"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
