import Blog from "@/components/Blog";
import React from "react";

const page = () => {
  return (
    <section className="mt-14 mb-10 relative flex flex-col gap-10">
      {/* Heading Section */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-primary md:text-6xl md:leading-[64px]">
          Insightful &amp;&amp; helpful content curated for you.
        </h1>
      </div>

      {/* Blog Grid Section */}
      <div>
        <Blog />
      </div>
    </section>
  );
};

export default page;
