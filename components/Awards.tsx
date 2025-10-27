
import React from 'react';
import Section from './Section';

const Awards: React.FC = () => {
  return (
    <Section id="awards" variant={3}>
      <div className="md:flex gap-8 items-center">
        <div className="w-full md:w-56 flex-shrink-0" data-reveal-item>
          <img loading="lazy" src="images/nng-winner.png" className="rounded-lg shadow-md" alt="NNG Award" />
        </div>
        <div className="mt-6 md:mt-0" data-reveal-item>
          <h2 className="text-3xl font-bold">Awards</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            <img loading="lazy" src="images/nng-useit.png" className="rounded-lg shadow-md" alt="Nielsen Norman Group" /><br />
            <strong className="text-gray-800 dark:text-white">Award-Winning Intranet Design — Huron Consulting Group </strong></p>
          <p className="mt-2 text-gray-600 dark:text-gray-300"> 
            Recognized with the Annual Intranet Design Award for outstanding usability and innovation. Selected by renowned usability expert <strong className="text-gray-800 dark:text-white">Jakob Nielsen</strong>, expert review for excellence in user experience and interface design.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Awards;
