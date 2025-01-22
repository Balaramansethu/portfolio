import React, { useState } from "react";
import "../LandingPage/LandingPage.css";
import ImageBala from "../assets/image-port.jpg";
import ProjectsFeatured from "./ProjectsFeatured";
import ContactMe from "./ContactMe/ContactMe";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import { OrbitingCircles } from "../components/ui/orbiting-circles";


const LandingPage = () => {
  const [tooltip, setTooltip] = useState("Copy");


  const Icons = {
    gitHub: () => (
      <svg width="100" height="100" viewBox="0 0 438.549 438.549">
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
        />
      </svg>
    ),
     cssLogo : () => (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/>
  <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/>
  <path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/>
  <path fill="#FFFFFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>
</svg>

    ),
    codeLogo: () => (
      <svg
        width="100"
        height="100"
        viewBox="0 0 256 272"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">

          <text
            x="50%"
            y="50%"
            font-family="Arial, Helvetica, sans-serif"
            font-size="140"
            font-weight="bold"
            text-anchor="middle"
            fill="#FFFFFF"
            dy=".3em"
          >
            &lt;/&gt;
          </text>
        </g>
      </svg>
    ),
    reactLogo:() => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
      >
        <circle cx="50" cy="50" r="8" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="2" fill="none">
          <ellipse cx="50" cy="50" rx="40" ry="18" />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="18"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="18"
            transform="rotate(120 50 50)"
          />
        </g>
      </svg>
    ),
    nodeJs: () => (
      <svg
      width="100"
      height="100"
      viewBox="0 0 256 272"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          d="M128 0l113.136 65.207v130.393L128 260.8 14.864 195.6V65.207L128 0z"
          fill="#539E43"
        />
        <text
          x="50%"
          y="55%"
          font-family="Arial, Helvetica, sans-serif"
          font-size="90"
          font-weight="bold"
          text-anchor="middle"
          fill="#FFFFFF"
          dy=".3em"
        >
          JS
        </text>
      </g>
    </svg>
    )    
    }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("baalaaraman@gmail.com").then(() => {
      setTooltip("Copied!");
      setTimeout(() => setTooltip("Copy"), 500);                                                              
    });
  };
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 ">
      <div className="whole-container min-h-screen w-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-xy">
        <div className="absolute inset-0 bg-grid-gray-900 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,white_20%,transparent)] opacity-10"></div>{" "}
        <div className="section-container min-h-full relative w-full bg-grid-gray-800 bg-[size:50px_50px]">
          <div className="Heading-container relative mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
            <div className="Heading-contents flex-grow pt-20 pb-16 sm:pt-24 lg:pt-32">
              <div className=" flex flex-col lg:flex-row items-center flex-center justify-between gap-12  lg:gap-16">
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                  {" "}
                  {/* //leftheadsection */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                 bg-gray-950 backdrop-blur-sm
                                 border border-blue-400/20 
                                 text-blue-400 text-sm font-mono"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-terminal w-4 h-4"
                    >
                      <polyline points="4 17 10 11 4 5"></polyline>
                      <line x1="12" x2="20" y1="19" y2="19"></line>
                    </svg>
                    <span class="font-mono relative">
                    <TypeAnimation
                          sequence={["$ whoami", 1000]}
                          wrapper="span"
                          speed={250}
                          repeat={0}
                          cursor={false}
                        /><span class="text-blue-400">_</span>
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative">
                      <TypeAnimation
                          sequence={["$ user.role", 1000]}
                          wrapper="span"
                          speed={250}
                          repeat={0}
                          cursor={false}
                        /><span class="text-blue-400">_</span>
                      </span>
                    </div>
                    <h1  className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                      Balaraman
                    </h1>
                    <div className="font-mono text-[#8b949e]">
                      <span className="text-green-400"> {`>`} </span> Software
                      Developer
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative">
                      <TypeAnimation
                          sequence={["$ user.description", 1000]}
                          wrapper="span"
                          speed={250}
                          repeat={0}
                          cursor={false}
                        /><span class="text-blue-400">_</span>
                      </span>
                    </div>
                    <div className="text-base sm:text-lg max-w-2xl font-mono leading-relaxed space-y-2 text-[#8b949e]">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-400">[1]:</span>
                        <span className="text-purple-400">profile</span>{" "}
                        {<span>{`= {`}</span>}
                      </div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-green-400">role:</span> "Software
                        Engineer",
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-green-400">focus:</span> "Web
                        Developer",
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-green-400">expertise:</span>{" "}
                        "Frontend Development"
                        <br /> &nbsp;&nbsp; &nbsp;&nbsp;{`}`}
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-400">[2]:</span>
                        <span className="text-purple-400">display</span>{" "}
                        {<span>{`(profile.summary)`}</span>}
                      </div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-gray-300"># Output:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transforming complex
                          challenges into
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; scalable
                          solutions,Building robust
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; applications with
                          better user experience.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 opacity-100">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative opacity-100">
                      <TypeAnimation
                          sequence={["$ user.skills", 1000]}
                          wrapper="span"
                          speed={250}
                          repeat={0}
                          cursor={false}
                        /><span class="text-blue-400">_</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                                    bg-gray-950 backdrop-blur-sm
                                                    border border-blue-400/10 hover:border-blue-400/30 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-database w-5 h-5 text-blue-400"
                        >
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="2"
                            rx="2"
                            ry="2"
                          ></rect>
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="6" x2="6.01" y1="18" y2="18"></line>
                          <line x1="6" x2="6.01" y1="6" y2="6"></line>
                        </svg>
                        <span className="font-mono text-[#8b949e]">
                          Rest api
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                                    bg-gray-950 backdrop-blur-sm
                                                    border border-blue-400/10 hover:border-blue-400/30 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-database w-5 h-5 text-blue-400"
                        >
                          <circle cx="12" cy="12" r="2"></circle>
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="10"
                            ry="4"
                            transform="rotate(60 12 12)"
                          ></ellipse>
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="10"
                            ry="4"
                            transform="rotate(-60 12 12)"
                          ></ellipse>
                          <ellipse cx="12" cy="12" rx="10" ry="4"></ellipse>
                        </svg>
                        <span className="font-mono text-[#8b949e]">
                          ReactJs
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                                    bg-gray-950 backdrop-blur-sm
                                                    border border-blue-400/10 hover:border-blue-400/30 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="text-green-500"
                        >
                          <path
                            d="M16 2.5l13 7.5v12.5l-13 7.5-13-7.5V10z"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          ></path>

                          <text
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="8"
                            fill="currentColor"
                            fontFamily="Arial, Helvetica, sans-serif"
                            fontWeight="bold"
                          >
                            JS
                          </text>
                        </svg>

                        <span className="font-mono text-[#8b949e]">NodeJs</span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                                    bg-gray-950 backdrop-blur-sm
                                                    border border-blue-400/10 hover:border-blue-400/30 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-database w-5 h-5 text-blue-400"
                        >
                          <path d="m18 16 4-4-4-4"></path>
                          <path d="m6 8-4 4 4 4"></path>
                          <path d="m14.5 4-5 16"></path>
                        </svg>
                        <span className="font-mono text-[#8b949e]">Java</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative">
                      <TypeAnimation
                          sequence={["$ user.socials", 1000]}
                          wrapper="span"
                          speed={250}
                          repeat={0}
                          cursor={false}
                        /> <span class="text-blue-400">_</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start space-x-6">
                    <a
                      href="https://github.com/Balaramansethu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-blue-400 transition-colors transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-github w-6 h-6"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/balaraman-s-abb94422a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8b949e] hover:text-blue-400 transition-colors transform hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-github w-6 h-6"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <div className="relative group">
                      <a
                        onClick={copyToClipboard}
                        className="text-[#8b949e] hover:text-blue-400 transition-colors transform hover:scale-110 cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github w-6 h-6"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </a>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {tooltip}
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div data-aos="fade-out" className="w-full lg:w-1/2 relative hidden lg:block opacity-100 pb-36">
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10  rounded-3xl transform rotate-6  backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-blue-500/10  rounded-3xl transform -rotate-6  backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 w-[600px] h-[600px]">
                        <div class="absolute inset-0 overflow-hidden z-0">
                          {/* heregoesthetechimageanimations */}
                          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden right-9 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
      </span>
 
      <OrbitingCircles iconSize={40}>
        <Icons.cssLogo />
        <Icons.nodeJs />
        <Icons.codeLogo />
        <Icons.reactLogo />
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={220} reverse speed={2}>
        <Icons.cssLogo />
        <Icons.nodeJs />
        <Icons.codeLogo />
        <Icons.reactLogo />
      </OrbitingCircles>
    </div>
                        </div>
                      </div>
                      <div className="relative w-[270px] h-[270px] z-11 bottom-5 left-3">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20  blur-2xl rounded-full animate-pulse"></div>
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-transform hover:scale-105">
                          <img src={ImageBala} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="relative bg-gray-50/50 dark:bg-gray-800/50 pb-1"></div>
        <ProjectsFeatured />
        <div class="relative bg-gray-50/50 dark:bg-gray-800/50 pb-1"></div>
        <ContactMe />
      </div>
    </div>
  );
};

export default LandingPage;
