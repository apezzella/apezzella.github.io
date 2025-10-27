
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" variant={2}>
      <div className="sm:flex items-center justify-between text-center sm:text-left" data-reveal-item>
        <div>
          <h2 className="text-3xl font-bold">Let's work together</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Interested in product design leadership or design system work? Reach out.</p>
        </div>
        <a 
          href="https://www.linkedin.com/in/adrianopezzella/" 
          className="inline-block mt-6 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40"
        >
          Reach me on LinkedIn
        </a>
      </div>
    </Section>
  );
};

export default Contact;
