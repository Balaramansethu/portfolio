import React from "react";
import "../LandingPage/LandingPage.css";
import ImageBala from "../assets/image-port.jpg";
const LandingPage = () => {
  return (
    <div className="whole-container min-h-screen w-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-xy">
      <div className="section-container min-h-full w-full bg-grid-gray-800 bg-[size:50px_50px]">
        <div className="absolute inset-0 bg-grid-gray-900 bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,white_20%,transparent)]"></div>
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
                    <span className="text-green-400"> > </span> Software
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
                      <br /> &nbsp;&nbsp; &nbsp;&nbsp;}
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
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transforming complex data
                        challenges into
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
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                      <span className="font-mono text-[#8b949e]">
                        Big Data Processing
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
                        Big Data Processing
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
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-database w-5 h-5 text-blue-400"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                      <span className="font-mono text-[#8b949e]">
                        Big Data Processing
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
                      <span className="font-mono text-[#8b949e]">
                        Big Data Processing
                      </span>
                    </div>
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
  );
};

export default LandingPage;
