import React from "react";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section id="about" variant={2}>
      <div className="md:flex gap-10 items-center">
        <div className="flex-1" data-reveal-item>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              As a lead product designer, I offer a unique blend of creative
              leadership and technical expertise. I have successfully managed
              high-performing UX and design teams through complex projects at
              top companies.
            </p>
            <p>
              My specialty is translating vision into world-class execution. I
              am as comfortable facilitating research sessions and extracting
              actionable insights, as I am wireframing innovative solutions and
              shepherding concepts to polished interactive prototypes.
            </p>
            <p>
              I balance user advocacy with business needs to craft experiences
              that scale. I focus on systems thinking, robust design governance,
              and pragmatic delivery to shape experiences that engage audiences
              and deliver results.
            </p>
          </div>
        </div>
        <div className="w-64 mt-8 md:mt-0 flex-shrink-0" data-reveal-item>
          <img
            loading="lazy"
            src="images/splash-05.png"
            alt="Profile"
            className="rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
