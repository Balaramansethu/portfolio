import React, { useState } from "react";
import "../LandingPage/LandingPage.css";
import ImageBala from "../assets/image-port.jpg";
const LandingPage = () => {
  const [tooltip, setTooltip] = useState("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText("baalaaraman@gmail.com").then(() => {
      setTooltip("Copied!");
      setTimeout(() => setTooltip("Copy"), 500); // Reset tooltip after 2 seconds
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
                      $ whoami<span class="text-blue-400">_</span>
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative">
                        $ user.role<span class="text-blue-400">_</span>
                      </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
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
                        $ user.description<span class="text-blue-400">_</span>
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
                        Engineer,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-green-400">focus:</span> "Web
                        Developer,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="text-green-400">expertise:</span>{" "}
                        "Frontend Development
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
                          data challenges into
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; scalable
                          solutions.Building robust data
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; pipelines and real-time
                          analytics systems.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 opacity-100">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative opacity-100">
                        "$ user.skills"<span class="text-blue-400">_</span>
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
                          REST API
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
                        $ user.socials <span class="text-blue-400">_</span>
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
                  <div className="space-y-2">
                    <div className="font-mono text-sm text-gray-400">
                      <span className="font-mono relative">
                        $ user.actions<span class="text-blue-400">_</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <a
                        className="bg-gray-800 hover:bg-gray-700
                                             text-white mt-2 px-6 py-2.5 rounded-lg font-mono group
                                             border border-gray-700
                                             transition-all hover:scale-105 relative overflow-hidden"
                        href="#projects"
                      >
                        <span className="relative z-10">./view-projects</span>
                      </a>
                      <a
                        className="bg-gray-800 hover:bg-gray-700
                                             text-white mt-2 px-6 py-2.5 rounded-lg font-mono group
                                             border border-gray-700
                                             transition-all hover:scale-105 relative overflow-hidden"
                        href="#contact-me"
                      >
                        <span className="relative z-10">./contact-me</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 relative hidden lg:block opacity-100 pb-36">
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10  rounded-3xl transform rotate-6  backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-blue-500/10  rounded-3xl transform -rotate-6  backdrop-blur-sm border border-white/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 w-[600px] h-[600px]">
                        <div class="absolute inset-0 overflow-hidden z-0">
                          {/* heregoesthetechimageanimations */}
                        </div>
                      </div>
                      <div className="relative w-[300px] h-[300px] z-10">
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
      {/* implement projects featured here */}
    </div>
  );
};

export default LandingPage;
