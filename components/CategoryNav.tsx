
import React from 'react';
import { SectionData } from '../types';

interface CategoryNavProps {
  activeSection: string;
  sections: SectionData[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeSection, sections }) => {
  return (
    <div className="sticky top-[73px] z-40 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto custom-scrollbar">
      <div className="container mx-auto px-6 flex items-center md:justify-center space-x-4 sm:space-x-8 py-4 whitespace-nowrap">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center space-x-2 text-xs md:text-sm font-semibold transition-all px-2 py-1 rounded-md ${
              activeSection === section.id 
                ? 'text-primary bg-primary/5' 
                : 'text-slate-500 dark:text-slate-400 hover:text-primary'
            }`}
          >
            <span className="material-icons text-sm md:text-base">{section.navIcon}</span>
            <span>{section.navLabel}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
