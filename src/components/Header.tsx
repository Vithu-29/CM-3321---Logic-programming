import React from 'react';
import { Menu, Search, Moon, Sun, BookOpen, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onOpenMobile: () => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onSelectSection: (section: string) => void;
}

const SECTION_TITLES: Record<string, { title: string; subtitle: string }> = {
  dashboard: {
    title: 'Study Dashboard',
    subtitle: 'CM 3321 – Logic Programming & Artificial Cognitive Systems',
  },
  'past-paper': {
    title: 'Last Year Past Paper',
    subtitle: 'November 2025 Semester 6 Examination • 100 Marks',
  },
  answers: {
    title: 'Question-by-Question Model Answers',
    subtitle: 'Academic solutions with learning explanations & exam-ready answers',
  },
  lectures: {
    title: 'Structured Lecture Study Notes',
    subtitle: 'Simplified notes, definitions, examples & common exam traps',
  },
  topics: {
    title: 'Topic Explorer',
    subtitle: 'Master key concepts cross-referenced to lecture slides & questions',
  },
  revision: {
    title: 'Exam Revision & High Priority Checklist',
    subtitle: 'High-yield topics, definitions, formulas & question patterns',
  },
};

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  onOpenMobile,
  onOpenSearch,
  darkMode,
  onToggleDarkMode,
  onSelectSection,
}) => {
  const currentInfo = SECTION_TITLES[currentSection] || {
    title: 'CM 3321 Revision',
    subtitle: 'University Exam Preparation Platform',
  };

  return (
    <header
      className={`h-16 sticky top-0 z-30 border-b px-4 sm:px-8 flex items-center justify-between shrink-0 transition-colors ${
        darkMode
          ? 'bg-slate-900/95 border-slate-800 text-slate-100'
          : 'bg-white/95 border-slate-200 text-slate-900'
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenMobile}
          className="p-2 rounded-lg lg:hidden hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {currentInfo.title}
          </h1>
          <p
            className={`text-xs hidden md:block ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {currentInfo.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Rounded-full Search Bar from Clean Minimalism design */}
        <div className="relative w-44 sm:w-80 md:w-96">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            readOnly
            onClick={onOpenSearch}
            placeholder="Search lectures, questions or topics..."
            className={`w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-10 text-xs sm:text-sm cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'
            }`}
          />
          <kbd
            className={`absolute right-3 top-2 text-[10px] px-1.5 py-0.5 rounded font-mono hidden sm:inline-block ${
              darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-500'
            }`}
          >
            ⌘K
          </kbd>
        </div>

        <button
          onClick={() => onSelectSection('revision')}
          className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Quick Revise</span>
        </button>

        {/* User / Batch Avatar Pill */}
        <div className="flex items-center gap-2">
          <div
            title="University of Moratuwa - Batch 21"
            className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200 shadow-xs"
          >
            UoM
          </div>
        </div>

        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            darkMode
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
