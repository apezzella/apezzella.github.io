
import React, { useState } from 'react';
import Section from './Section';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [openSkillId, setOpenSkillId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenSkillId(prevId => (prevId === id ? null : id));
  };
  
  return (
    <Section id="skills" variant={1}>
      <div className="flex items-center justify-between" data-reveal-item>
        <h2 className="text-3xl font-bold">Professional Skills</h2>
        <p className="text-gray-500 dark:text-gray-400 hidden sm:block">Click a skill to learn more</p>
      </div>
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal-item>
        {SKILLS.map((skill) => (
          <SkillCard 
            key={skill.id}
            skill={skill}
            isOpen={openSkillId === skill.id}
            onToggle={() => handleToggle(skill.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
