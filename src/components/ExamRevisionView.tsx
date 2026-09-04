import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Search,
  CheckSquare,
  Square,
  Sparkles,
  ArrowRight,
  ListOrdered,
  HelpCircle,
  BarChart2
} from 'lucide-react';
import {
  HighPriorityTopic,
  DefinitionItem,
  FormulaItem,
  CommonPatternItem,
  Topic,
  Question
} from '../types';

interface ExamRevisionViewProps {
  highPriorityTopics: HighPriorityTopic[];
  definitions: DefinitionItem[];
  formulas: FormulaItem[];
  commonPatterns: CommonPatternItem[];
  allTopics: Topic[];
  allQuestions: Question[];
  onSelectQuestion: (questionId: string) => void;
  onNavigateToTopic: (topicId: string) => void;
  darkMode: boolean;
}

export const ExamRevisionView: React.FC<ExamRevisionViewProps> = ({
  highPriorityTopics,
  definitions,
  formulas,
  commonPatterns,
  allTopics,
  allQuestions,
  onSelectQuestion,
  onNavigateToTopic,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<
    'priority' | 'definitions' | 'formulas' | 'patterns' | 'checklist'
  >('priority');

  const [definitionSearch, setDefinitionSearch] = useState('');
  const [formulaSearch, setFormulaSearch] = useState('');

  // Interactive Checklist State (Stored in component state and localStorage)
  const [checkedTopics, setCheckedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('cm3321_revision_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistTopic = (id: string) => {
    setCheckedTopics((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('cm3321_revision_checklist', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const totalChecklistItems = allTopics.length;
  const checkedCount = Object.values(checkedTopics).filter(Boolean).length;
  const checklistPct = Math.round((checkedCount / totalChecklistItems) * 100);

  // Filter definitions
  const filteredDefinitions = definitions.filter(
    (d) =>
      d.term.toLowerCase().includes(definitionSearch.toLowerCase()) ||
      d.definition.toLowerCase().includes(definitionSearch.toLowerCase()) ||
      d.context.toLowerCase().includes(definitionSearch.toLowerCase())
  );

  // Filter formulas
  const filteredFormulas = formulas.filter(
    (f) =>
      f.name.toLowerCase().includes(formulaSearch.toLowerCase()) ||
      f.formula.toLowerCase().includes(formulaSearch.toLowerCase()) ||
      f.description.toLowerCase().includes(formulaSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-16">
      {/* Revision Header Banner */}
      <div
        className={`p-6 sm:p-7 rounded-2xl border transition-colors ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">
                Exam Preparation Toolkit
              </span>
              <span className="text-xs text-slate-500">
                CM 3321 Revision Central
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-1 tracking-tight">
              High-Yield Revision & Exam Readiness
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Curated definitions, formula cheat-sheets, common question patterns, and an interactive revision checklist.
            </p>
          </div>

          {/* Quick Readiness Tracker */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-inherit shrink-0 min-w-[200px]">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-600 dark:text-slate-300">
                Revision Checklist
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                {checklistPct}%
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistPct}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 mt-1.5">
              {checkedCount} of {totalChecklistItems} topics revised
            </div>
          </div>
        </div>

        {/* Sub-Tabs Navigation */}
        <div className="mt-6 pt-4 border-t border-inherit flex items-center space-x-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'priority', label: 'High Priority Topics' },
            { id: 'definitions', label: `Key Definitions (${definitions.length})` },
            { id: 'formulas', label: `Formulas & Laws (${formulas.length})` },
            { id: 'patterns', label: 'Common Exam Patterns' },
            { id: 'checklist', label: 'Topics I Should Revise' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: HIGH PRIORITY TOPICS */}
      {activeTab === 'priority' && (
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Ranked by Exam Marks Allocation & Frequency
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highPriorityTopics.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300">
                    Priority #{idx + 1}
                  </span>
                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    ~{item.totalMarks} Marks
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Why it is critical:
                  </span>{' '}
                  {item.whyImportant}
                </p>

                <div className="mt-4 pt-3 border-t border-inherit flex flex-wrap items-center justify-between gap-2">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Appears in: {item.questionIds.join(', ').toUpperCase()}
                  </div>
                  <button
                    onClick={() => onNavigateToTopic(item.topicId)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                  >
                    <span>Study Unit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: KEY DEFINITIONS */}
      {activeTab === 'definitions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Glossary of Core Academic Definitions
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={definitionSearch}
                onChange={(e) => setDefinitionSearch(e.target.value)}
                placeholder="Search definitions..."
                className={`w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDefinitions.map((def, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400">
                    {def.term}
                  </h4>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {def.lecture}
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed mt-2">
                  {def.definition}
                </p>
                <div className="mt-3 text-[11px] text-slate-500 border-t border-inherit pt-2">
                  Context: {def.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: IMPORTANT FORMULAS & LAWS */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Formulas, Logical Equivalences & Cut Rules
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={formulaSearch}
                onChange={(e) => setFormulaSearch(e.target.value)}
                placeholder="Search formulas..."
                className={`w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFormulas.map((form, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {form.name}
                  </h4>
                  <span className="text-xs text-slate-500">{form.lecture}</span>
                </div>
                <div className="font-mono text-sm bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-inherit text-blue-700 dark:text-blue-300 font-bold overflow-x-auto">
                  {form.formula}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {form.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: COMMON QUESTION PATTERNS */}
      {activeTab === 'patterns' && (
        <div className="space-y-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Standard Step-by-Step Question Pipelines in CM 3321
          </div>

          <div className="space-y-4">
            {commonPatterns.map((pat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-inherit mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {pat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {pat.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                    Tested in {pat.exampleExamQuestion}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  {pat.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-inherit text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: TOPICS I SHOULD REVISE (CHECKLIST) */}
      {activeTab === 'checklist' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl border bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-blue-900 dark:text-blue-200">
                Interactive Revision Progress Tracker
              </h4>
              <p className="text-xs text-blue-800 dark:text-blue-300 mt-0.5">
                Check off syllabus areas as you revise them. Your progress is saved locally.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                {checklistPct}%
              </span>
            </div>
          </div>

          <div className="space-y-2.5">
            {allTopics.map((top) => {
              const isDone = !!checkedTopics[top.id];

              return (
                <div
                  key={top.id}
                  onClick={() => toggleChecklistTopic(top.id)}
                  className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                    isDone
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                      : darkMode
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="text-emerald-600 dark:text-emerald-400 focus:outline-none"
                    >
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          isDone
                            ? 'text-emerald-900 dark:text-emerald-200 line-through opacity-80'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {top.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {top.category} • {top.examWeight} • {top.questionIds.length} Questions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigateToTopic(top.id);
                      }}
                      className="text-xs px-2.5 py-1 rounded-lg border border-inherit text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/40 font-medium"
                    >
                      View Notes
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
