
import React from 'react';
import type { Skill } from '../types';
import * as Icons from './Icons';

interface SkillCardProps {
  skill: Skill;
  isOpen: boolean;
  onToggle: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isOpen, onToggle }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'lead': return <Icons.TeamLeadIcon />;
      case 'testing': return <Icons.UsabilityTestingIcon />;
      case 'ucd': return <Icons.UserCenteredDesignIcon />;
      case 'creative': return <Icons.CreativeDirectionIcon />;
      case 'system': return <Icons.DesignSystemIcon />;
      case 'wireframing': return <Icons.WireframingIcon />;
      case 'prototypes': return <Icons.RapidPrototypesIcon />;
      case 'mobile': return <Icons.MobileDesignIcon />;
      case 'branding': return <Icons.BrandingIcon />;
      case 'requirements': return <Icons.RequirementsIcon />;
      case 'dev-mgmt': return <Icons.DevManagementIcon />;
      case 'frontend': return <Icons.FrontendIcon />;
      default: return <Icons.GenericSkillIcon />;
    }
  };

  return (
    <div 
      onClick={onToggle}
      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${isOpen ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}
    >
      <div className={`flex items-center gap-4 transition-all duration-300 ${isOpen ? 'mb-3' : ''}`}>
        <div className={`transition-all duration-300 text-indigo-500 dark:text-indigo-400 ${isOpen ? '' : 'p-3 bg-gray-100 dark:bg-gray-700 rounded-lg'}`}>
          {getIcon(skill.id)}
        </div>
        <h3 className={`font-bold text-gray-800 dark:text-white transition-all duration-300 ${isOpen ? 'text-lg' : 'text-base'}`}>
          {skill.title}
        </h3>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="text-sm text-gray-600 dark:text-gray-300 pt-2 border-t border-indigo-200 dark:border-indigo-800">
          {skill.description}
        </p>
      </div>
       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {skill.brief}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
