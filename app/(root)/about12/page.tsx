import About from "@/components/About";
import Experience from "@/components/Experience";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-14 container relatve flex flex-col gap-10">
      <About />
      {/* Heading Section */}
      <div className="text-center flex flex-col gap-4 mt-10">
        <span className="text-sm font-medium text-indigo-600">About</span>
        <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-primary md:text-3xl">
          Here&apos;s a quick intro about me and what I love to do
        </h2>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 gap-8 py-12 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:pb-20">
          {/* Text Section */}
          <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
            {/* Mobile Image */}
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border border-border-primary p-2 w-[188px] h-[278px]">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                  </div>
                </div>
                <Image
                  height={270}
                  width={180}
                  className="absolute left-0 top-0 h-[270px] w-[180px] -rotate-2 rounded-lg object-cover shadow"
                  src="/hero-images/hero1.jpg"
                  alt="A headshot"
                />
              </div>
            </div>

            {/* Text Content */}
            <h2 className="mb-6 w-full text-3xl font-medium leading-[40px] tracking-tighter text-primary">
              My programming origins
            </h2>
            <p className="mb-6 text-base leading-8 text-secondary">
              When Apple unveiled the first iPad with its beautiful 1024x768
              display, I knew I had to create for it. I taught myself mobile
              development while freelancing, and soon I was shipping iOS and
              Android apps. One of my games even climbed above Angry Birds in
              the charts for a while—which still makes me smile when I think
              about it.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:order-1 lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div className="rounded-[20px] border border-border-primary p-2 w-[188px] h-[278px]">
                  <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                </div>
              </div>
              <Image
                height={270}
                width={180}
                className="absolute left-0 top-0 h-[270px] w-[180px] -rotate-2 rounded-lg object-cover shadow"
                src="/hero-images/hero2.jpg"
                alt="A headshot"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
          {/* Text Content */}
          <div className="flex flex-col items-center text-left lg:items-start">
            {/* Mobile Image */}
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                  </div>
                </div>
                <Image
                  height={270}
                  width={180}
                  className="absolute left-0 top-0 h-[270px] w-[180px] rotate-2 rounded-lg object-cover shadow"
                  src="/hero-images/hero3.jpg"
                  alt="Speaking at C3 Conf!"
                />
              </div>
            </div>

            {/* Heading and Paragraph */}
            <h2 className="mb-6 w-full text-3xl font-medium leading-[40px] tracking-tighter text-primary">
              Finding My Way to Web
            </h2>
            <p className="mb-6 text-base leading-8 text-secondary">
              Despite my love for mobile development, the web kept calling my
              name. With my eye for design, frontend felt like the perfect
              playground. I dove into HTML, CSS, and JavaScript—with React in
              2016 becoming my game-changer. A few months later and I had landed
              my first full-time web dev role and never looked back.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                  <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                </div>
              </div>
              <Image
                height={270}
                width={180}
                className="absolute left-0 top-0 h-[270px] w-[180px] rotate-2 rounded-lg object-cover shadow"
                src="/hero-images/hero4.jpg"
                alt="Speaking at C3 Conf!"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
          {/* Text Section */}
          <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
            {/* Mobile Image */}
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                  </div>
                </div>
                <Image
                  height={270}
                  width={180}
                  className="absolute left-0 top-0 h-[270px] w-[180px] -rotate-2 rounded-lg object-cover shadow"
                  src="/hero-images/hero4.jpg"
                  alt="A headshot"
                />
              </div>
            </div>

            {/* Heading & Paragraphs */}
            <h2 className="mb-6 w-full text-3xl font-medium leading-[40px] tracking-tighter text-primary">
              Life Beyond Code
            </h2>
            <p className="mb-6 text-base leading-8 text-secondary">
              When I met PeggyJean, I knew pretty quickly she was the one. After
              proposing, we had grand wedding plans – until COVID happened. We
              pivoted (developer joke!) and had a small, intimate ceremony in
              2020 that turned out more perfect than we could have imagined.
            </p>
            <p className="mb-6 text-base leading-8 text-secondary">
              Family has always been my center, and seeing ours grow has been
              life&apos;s greatest joy. Our daughter ElizaJane arrived in 2021,
              bringing endless wonder to our days, and little Renny joined our
              crew in 2023, completing our circle.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                  <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                </div>
              </div>
              <Image
                height={270}
                width={180}
                className="absolute left-0 top-0 h-[270px] w-[180px] -rotate-2 rounded-lg object-cover shadow"
                src="/hero-images/hero4.jpg"
                alt="A headshot"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
          {/* Text Content */}
          <div className="flex flex-col items-center text-left lg:items-start">
            {/* Mobile Image */}
            <div className="mb-8 lg:hidden">
              <div className="relative mx-auto w-fit">
                <div className="group inline-block text-center">
                  <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                  </div>
                </div>
                <Image
                  height={270}
                  width={180}
                  className="absolute left-0 top-0 h-[270px] w-[180px] rotate-2 rounded-lg object-cover shadow"
                  src="/hero-images/hero1.jpg"
                  alt="A headshot"
                />
              </div>
            </div>

            {/* Headline & Paragraphs */}
            <h2 className="mb-6 w-full text-3xl font-medium leading-[40px] tracking-tighter text-primary">
              These Days
            </h2>
            <p className="mb-6 text-base leading-8 text-secondary">
              Currently, I&apos;m leading teams at LogicGate as a Senior
              Frontend Engineer where we&apos;re building some pretty awesome
              stuff. Speaking at tech conferences has become a regular part of
              my year.
            </p>
            <p className="mb-6 text-base leading-8 text-secondary">
              When I&apos;m not working, you&apos;ll find me on creative coding
              side projects, writing for my blog, failing spectacularly at games
              with friends, or—best of all—hanging out with my family, usually
              with coffee nearby and dad jokes at the ready.
            </p>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-fit">
              <div className="group inline-block text-center">
                <div className="w-[188px] h-[278px] rounded-[20px] border border-border-primary p-2">
                  <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner" />
                </div>
              </div>
              <Image
                height={270}
                width={180}
                className="absolute left-0 top-0 h-[270px] w-[180px] rotate-2 rounded-lg object-cover shadow"
                src="/hero-images/hero1.jpg"
                alt="A headshot"
              />
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Subscribe />
    </div>
  );
};

export default page;
