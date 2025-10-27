import React from "react";
import Section from "./Section";

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="!p-8 md:!p-12 !bg-transparent !border-none !shadow-none"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div data-reveal-item>
          <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Lead Product Designer — UX & Front-end Leadership
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Transforming vision into world-class digital experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I lead teams to build future-ready products — combining research,
            design systems, and engineering collaboration to deliver measurable
            results. I explore AI to accelerate creative workflows while
            preserving human-centered design.
          </p>
          <div className="mt-8 flex gap-4" data-reveal-item>
            <a
              href="#case-studies"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40"
            >
              View Case Studies
            </a>
            <a
              href="#projects"
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 transform duration-200"
            >
              Explore Projects
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden" data-reveal-item>
          <img
            loading="lazy"
            src="images/ux01.jpg"
            alt="Hero visual"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;