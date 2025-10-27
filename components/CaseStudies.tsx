
import React from 'react';
import Section from './Section';
import { CASE_STUDIES } from '../constants';

interface CaseStudiesProps {
  onOpenOverlay: (type: 'case', id: string) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenOverlay }) => {
  return (
    <Section id="case-studies" variant={1}>
      <div className="flex items-center justify-between" data-reveal-item>
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <p className="text-gray-500 dark:text-gray-400 hidden sm:block">Detailed examples of my work</p>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {CASE_STUDIES.map((study) => (
          <article key={study.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 transform hover:-translate-y-1" data-reveal-item>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <img loading="lazy" src={study.imageUrl} alt={study.title} className="w-full sm:w-40 h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{study.summary}</p>
                <div className="mt-4">
                  <button onClick={() => onOpenOverlay('case', study.id)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudies;
