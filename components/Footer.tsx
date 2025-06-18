import Link from "next/link";
import Image from "next/image";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="max-w-6xl container lg:flex border-t mt-20">
      {/* Left Side */}
      <div className="flex w-full py-6 text-sm">
        <div className="flex-grow space-y-6">
          <Link href="/" aria-label="Go to home">
            <Image
              src="/sa.png"
              alt="Site logo"
              width={40}
              height={40}
              className="h-12 w-12 object-contain"
              priority
            />
          </Link>

          <p className="w-60 leading-5 ">
            I&apos;m Braydon – a senior front-end developer, blogger, and public
            speaker. Thanks for checking out my site!
          </p>
          <p className="mt-6 ">© 2025 Braydon Coyer</p>
        </div>

        <div className="flex w-full items-end justify-end pr-16">
          <div className="z-30 flex items-center gap-2 rounded-full bg-dark-primary px-3 py-1.5">
            <a href="https://twitter.com/BraydonCoyer" aria-label="Twitter">
              <TwitterLogoIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/braydon-coyer/"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon />
            </a>
            <a href="https://github.com/braydoncoyer" aria-label="GitHub">
              <GitHubLogoIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full flex-col items-end py-6 text-xs lg:pl-16">
        <div className="flex w-full flex-col md:flex-row md:justify-start lg:justify-between gap-12">
          <div>
            <span className="mb-4 inline-block text-base font-medium text-primary">
              General
            </span>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link className="hover:text-primary" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-4 inline-block text-base font-medium text-primary">
              Specifics
            </span>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link className="hover:text-primary" href="/toolbox">
                  Toolbox
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/speaking">
                  Speaking
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-primary"
                  href="https://braydoncoyer.lemonsqueezy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Products
                </a>
              </li>
              <li>
                <Link className="hover:text-primary" href="/community-wall">
                  Community Wall
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="mb-4 inline-block text-base font-medium text-primary">
              Extra
            </span>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link className="hover:text-primary" href="/changelog">
                  Changelog
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/connections">
                  Connections
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/links">
                  Links
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
