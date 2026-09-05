import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileText,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Bookmark,
  ExternalLink,
  Info
} from 'lucide-react';
import { Lecture } from '../types';

interface LectureNotesViewProps {
  lectures: Lecture[];
  selectedLectureId: string | null;
  onSelectLecture: (id: string) => void;
  onSelectQuestion: (questionId: string) => void;
  darkMode: boolean;
}

export const LectureNotesView: React.FC<LectureNotesViewProps> = ({
  lectures,
  selectedLectureId,
  onSelectLecture,
  onSelectQuestion,
  darkMode,
}) => {
  const currentLecture =
    lectures.find((l) => l.id === selectedLectureId) || lectures[0];

  const [expandedConceptIdx, setExpandedConceptIdx] = useState<number | null>(0);

  const toggleConcept = (idx: number) => {
    setExpandedConceptIdx(expandedConceptIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Lecture Horizontal Tabs / Selector */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {lectures.map((lec) => {
          const isSelected = lec.id === currentLecture.id;
          return (
            <button
              key={lec.id}
              onClick={() => {
                onSelectLecture(lec.id);
                setExpandedConceptIdx(0);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border shrink-0 ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{lec.code}: {lec.title.split('–')[1] || lec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Lecture Banner Card */}
      <div
        className={`p-6 sm:p-7 rounded-2xl border transition-colors ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-inherit">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                {currentLecture.code}
              </span>
              <span className="text-xs text-slate-500">
                Instructor: {currentLecture.instructor}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold mt-1 tracking-tight">
              {currentLecture.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {currentLecture.subtitle} • {currentLecture.slideDeck}
            </p>
          </div>

          {/* Direct Link to Past Paper Questions */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-slate-500">
              Exam Coverage:
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
              {(currentLecture.examFocusQuestions || []).length} Exam Questions
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentLecture.overview}
          </p>
        </div>

        {/* Learning Objectives Chips */}
        <div className="mt-4 pt-3 border-t border-inherit">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Core Learning Objectives:
          </div>
          <div className="flex flex-wrap gap-2">
            {(currentLecture.learningObjectives || []).map((obj, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                ✓ {obj}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Concepts Breakdown (Section 6 Deep Structured Study Notes) */}
      <div className="space-y-4">
        <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-emerald-500" />
          <span>Detailed Concept Study Units ({(currentLecture.keyConcepts || []).length})</span>
        </h3>

        {(currentLecture.keyConcepts || []).map((concept, idx) => {
          const isExpanded = expandedConceptIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              {/* Concept Accordion Header */}
              <button
                onClick={() => toggleConcept(idx)}
                className="w-full text-left p-5 flex items-center justify-between transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {concept.name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {concept.whatIsIt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 hidden sm:inline">
                    {isExpanded ? 'Collapse' : 'Expand Unit'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Expanded Body */}
              {isExpanded && (
                <div className="p-5 sm:p-6 border-t border-inherit space-y-5 bg-slate-50/40 dark:bg-slate-900/40">
                  {/* What is it? */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center space-x-1.5 mb-1">
                      <Info className="w-3.5 h-3.5" />
                      <span>What Is It? (In Simple Language)</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {concept.whatIsIt}
                    </div>
                  </div>

                  {/* Formal Definition */}
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-1">
                      Formal Academic Definition
                    </div>
                    <div className="text-xs sm:text-sm text-blue-950 dark:text-blue-200 font-medium leading-relaxed">
                      {concept.formalDefinition}
                    </div>
                  </div>

                  {/* How does it work? */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                      How Does It Work? (Step-by-Step)
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-inherit">
                      {Array.isArray(concept.howItWorks) ? (
                        <div className="space-y-1.5 font-mono">
                          {concept.howItWorks.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2">
                              <span className="text-blue-500 font-bold shrink-0">{sIdx + 1}.</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="font-mono">{concept.howItWorks}</div>
                      )}
                    </div>
                  </div>

                  {/* Visual Diagram / Truth Table if present */}
                  {concept.visual && (
                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-inherit">
                      {concept.visual.title && (
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                          {concept.visual.title}
                        </div>
                      )}
                      {concept.visual.type === 'truth-table' && concept.visual.data && (
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-xs text-center border-collapse">
                            <thead>
                              <tr className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100">
                                {concept.visual.data.headers?.map((h: string, hi: number) => (
                                  <th key={hi} className="p-2 border border-slate-300 dark:border-slate-600 font-bold font-mono">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {concept.visual.data.rows?.map((row: string[], ri: number) => (
                                <tr key={ri} className={ri % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-800/50'}>
                                  {row.map((cell: string, ci: number) => (
                                    <td key={ci} className={`p-2 border border-slate-300 dark:border-slate-600 font-mono text-slate-800 dark:text-slate-200 ${cell === 'T' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : cell === 'F' ? 'text-rose-700 dark:text-rose-400 font-bold' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {concept.visual.type === 'rules-list' && Array.isArray(concept.visual.data) && (
                        <div className="space-y-1 font-mono text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg border border-blue-200 dark:border-blue-900">
                          {concept.visual.data.map((rule: string, rIdx: number) => (
                            <div key={rIdx}>• {rule}</div>
                          ))}
                        </div>
                      )}
                      {concept.visual.type === 'formula-box' && (
                        <div className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border border-amber-200 dark:border-amber-900 font-semibold">
                          {typeof concept.visual.data === 'string' ? concept.visual.data : JSON.stringify(concept.visual.data)}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Example */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Worked Example</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-emerald-50/60 dark:bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 whitespace-pre-line leading-relaxed">
                      {concept.example}
                    </div>
                  </div>

                  {/* Important to Remember & Common Mistake Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Important to Remember */}
                    <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center space-x-1.5 mb-1">
                        <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>Important to Remember</span>
                      </div>
                      <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed mt-1">
                        {concept.importantToRemember}
                      </div>
                    </div>

                    {/* Common Exam Mistake */}
                    <div className="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
                      <div className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center space-x-1.5 mb-1">
                        <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span>Common Exam Mistake</span>
                      </div>
                      <div className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed mt-1">
                        {concept.commonMistake}
                      </div>
                    </div>
                  </div>

                  {/* Past Paper Connection */}
                  {concept.examConnectionQuestionIds && concept.examConnectionQuestionIds.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-inherit flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Exam Tested In:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {concept.examConnectionQuestionIds.map((qId) => (
                            <button
                              key={qId}
                              onClick={() => onSelectQuestion(qId)}
                              className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold hover:underline cursor-pointer"
                            >
                              {qId.toUpperCase().replace('-', ' ')}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Common Exam Traps & Important Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Important Points */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center space-x-2 mb-3">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Takeaways & Axioms</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {(currentLecture.importantPoints || []).map((pt, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Exam Traps */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center space-x-2 mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Exam Traps in this Module</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {(currentLecture.keyConcepts || []).map((c, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-rose-500 font-bold shrink-0">•</span>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">{c.name}: </span>
                  <span className="text-rose-700 dark:text-rose-300">{c.commonMistake}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Exam Focus: Questions from past paper for this lecture */}
      <div
        className={`p-6 rounded-2xl border ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Exam Focus: Questions Tested from {currentLecture.code}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Every past paper question directly mapped to this lecture's slides
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(currentLecture.examFocusQuestions || []).map((qId) => (
            <button
              key={qId}
              onClick={() => onSelectQuestion(qId)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-colors ${
                darkMode
                  ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-blue-500'
                  : 'bg-slate-50 border-slate-200 hover:bg-blue-50/60 hover:border-blue-300'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  {qId.toUpperCase().replace('-', ' ')}
                </span>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Click to view model answer
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
