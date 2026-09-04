import React from 'react';
import {
  FileText,
  CheckCircle2,
  BookOpen,
  Compass,
  GraduationCap,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Award,
  BarChart3,
  BookmarkCheck,
  AlertCircle
} from 'lucide-react';
import { Question, Lecture, Topic, ReviewState } from '../types';

interface DashboardViewProps {
  questions: Question[];
  lectures: Lecture[];
  topics: Topic[];
  reviewStatus: Record<string, ReviewState>;
  onNavigate: (section: string, filterOrId?: string) => void;
  darkMode: boolean;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  questions,
  lectures,
  topics,
  reviewStatus,
  onNavigate,
  darkMode,
}) => {
  const totalQuestions = questions.length;
  const reviewedCount = Object.values(reviewStatus).filter((s) => s === 'reviewed').length;
  const needsPracticeCount = Object.values(reviewStatus).filter((s) => s === 'needs_practice').length;
  const unreviewedCount = totalQuestions - reviewedCount - needsPracticeCount;
  const progressPercent = Math.round((reviewedCount / totalQuestions) * 100);

  // Group questions by section/question number
  const q1Count = questions.filter((q) => q.mainQuestion === 1).length;
  const q2Count = questions.filter((q) => q.mainQuestion === 2).length;
  const q3Count = questions.filter((q) => q.mainQuestion === 3).length;
  const q4Count = questions.filter((q) => q.mainQuestion === 4).length;

  return (
    <div className="space-y-6 pb-12">
      {/* Top Welcome Bar from Clean Minimalism */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Batch 21 • Semester 6 Exam
            </span>
            <span className="text-[10px] font-semibold text-slate-400">
              Faculty of Information Technology • University of Moratuwa
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            CM 3321 Revision Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Welcome back. 100 Marks • 4 Questions • Complete Dual-Level Model Solutions & Lecture Notes
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('past-paper')}
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Past Paper</span>
          </button>
          <button
            onClick={() => onNavigate('answers')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 shadow-xs transition-all flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Start Revision</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Cards from Clean Minimalism */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 shrink-0">
        {/* Total Questions */}
        <div
          onClick={() => onNavigate('past-paper')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all hover:border-slate-300 dark:hover:border-slate-700 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Total Questions
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {totalQuestions}
            </span>
            <span className="text-xs text-green-600 font-medium">
              Past Paper 2025
            </span>
          </div>
        </div>

        {/* Lectures */}
        <div
          onClick={() => onNavigate('lectures')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all hover:border-slate-300 dark:hover:border-slate-700 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Lectures
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {lectures.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Core Modules
            </span>
          </div>
        </div>

        {/* Answered */}
        <div
          onClick={() => onNavigate('answers')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all hover:border-slate-300 dark:hover:border-slate-700 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Answered
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {reviewedCount}/{totalQuestions}
            </span>
            <span className="text-xs text-blue-600 font-medium">
              {progressPercent}% Complete
            </span>
          </div>
        </div>

        {/* Topics Covered */}
        <div
          onClick={() => onNavigate('topics')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all hover:border-slate-300 dark:hover:border-slate-700 ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Topics Covered
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {topics.length}
            </span>
            <span className="text-xs text-orange-600 font-medium">
              {needsPracticeCount > 0 ? `${needsPracticeCount} Needs Practice` : '12 Units'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content: 2-Column Past Paper Analysis + 1-Column Focus & Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Past Paper Analysis (2 Cols) */}
        <div
          className={`lg:col-span-2 rounded-2xl border flex flex-col ${
            darkMode
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 dark:text-white">
              Past Paper Analysis
            </h3>
            <div className="flex gap-2">
              <span
                onClick={() => onNavigate('past-paper')}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Filter by Lecture
              </span>
              <span
                onClick={() => onNavigate('past-paper')}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold rounded-full cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Difficulty
              </span>
            </div>
          </div>

          <div className="p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
            {questions.slice(0, 5).map((q) => (
              <div
                key={q.id}
                onClick={() => onNavigate('answers', q.id)}
                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {q.numberLabel}
                    </span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {q.marks} Marks
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        q.difficulty === 'Easy'
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                          : q.difficulty === 'Medium'
                          ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
                          : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 underline">
                      View Solution
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2">
                  {q.questionText}
                </h4>
                <p className="text-[11px] text-slate-500">
                  Related: <span className="italic text-slate-700 dark:text-slate-300">{q.lectureIds.join(', ').replace('lec-01', 'Lec 01 Propositional Logic').replace('lec-02', 'Lec 02 Predicate Logic').replace('lec-03', 'Lec 03 Prolog').replace('lec-04', 'Lec 04 SWI Prolog').replace('lec-05', 'Lec 05 Cognitive Systems').replace('lec-06', 'Lec 06 Expert Systems')}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center">
            <button
              onClick={() => onNavigate('past-paper')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All {totalQuestions} Examination Questions →
            </button>
          </div>
        </div>

        {/* Right Column: Focus Topics & Callout */}
        <div className="flex flex-col gap-6">
          {/* Focus Topics Card from Clean Minimalism */}
          <div
            className={`rounded-2xl border p-5 ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Focus Topics</span>
            </h3>
            <div className="space-y-3">
              <div
                onClick={() => onNavigate('topics', 'prop-logic')}
                className="flex items-center justify-between cursor-pointer hover:opacity-80"
              >
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Propositional Logic & Tautologies
                </span>
                <span className="text-[10px] bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400 px-2 py-0.5 rounded-full border border-green-100 dark:border-green-900 font-bold">
                  High Impact
                </span>
              </div>
              <div
                onClick={() => onNavigate('topics', 'fol')}
                className="flex items-center justify-between cursor-pointer hover:opacity-80"
              >
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Predicate Logic Resolution
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-100 dark:border-blue-900 font-bold">
                  Featured Q1
                </span>
              </div>
              <div
                onClick={() => onNavigate('topics', 'cut-operator')}
                className="flex items-center justify-between cursor-pointer hover:opacity-80"
              >
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Prolog Cuts & Negation Failure
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-100 dark:border-blue-900 font-bold">
                  Featured Q2
                </span>
              </div>
              <div
                onClick={() => onNavigate('topics', 'symbolic-ai')}
                className="flex items-center justify-between cursor-pointer hover:opacity-80"
              >
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Cognitive Architectures
                </span>
                <span className="text-[10px] bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400 px-2 py-0.5 rounded-full border border-purple-100 dark:border-purple-900 font-bold">
                  Featured Q3
                </span>
              </div>
              <div
                onClick={() => onNavigate('topics', 'expert-systems')}
                className="flex items-center justify-between cursor-pointer hover:opacity-80"
              >
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Expert System Troubleshooting
                </span>
                <span className="text-[10px] bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-100 dark:border-amber-900 font-bold">
                  Featured Q4
                </span>
              </div>
            </div>

            {/* Weekly/Topic Mastery Visual Histogram */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-3">
                Exam Marks Distribution
              </p>
              <div className="flex justify-between items-end h-16 gap-2">
                <div title="Q1: Predicate Logic (25 Marks)" className="w-full bg-blue-600 rounded-t h-[100%]" />
                <div title="Q2: Prolog (25 Marks)" className="w-full bg-blue-500 rounded-t h-[100%]" />
                <div title="Q3: Cognitive Systems (25 Marks)" className="w-full bg-blue-400 rounded-t h-[100%]" />
                <div title="Q4: Expert Systems (25 Marks)" className="w-full bg-blue-300 rounded-t h-[100%]" />
                <div title="Reviewed Ratio" className="w-full bg-slate-200 dark:bg-slate-700 rounded-t" style={{ height: `${Math.max(15, progressPercent)}%` }} />
              </div>
              <div className="flex justify-between text-[9px] text-slate-400 mt-2 font-mono">
                <span>Q1 (25m)</span>
                <span>Q2 (25m)</span>
                <span>Q3 (25m)</span>
                <span>Q4 (25m)</span>
                <span>Done</span>
              </div>
            </div>
          </div>

          {/* Clean Minimalism Callout Card */}
          <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-lg shadow-blue-200/50 dark:shadow-none relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold mb-1 text-base">Ready to test yourself?</h4>
              <p className="text-blue-100 text-xs mb-4 leading-relaxed">
                Review model answers for the 2025 semester paper or practice Prolog and FOL questions.
              </p>
              <button
                onClick={() => onNavigate('answers')}
                className="w-full bg-white text-blue-600 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors cursor-pointer"
              >
                Practice Now
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500 rounded-full opacity-30 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Study Progress Section & Past Paper Syllabus Weight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Study Progress Widget */}
        <div
          className={`p-6 rounded-2xl border lg:col-span-1 flex flex-col justify-between ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                <span>Study Progress</span>
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                {progressPercent}% Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-5">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Breakdown Badges */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="flex items-center space-x-2">
                  <BookmarkCheck className="w-4 h-4 text-emerald-500" />
                  <span className="font-medium">Reviewed & Mastered</span>
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {reviewedCount} questions
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="font-medium">Needs Practice</span>
                </span>
                <span className="font-bold text-amber-600 dark:text-amber-400">
                  {needsPracticeCount} questions
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">Unreviewed</span>
                </span>
                <span className="font-bold text-slate-600 dark:text-slate-400">
                  {unreviewedCount} questions
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-inherit">
            <button
              onClick={() => onNavigate('answers')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Continue Revision Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Exam Structure Breakdown (4 Questions x 25 Marks = 100 Marks) */}
        <div
          className={`p-6 rounded-2xl border lg:col-span-2 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Exam Paper Structure & Marks Allocation
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                November 2025 Paper • 4 Questions • 100 Total Marks (70% of module assessment)
              </p>
            </div>
            <div className="flex items-center text-xs text-slate-500 space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>3 Hours Allowed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Q1 */}
            <div
              onClick={() => onNavigate('answers', 'q1-a-i')}
              className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-blue-400 ${
                darkMode ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  QUESTION 01
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  25 Marks
                </span>
              </div>
              <h4 className="font-semibold text-sm mt-1 text-slate-800 dark:text-slate-100">
                Predicate Logic & Resolution
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                FOL representation, validity inference, Universal Instantiation vs Existential Generalization, Modus Ponens proof, CNF & resolution.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <span>{q1Count} sub-parts fully answered</span>
                <span className="flex items-center">
                  Review <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>

            {/* Q2 */}
            <div
              onClick={() => onNavigate('answers', 'q2-a-i')}
              className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-blue-400 ${
                darkMode ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  QUESTION 02
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  25 Marks
                </span>
              </div>
              <h4 className="font-semibold text-sm mt-1 text-slate-800 dark:text-slate-100">
                Prolog Programming & Control
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Manager/superior recursive formulations, cut operator (!) backtracking effects, negation-as-failure bugs, and list mystery interleaving.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <span>{q2Count} sub-parts fully answered</span>
                <span className="flex items-center">
                  Review <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>

            {/* Q3 */}
            <div
              onClick={() => onNavigate('answers', 'q3-a-i')}
              className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-blue-400 ${
                darkMode ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  QUESTION 03
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  25 Marks
                </span>
              </div>
              <h4 className="font-semibold text-sm mt-1 text-slate-800 dark:text-slate-100">
                Artificial Cognitive Systems
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Perception, memory, learning & problem solving in robotics, symbolic vs non-symbolic AI, symbol grounding challenge, and hybrid models.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <span>{q3Count} sub-parts fully answered</span>
                <span className="flex items-center">
                  Review <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>

            {/* Q4 */}
            <div
              onClick={() => onNavigate('answers', 'q4-a-i')}
              className={`p-4 rounded-xl border cursor-pointer transition-all hover:border-blue-400 ${
                darkMode ? 'bg-slate-800/60 border-slate-700/80' : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                  QUESTION 04
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  25 Marks
                </span>
              </div>
              <h4 className="font-semibold text-sm mt-1 text-slate-800 dark:text-slate-100">
                Expert Systems & Knowledge Eng.
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                Reasoning & explanation facilities, machine troubleshooting, true/false justifications, automated loan approval and legal compliance.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <span>{q4Count} sub-parts fully answered</span>
                <span className="flex items-center">
                  Review <ArrowRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Modules Navigation */}
      <div>
        <h3 className="font-bold text-base text-slate-900 dark:text-white mb-3">
          Quick Access Study Modules
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('past-paper')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Past Paper Explorer
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Read the exam question by question, filter by marks, topic, or lecture.
            </p>
          </div>

          <div
            onClick={() => onNavigate('answers')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Model Answers
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Dual-level answers: conceptual understanding vs concise exam solutions.
            </p>
          </div>

          <div
            onClick={() => onNavigate('lectures')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              Lecture Study Notes
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Simplified study notes, formal definitions, common traps & tables.
            </p>
          </div>

          <div
            onClick={() => onNavigate('revision')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">
              High Priority Revision
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              High-yield checklist, essential formulas, and theorem cheat-sheets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
