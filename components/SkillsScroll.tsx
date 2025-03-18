import Image from "next/image";
import React from "react";

const SkillsScroll = () => {
  return (
    <>
      <div className="mb-10 space-y-4 text-center text-primary">
        <h1>My Skills</h1>
        <h5 className="tracking-wider text-fs-xl">
          Some skills I&apos;ve achieved.
        </h5>
      </div>
      <div
        className="scroll"
        style={{ "--time": "15s" } as React.CSSProperties}
      >
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
      </div>

      <div
        className="scroll"
        style={{ "--time": "30s" } as React.CSSProperties}
      >
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>ReactJS</span>
          <span>Figma</span>
          <span>Photoshop</span>
          <span>Premiere Pro</span>
          <span>Figma</span>
          <span>Angular</span>
          <span>Node JS</span>
        </div>
      </div>

      <div
        className="scroll imgBox"
        style={{ "--time": "25s" } as React.CSSProperties}
      >
        <div>
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/css.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/css.png"
            alt=""
          />

          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/js.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/React.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/angular.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/figma.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/photoshop.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/mui.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/tailwind.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/premierePro.png"
            alt=""
          />
        </div>
        <div>
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/css.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/css.png"
            alt=""
          />

          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/js.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/React.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/angular.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/figma.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/photoshop.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/mui.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/tailwind.png"
            alt=""
          />
          <Image
            height={100}
            width={100}
            className="h-[80px] w-auto"
            src="/skills-icons/premierePro.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SkillsScroll;
