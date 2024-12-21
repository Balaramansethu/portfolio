import React, { useState } from 'react';

const ProjectsFeatured = () => {
  const [hoveredTech, setHoveredTech] = useState('');

  const handleHover = (tech) => {
    setHoveredTech(tech);
  };

  const resetHoverText = () => {
    setHoveredTech('');
  };

  const getHoverText = () => {
    switch (hoveredTech) {
      case 'Data Sources':
        return ' over steps to explore the pipeline';
      case 'AWS S3 Data Lake':
        return 'Data Lake Setup';
      case 'Spark Processing':
        return 'Big Data Processing';
      case 'BI Tools':
        return 'Analytics and Report';
      case 'Snowflake DW':
        return 'Data Warehouse Setup';
      default:
        return 'Hover over steps to explore';
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-2 text-[#e6edf3] opacity-100">
          <div className="font-mono text-gray-400">$ projects.featured</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">Full Stack Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 opacity-100">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 p-4">
                <div className="h-full bg-gray-950 p-6 rounded-lg relative overflow-hidden group"> 
                    {/* above div is for contents in tech stack */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E51A_1px,transparent_1px),linear-gradient(to_bottom,#4F46E51A_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-950/90 backdrop-blur-sm border-t border-gray-800">
                    <div className="p-4">
                      <div className={`font-mono text-sm ${hoveredTech ? 'text-blue-400' : 'text-gray-400'} opacity-100`}>
                        {getHoverText()}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-full flex flex-col justify-center space-y-8 pb-24">
                    {['Data Sources', 'AWS S3 Data Lake', 'Spark Processing', 'BI Tools', 'Snowflake DW'].map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-400"
                        onMouseEnter={() => handleHover(tech)}
                        onMouseLeave={resetHoverText}
                      >
                        <div className="relative">
                          <div
                            className={`w-3 h-3 rounded-full bg-gray-600 ${hoveredTech === tech ? 'ring-2 ring-blue-400' : ''} transition-all`}
                          ></div>
                          <div className="absolute top-3 left-1.5 w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span
                              className={`font-mono relative text-sm ${hoveredTech === tech ? 'text-blue-400' : 'text-gray-400'} transition-all`}
                            >
                              {tech}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span class="text-xs text-gray-500 font-mono">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* above div is whole container */}
      </div>
    </section>
  );
};

export default ProjectsFeatured;
