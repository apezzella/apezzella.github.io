
import React from 'react';
import Section from './Section';

const PROCESS_STEPS = [
  { title: 'Understand & Plan', description: 'Deep empathy for the customer through research, interviews, and journey mapping.' },
  { title: 'Define', description: 'Problem framing and success metrics to align with business goals.' },
  { title: 'Design', description: 'Iterative wireframes, prototypes, and visual design to bring ideas to life.' },
  { title: 'Validate', description: 'Usability testing and analytics-driven iteration to ensure solutions work.' },
  { title: 'Implement & Evaluate', description: 'Collaborate with engineers and measure outcomes for continuous improvement.' },
];

const Process: React.FC = () => {
  return (
    <Section id="process" variant={2}>
      <div className="md:flex gap-10 items-center">
        <div className="flex-1" data-reveal-item>
          <h2 className="text-3xl font-bold">User-Centered Design Process</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6">Great products start with understanding users' needs, behaviors, and pain points.</p>
          <ol className="space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full flex items-center justify-center font-bold mr-4">{index + 1}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0" data-reveal-item>
          <img loading="lazy" src="images/ux_process_circle.png" alt="Process" className="rounded-xl shadow-lg object-cover w-full h-full" />
        </div>
      </div>
    </Section>
  );
};

export default Process;
