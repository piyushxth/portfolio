import React from "react";

const Subscribe = () => {
  return (
    <section className="container mt-32 mb-10  relative flex flex-col gap-1 md:gap-10">
      <div className=" rounded-2xl bg-primary-foreground p-14 md:p-[100px]">
        <h2 className="mb-4 text-3xl font-medium text-slate-50">
          Subscribe to my newsletter
        </h2>
        <p className="z-50 mb-8 max-w-[336px] text-base leading-8 text-gray-300 md:mb-12">
          A periodic update about my life, recent blog posts, how-tos, and
          discoveries.
        </p>

        <div className="z-50 mb-4 space-y-4">
          <form className="relative md:inline-block">
            <label className="sr-only">Email</label>

            <input
              id="email"
              type="email"
              placeholder="bobloblaw@gmail.com"
              className="w-full rounded-full border border-gray-400 bg-transparent px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-dark-primary md:w-[425px]"
            />

            <button
              type="submit"
              className="group absolute right-1 top-1 isolate inline-flex h-[42px] items-center justify-center overflow-hidden rounded-full bg-slate-100 px-4 py-2.5 text-left text-sm font-medium text-slate-900"
            >
              Subscribe
            </button>
          </form>
          <div className="min-h-[15px] md:min-h-[30px]"></div>
        </div>

        <p className="text-base text-gray-300">
          <span className="font-bold text-white">NO SPAM.</span> I never send
          spam. You can unsubscribe at any time!
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
