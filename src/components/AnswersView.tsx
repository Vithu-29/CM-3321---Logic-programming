import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Layers,
  Code,
  Table as TableIcon,
  Check,
  ChevronRight,
  ListOrdered,
  FileCheck,
  HelpCircle,
  Compass
} from 'lucide-react';
import { Question, ReviewState } from '../types';

interface AnswersViewProps {
  questions: Question[];
  selectedQuestionId: string | null;
  onSelectQuestion: (id: string) => void;
  reviewStatus: Record<string, ReviewState>;
  onToggleReview: (id: string, state: ReviewState) => void;
  onNavigateToLecture: (lectureId: string) => void;
  onNavigateToTopic: (topicName: string) => void;
  darkMode: boolean;
}

export const AnswersView: React.FC<AnswersViewProps> = ({
  questions,
  selectedQuestionId,
  onSelectQuestion,
  reviewStatus,
  onToggleReview,
  onNavigateToLecture,
  onNavigateToTopic,
  darkMode,
}) => {
  // Determine current active question
  const currentQuestion =
    questions.find((q) => q.id === selectedQuestionId) || questions[0];
  const currentIndex = questions.findIndex((q) => q.id === currentQuestion.id);

  const [activeTab, setActiveTab] = useState<'both' | 'exam' | 'learning'>('both');

  const prevQuestion = currentIndex > 0 ? questions[currentIndex - 1] : null;
  const nextQuestion =
    currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;

  const currentStatus = reviewStatus[currentQuestion.id] || 'unreviewed';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16">
      {/* Left Navigation List (Question Selector) */}
      <div className="lg:col-span-4 space-y-3">
        <div
          className={`p-4 rounded-2xl border transition-colors ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm tracking-tight flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Questions Directory</span>
            </h3>
            <span className="text-xs text-slate-500">
              {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="max-h-[70vh] overflow-y-auto space-y-1.5 pr-1">
            {questions.map((q, idx) => {
              const isSelected = q.id === currentQuestion.id;
              const status = reviewStatus[q.id] || 'unreviewed';

              return (
                <button
                  key={q.id}
                  id={`select-q-${q.id}`}
                  onClick={() => onSelectQuestion(q.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white font-semibold shadow-xs'
                      : darkMode
                      ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="truncate">
                      <div className="truncate font-medium">{q.numberLabel}</div>
                      <div
                        className={`text-[10px] truncate ${
                          isSelected
                            ? 'text-blue-100'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {q.marks} Marks • {q.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 shrink-0 ml-2">
                    {status === 'reviewed' && (
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-white' : 'text-emerald-500'
                        }`}
                      />
                    )}
                    {status === 'needs_practice' && (
                      <AlertCircle
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-white' : 'text-amber-500'
                        }`}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Detailed Answer View */}
      <div className="lg:col-span-8 space-y-6">
        {/* Question Header Card */}
        <div
          className={`p-6 rounded-2xl border transition-colors ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Badges & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-inherit">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-600 text-white">
                {currentQuestion.numberLabel}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-lg font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                {currentQuestion.marks} Marks
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                  currentQuestion.difficulty === 'Easy'
                    ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                    : currentQuestion.difficulty === 'Medium'
                    ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                    : 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300'
                }`}
              >
                {currentQuestion.difficulty}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                  darkMode
                    ? 'bg-slate-800 text-slate-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {currentQuestion.category}
              </span>
            </div>

            {/* Review Status Toggles */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  onToggleReview(
                    currentQuestion.id,
                    currentStatus === 'reviewed' ? 'unreviewed' : 'reviewed'
                  )
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentStatus === 'reviewed'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{currentStatus === 'reviewed' ? 'Reviewed' : 'Mark Reviewed'}</span>
              </button>

              <button
                onClick={() =>
                  onToggleReview(
                    currentQuestion.id,
                    currentStatus === 'needs_practice'
                      ? 'unreviewed'
                      : 'needs_practice'
                  )
                }
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentStatus === 'needs_practice'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{currentStatus === 'needs_practice' ? 'Needs Practice' : 'Flag Practice'}</span>
              </button>
            </div>
          </div>

          {/* Exact Question Text */}
          <div className="mt-4">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-600 dark:text-slate-400 mb-1">
              Exact Examination Question:
            </div>
            <div className="text-base font-semibold text-slate-900 dark:text-white whitespace-pre-line leading-relaxed">
              {currentQuestion.questionText}
            </div>
          </div>

          {/* Academic Grounding / Coverage Note */}
          {currentQuestion.coverageNote && (
            <div className="mt-4 p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-blue-900 dark:text-blue-200">
                  Academic Grounding:
                </span>{' '}
                <span className="text-blue-800 dark:text-blue-300">
                  {currentQuestion.coverageNote}
                </span>
              </div>
            </div>
          )}

          {/* Topics & Lecture Reference Bar */}
          <div className="mt-4 pt-3 border-t border-inherit flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                Topics:
              </span>
              {currentQuestion.topics.map((t) => (
                <button
                  key={t}
                  onClick={() => onNavigateToTopic(t)}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-medium transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-600 dark:text-slate-400">Lecture:</span>
              <button
                onClick={() =>
                  onNavigateToLecture(currentQuestion.lectureReference.lectureId)
                }
                className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {currentQuestion.lectureReference.lectureTitle} ({currentQuestion.lectureReference.slides})
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode Selector Tabs (Dual Level Answers) */}
        <div className="flex items-center space-x-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-fit text-xs font-semibold">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'both'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Full Comprehensive View
          </button>
          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'exam'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Exam Answer (Concise)
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'learning'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Learning Explanation
          </button>
        </div>

        {/* LEVEL B: EXAM-READY ANSWER (Required by Section 12) */}
        {(activeTab === 'both' || activeTab === 'exam') && (
          <div
            className={`p-6 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-inherit">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  B
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Exam-Ready Model Answer
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Concise, high-scoring university answer suitable to write in the exam script
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
                {currentQuestion.marks} Marks Allocation
              </span>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {currentQuestion.examAnswer}
            </div>

            {/* If there is a code snippet */}
            {currentQuestion.codeSnippet && (
              <div className="mt-4">
                <div className="text-xs font-semibold text-slate-500 mb-1 flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5 text-blue-500" />
                  <span>Prolog Code Formulation:</span>
                </div>
                <pre className="font-mono text-xs bg-slate-900 text-blue-200 p-3.5 rounded-xl overflow-x-auto border border-slate-800">
                  {currentQuestion.codeSnippet}
                </pre>
              </div>
            )}

            {/* Truth Table or Formal Diagram */}
            {currentQuestion.truthTableOrDiagram && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center space-x-1.5">
                  <TableIcon className="w-3.5 h-3.5 text-blue-500" />
                  <span>{currentQuestion.truthTableOrDiagram.caption || 'Formal Truth Table Verification'}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-center border-collapse">
                    <thead>
                      <tr className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold">
                        {currentQuestion.truthTableOrDiagram.headers.map((h, i) => (
                          <th key={i} className="p-2 border border-slate-300 dark:border-slate-600 font-mono">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentQuestion.truthTableOrDiagram.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={
                            rIdx % 2 === 0
                              ? 'bg-white dark:bg-slate-800'
                              : 'bg-slate-50 dark:bg-slate-800/50'
                          }
                        >
                          {row.map((val, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-2 border border-slate-300 dark:border-slate-600 font-mono ${
                                val === 'T'
                                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                                  : val === 'F'
                                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                                  : 'text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP-BY-STEP SOLUTION */}
        {currentQuestion.stepByStepSolution && currentQuestion.stepByStepSolution.length > 0 && (
          <div
            className={`p-6 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center space-x-2 pb-3 mb-4 border-b border-inherit">
              <ListOrdered className="w-4 h-4 text-blue-500" />
              <span>Step-by-Step Solution & Formal Working</span>
            </h3>

            <div className="space-y-3">
              {currentQuestion.stepByStepSolution.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEVEL A: LEARNING EXPLANATION (Required by Section 12) */}
        {(activeTab === 'both' || activeTab === 'learning') && (
          <div
            className={`p-6 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center space-x-2 pb-3 mb-4 border-b border-inherit">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Learning Explanation (Conceptual Deep Dive)
                </h3>
                <p className="text-[11px] text-slate-500">
                  Explains why this is the correct answer using concepts, theorems, and rules from lecture materials
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {currentQuestion.learningExplanation}
            </div>

            {/* Lecture Reference Box */}
            <div className="mt-5 p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="font-bold text-emerald-800 dark:text-emerald-200">
                  {currentQuestion.lectureReference.lectureTitle}
                </div>
                <div className="text-emerald-700 dark:text-emerald-300 mt-0.5">
                  Concept: <span className="font-semibold">{currentQuestion.lectureReference.concept}</span> • Slides:{' '}
                  {currentQuestion.lectureReference.slides}
                </div>
                {currentQuestion.lectureReference.notesExcerpt && (
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 italic">
                    "{currentQuestion.lectureReference.notesExcerpt}"
                  </div>
                )}
              </div>
              <button
                onClick={() =>
                  onNavigateToLecture(currentQuestion.lectureReference.lectureId)
                }
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shrink-0 transition-colors shadow-xs"
              >
                Read Lecture Notes
              </button>
            </div>
          </div>
        )}

        {/* FINAL ANSWER CALLOUT BOX */}
        <div
          className={`p-5 rounded-2xl border transition-colors ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FileCheck className="w-4 h-4" />
            <span>Final Answer Summary</span>
          </div>
          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
            {currentQuestion.finalAnswer}
          </div>
        </div>

        {/* Previous / Next Question Buttons */}
        <div className="flex items-center justify-between pt-2">
          {prevQuestion ? (
            <button
              onClick={() => onSelectQuestion(prevQuestion.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{prevQuestion.numberLabel}</span>
            </button>
          ) : (
            <div />
          )}

          {nextQuestion ? (
            <button
              onClick={() => onSelectQuestion(nextQuestion.id)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <span>{nextQuestion.numberLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
