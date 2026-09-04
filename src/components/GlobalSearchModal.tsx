import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, FileText, Compass, GraduationCap, ChevronRight } from 'lucide-react';
import { Question, Lecture, Topic, FormulaItem, DefinitionItem } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  lectures: Lecture[];
  topics: Topic[];
  formulas: FormulaItem[];
  definitions: DefinitionItem[];
  onNavigateToQuestion: (id: string) => void;
  onNavigateToLecture: (id: string) => void;
  onNavigateToTopic: (id: string) => void;
  onNavigateToRevision: () => void;
  darkMode: boolean;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  questions,
  lectures,
  topics,
  formulas,
  definitions,
  onNavigateToQuestion,
  onNavigateToLecture,
  onNavigateToTopic,
  onNavigateToRevision,
  darkMode,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Toggle handled by caller
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedQuestions = questions.filter(
      (item) =>
        item.numberLabel.toLowerCase().includes(q) ||
        item.questionText.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q)) ||
        item.examAnswer.toLowerCase().includes(q) ||
        item.learningExplanation.toLowerCase().includes(q)
    );

    const matchedLectures = lectures.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.overview.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q)) ||
        item.keyConcepts.some(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.whatIsIt.toLowerCase().includes(q) ||
            c.formalDefinition.toLowerCase().includes(q)
        )
    );

    const matchedTopics = topics.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.detailedNotes.toLowerCase().includes(q) ||
        item.keyFormulasOrRules.some((r) => r.toLowerCase().includes(q))
    );

    const matchedDefinitions = definitions.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.context.toLowerCase().includes(q)
    );

    const matchedFormulas = formulas.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.formula.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );

    const totalCount =
      matchedQuestions.length +
      matchedLectures.length +
      matchedTopics.length +
      matchedDefinitions.length +
      matchedFormulas.length;

    return {
      questions: matchedQuestions.slice(0, 5),
      lectures: matchedLectures.slice(0, 4),
      topics: matchedTopics.slice(0, 4),
      definitions: matchedDefinitions.slice(0, 3),
      formulas: matchedFormulas.slice(0, 3),
      totalCount,
    };
  }, [query, questions, lectures, topics, definitions, formulas]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-slate-900/60 backdrop-blur-sm">
      <div
        className={`w-full max-w-2xl rounded-2xl shadow-2xl border overflow-hidden transition-all ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-inherit flex items-center space-x-3">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords, e.g. 'implication', 'cut', 'tautology', 'Q1'..."
            className="w-full bg-transparent text-base focus:outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded border border-inherit text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {!query && (
            <div className="text-center py-8">
              <Compass className="w-10 h-10 text-slate-400 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Search the entire CM 3321 study collection
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                {['implication', 'tautology', 'contrapositive', 'superior', 'cut', 'interleaving', 'monkey', 'neuro-symbolic', 'expert systems'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setQuery(chip)}
                    className="text-xs px-2.5 py-1 rounded-full border border-inherit text-slate-500 hover:text-blue-600 hover:border-blue-400 transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults && searchResults.totalCount === 0 && (
            <div className="text-center py-8 text-sm text-slate-500">
              No results found for "{query}". Try a different keyword like &apos;predicate&apos;, &apos;recursion&apos;, or &apos;chaining&apos;.
            </div>
          )}

          {searchResults && searchResults.totalCount > 0 && (
            <>
              {/* Questions */}
              {searchResults.questions.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Past Paper Questions ({searchResults.questions.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.questions.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          onNavigateToQuestion(q.id);
                          onClose();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-sm flex items-center justify-between border transition-colors ${
                          darkMode
                            ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                            : 'bg-slate-50 border-slate-200 hover:bg-blue-50/50 hover:border-blue-200'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs text-blue-600 dark:text-blue-400">
                            {q.numberLabel} • {q.marks} Marks
                          </div>
                          <div className="text-xs font-medium line-clamp-1 mt-0.5">
                            {q.questionText}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Lectures */}
              {searchResults.lectures.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-500 mb-2 flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Lecture Notes ({searchResults.lectures.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.lectures.map((lec) => (
                      <button
                        key={lec.id}
                        onClick={() => {
                          onNavigateToLecture(lec.id);
                          onClose();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-sm flex items-center justify-between border transition-colors ${
                          darkMode
                            ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                            : 'bg-slate-50 border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-200'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs text-emerald-600 dark:text-emerald-400">
                            {lec.code}: {lec.title}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {lec.subtitle}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics */}
              {searchResults.topics.length > 0 && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-2 flex items-center space-x-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Topic Explorer ({searchResults.topics.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.topics.map((top) => (
                      <button
                        key={top.id}
                        onClick={() => {
                          onNavigateToTopic(top.id);
                          onClose();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-sm flex items-center justify-between border transition-colors ${
                          darkMode
                            ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                            : 'bg-slate-50 border-slate-200 hover:bg-indigo-50/50 hover:border-indigo-200'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-xs text-indigo-600 dark:text-indigo-400">
                            {top.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {top.summary}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Formulas & Definitions */}
              {(searchResults.definitions.length > 0 || searchResults.formulas.length > 0) && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2 flex items-center space-x-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Revision Definitions & Formulas</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.definitions.map((def, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToRevision();
                          onClose();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-sm border transition-colors ${
                          darkMode
                            ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                            : 'bg-slate-50 border-slate-200 hover:bg-amber-50/50'
                        }`}
                      >
                        <div className="font-semibold text-xs text-amber-600 dark:text-amber-400">
                          {def.term} ({def.lecture})
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {def.definition}
                        </div>
                      </button>
                    ))}
                    {searchResults.formulas.map((form, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onNavigateToRevision();
                          onClose();
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-sm border transition-colors ${
                          darkMode
                            ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                            : 'bg-slate-50 border-slate-200 hover:bg-amber-50/50'
                        }`}
                      >
                        <div className="font-semibold text-xs text-amber-600 dark:text-amber-400">
                          {form.name}
                        </div>
                        <code className="text-xs font-mono text-blue-600 dark:text-blue-300 block mt-0.5">
                          {form.formula}
                        </code>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-inherit text-[11px] text-slate-500 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
          <span>Press ESC to close</span>
          <span>CM 3321 Logic & Cognitive Systems</span>
        </div>
      </div>
    </div>
  );
};
