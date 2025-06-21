import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  console.log("Slug:", slug);
  return (
    <div className="container">
      <div
        className="drama-shadow flex h-[350px] w-full flex-col justify-end rounded-2xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16"
        style={{
          backgroundImage: `linear-gradient(to top, rgb(99, 102, 241) 0%, rgba(99, 102, 241, 0.1) 30%, transparent 35%), url("/blog/blog1.jpg")`,
        }}
      >
        <div className="mt-auto">
          <div className="mb-4 hidden gap-2 md:flex md:flex-wrap">
            <div className="inline-flex rounded-full border border-white px-2 py-px text-center text-xs uppercase text-white">
              <span>#programming</span>
            </div>
            <div className="inline-flex rounded-full border border-white px-2 py-px text-center text-xs uppercase text-white">
              <span>#react</span>
            </div>
            <div className="inline-flex rounded-full border border-white px-2 py-px text-center text-xs uppercase text-white">
              <span>#javascript</span>
            </div>
          </div>
          <div className="mb-4 space-y-4 text-balance">
            <h1 className="max-w-2xl text-4xl font-medium leading-[45px] tracking-tight text-white md:text-5xl md:leading-[60px]">
              The Only Next.js Favicon Guide You'll Need (Updated 2025)
            </h1>
            <p className="hidden max-w-3xl leading-8 text-slate-100 md:block">
              Learn how to properly add a Favicon to your Next.js application.
              No nonsense. No fluff.
            </p>
          </div>
          <div className="flex items-center gap-4  text-sm text-slate-200">
            <div className="flex items-center gap-1.5 text-xs">
              <svg
                className="hidden h-5 w-5 md:block"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 4.75V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 4.75V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7.75 10.75H16.25"
                ></path>
              </svg>
              <p>June 11, 2025 (10d ago)</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-200">
              <svg
                className="hidden h-5 w-5 text-slate-300 md:block"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 4.75H18.25M6.75 4.75H17.25V6C17.25 8.89949 14.8995 11.25 12 11.25C9.10051 11.25 6.75 8.8995 6.75 6V4.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 10H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.75 19.25H18.25M6.75 19.25H17.25V17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.10051 12.25 6.75 14.6005 6.75 17.5V19.25Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p>3 min read</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-200">
              <svg
                className="hidden h-5 w-5 text-slate-300 md:block"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="2.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></circle>
              </svg>
              <span className="text-xs text-slate-200">1482 reads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
