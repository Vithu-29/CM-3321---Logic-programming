import React from 'react';
import {
  LayoutDashboard,
  FileText,
  CheckCircle2,
  BookOpen,
  Compass,
  GraduationCap,
  Search,
  Moon,
  Sun,
  X
} from 'lucide-react';

interface SidebarProps {
  currentSection: string;
  onSelectSection: (section: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  reviewedCount: number;
  totalQuestions: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  darkMode,
  onToggleDarkMode,
  onOpenSearch,
  isOpenMobile,
  onCloseMobile,
  reviewedCount,
  totalQuestions,
}) => {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'past-paper',
      label: 'Past Paper',
      icon: FileText,
      badge: 'Nov 2025',
    },
    {
      id: 'answers',
      label: 'Question Answers',
      icon: CheckCircle2,
      badge: `${totalQuestions}`,
    },
    {
      id: 'lectures',
      label: 'Lecture Notes',
      icon: BookOpen,
      badge: '6 Lecs',
    },
    {
      id: 'topics',
      label: 'Topic Explorer',
      icon: Compass,
      badge: '12 Topics',
    },
    {
      id: 'revision',
      label: 'Exam Revision',
      icon: GraduationCap,
      badge: 'High Priority',
    },
  ];

  const completionPct = Math.round((reviewedCount / totalQuestions) * 100);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 lg:w-72 flex flex-col border-r transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        } ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Brand / Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold shrink-0">
                Σ
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                StudySphere
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                CM3321
              </span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
              University Portal
            </p>
          </div>
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg lg:hidden hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Search Shortcut Button */}
        <div className="px-4 pt-4">
          <button
            onClick={onOpenSearch}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs sm:text-sm transition-all ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:border-slate-300'
            }`}
          >
            <span className="flex items-center space-x-2 truncate">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate">Quick search...</span>
            </span>
            <kbd
              className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-200/80 text-slate-500'
              }`}
            >
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
            Main Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  onSelectSection(item.id);
                  onCloseMobile();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-colors text-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 font-semibold'
                    : darkMode
                    ? 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tight ${
                      isActive
                        ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200'
                        : darkMode
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Next Exam Widget in Sidebar */}
        <div className="p-4 mt-auto">
          <div
            className={`rounded-xl p-4 border shadow-xs transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-900'
            }`}
          >
            <p className={`text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Next Exam</p>
            <p className={`font-bold text-sm mb-3 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Logic & Cognitive (CM3321)</p>
            <div className="flex items-center gap-2 mb-2">
              <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${completionPct}%` }}
                />
              </div>
              <span className={`text-[10px] font-mono ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{completionPct}%</span>
            </div>
            <div className={`flex items-center justify-between text-[11px] pt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span>{reviewedCount}/{totalQuestions} Mastered</span>
              <button
                onClick={() => onSelectSection('past-paper')}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Review
              </button>
            </div>
          </div>
        </div>

        {/* Footer with Dark Mode & Faculty Tag */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium">Uni of Moratuwa</span>
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
      </aside>
    </>
  );
};
