import React, { useState,useEffect  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ShinyText from "../elements/ShinyText/ShinyText";
const ProjectsFeatured = () => {
  const [hoveredTechOne, setHoveredTechOne] = useState("");
  const [hoveredTechTwo, setHoveredTechTwo] = useState("");

  const handleHover = (tech, isSecond = false) => {
    if (isSecond) {
      setHoveredTechTwo(tech);
    } else {
      setHoveredTechOne(tech);
    }
  };

  const resetHoverText = () => {
    setHoveredTechOne("");
    setHoveredTechTwo("");
  };

  useEffect(() => {
    AOS.init({
      duration: 2000, //2ms
      offset: window.innerHeight * 0.4, //  40% of the screen height
      once: true,
    }); 
  }, []);
  if (window.innerHeight <= 320) {
    useEffect(() => {
      AOS.init({
        duration: 2000, //2ms 
        offset: window.innerHeight * 0.3, //  30% of the screen height
        once: true,
      }); 
    }, []);
  }

  const getHoverTextOne = () => {
    switch (hoveredTechOne) {
      case "React.js":
        return "Library for building dynamic, component-based UIs.";
      case "HTML":
        return "Markup language for creating web page structure.";
      case "CSS":
        return "Stylesheets for designing visually appealing and responsive layouts.";
      case "Vite":
        return "A modern build tool for fast and optimized frontend development.";
      case "Vercel":
        return "Deployment platform for applications with fast, serverless hosting.";
    }
  };

  const getHoverTextTwo = () => {
    switch (hoveredTechTwo) {
      case "React.js":
        return "Library for building dynamic, component-based UIs.";
      case "HTML":
        return "Markup language for creating web page structure.";
      case "CSS":
        return "Stylesheets for designing visually appealing and responsive layouts.";
      case "Vite":
        return "A modern build tool for fast and optimized frontend development.";
      case "Vercel":
        return "Deployment platform for applications with fast, serverless hosting.";
      case "Circle CI":
        return "Circle CI is a contious integration platform responsible for testing and staging pipelines"
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-2 text-[#e6edf3] opacity-100">
          <div className="font-mono text-gray-400">$ projects.featured</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">
            Full Stack Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {/* project card starts below here */}
          <div  data-aos="fade-up" className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 opacity-100">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 p-4">
                <div className="h-full bg-gray-950 p-6 rounded-lg relative overflow-hidden group">
                  {/* above div is for contents in tech stack */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E51A_1px,transparent_1px),linear-gradient(to_bottom,#4F46E51A_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-950/90 backdrop-blur-sm border-t border-gray-800">
                    <div className="p-4">
                      <div
                        className={`font-mono text-sm ${
                          hoveredTechOne ? "text-blue-400" : "text-gray-400"
                        } opacity-100`}
                      >
                        {getHoverTextOne()}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full flex flex-col justify-center space-y-8 pb-24">
                    {[ "HTML", "CSS", "React.js","Vite", "Vercel"].map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 text-gray-400"
                          onMouseEnter={() => handleHover(tech)}
                          onMouseLeave={resetHoverText}
                        >
                          <div className="relative">
                            <div
                              className={`w-3 h-3 rounded-full bg-gray-600 ${
                                hoveredTechOne === tech
                                  ? "ring-2 ring-blue-400"
                                  : ""
                              } transition-all`}
                            ></div>
                            <div className="absolute top-3 left-1.5 w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <span
                                className={`font-mono relative text-sm ${
                                  hoveredTechOne === tech
                                    ? "text-blue-400"
                                    : "text-gray-400"
                                } transition-all`}
                              >
                                {tech}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span class="text-xs text-gray-500 font-mono">Active</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-mono text-sm text-gray-400 mb-1">
                      <span>{` $ project[1].info`}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#e6edf3]">
                      Visual Ease : Data structure and algorithm visualization
                    </h3>
                    <span className="inline-block text-blue-400 px-3 py-1  text-sm font-mono mb-2">
                      Developer
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Balaramansethu/dsa-visualizer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
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
                  </div>
                </div>
                <p className="text-gray-400 mb-4 font-mono leading-relaxed text-[#8b949e]">
                  "Built a React application for visualizing algorithms,
                  enhancing understanding of data structures and algorithm
                  behavior for developers and students."
                </p>
                <div className="mb-4">
                  <div className="font-mono text-sm text-gray-400 mb-2">
                    $ project.impact
                  </div>
                  <ul className="space-y-1 text-gray-400 font-mono">
                    <li class="flex items-start">
                      <span class="text-green-400 mr-2">→</span>
                      "Improved learning efficiency for data structure concepts
                      through real-time visualizations."
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-400 mr-2">→</span>
                      "Provided interactive and customizable algorithm
                      simulations."
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-400 mr-2">→</span>
                      "Designed an intuitive and responsive user interface for
                      seamless user experience."
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="font-mono text-sm text-gray-400 mb-2">
                    $ project.stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <ShinyText text="ReactJs" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                    <ShinyText text="ThreeJs" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                    <ShinyText text="HTML" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                    <ShinyText text="CSS" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                    <ShinyText text="Vite" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                    <ShinyText text="Vercel" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project card starts below here */}
          <div data-aos="fade-up" className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 opacity-100">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 p-4">
                <div className="h-full bg-gray-950 p-6 rounded-lg relative overflow-hidden group">
                  {/* above div is for contents in tech stack */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E51A_1px,transparent_1px),linear-gradient(to_bottom,#4F46E51A_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-950/90 backdrop-blur-sm border-t border-gray-800">
                    <div className="p-4">
                      <div
                        className={`font-mono text-sm ${
                          hoveredTechTwo ? "text-blue-400" : "text-gray-400"
                        } opacity-100`}
                      >
                        {getHoverTextTwo()}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full flex flex-col justify-center space-y-8 pb-24">
                    {["HTML", "CSS", "React.js", "Vite","Circle CI", "Vercel"].map(
                      (tech2, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 text-gray-400"
                          onMouseEnter={() => handleHover(tech2, true)}
                          onMouseLeave={resetHoverText}
                        >
                          <div className="relative">
                            <div
                              className={`w-3 h-3 rounded-full bg-gray-600 ${
                                hoveredTechTwo === tech2
                                  ? "ring-2 ring-blue-400"
                                  : ""
                              } transition-all`}
                            ></div>
                            <div className="absolute top-3 left-1.5 w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <span
                                className={`font-mono relative text-sm ${
                                  hoveredTechTwo === tech2
                                    ? "text-blue-400"
                                    : "text-gray-400"
                                } transition-all`}
                              >
                                {tech2}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span class="text-xs text-gray-500 font-mono">Active</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="font-mono text-sm text-gray-400 mb-1">
                      <span>{` $ project[2].info`}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#e6edf3]">
                      Behance Clone
                    </h3>
                    <span className="inline-block text-blue-400 px-3 py-1  text-sm font-mono mb-2">
                      Developer
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Balaramansethu/behance-fe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
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
                  </div>
                </div>
                <p className="text-gray-400 mb-4 font-mono leading-relaxed text-[#8b949e]">
                  "Developed a web application replicating Behance's
                  functionalities, empowering users to showcase and explore
                  creative ideas on user interfaces".{" "}
                </p>
                <div className="mb-4">
                  <div className="font-mono text-sm text-gray-400 mb-2">
                    $ project.impact
                  </div>
                  <ul className="space-y-1 text-gray-400 font-mono">
                    <li class="flex items-center">
                      <span class="text-green-400 mr-2">→</span>
                      "Enabled creators to display portfolios with dynamic
                      gallery features."
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-400 mr-2">→</span>
                      "Implemented robust search, suggestion, and filtering
                      systems based on recommendations, views, and likes."
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-400 mr-2">→</span>
                      "Built a scalable application architecture suitable for
                      future expansion."
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <div className="font-mono text-sm text-gray-400 mb-2">
                    $ project.stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                  <ShinyText text="ReactJs" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                  <ShinyText text="CSS" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                  <ShinyText text="Vite" disabled={false} speed={3} className='px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono border border-gray-700 ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* project card end above */}
        </div>
        {/* above div is whole container */}
      </div>
    </section>
  );
};

export default ProjectsFeatured;
