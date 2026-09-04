import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { Question, ReviewState, QuestionCategory, Difficulty } from '../types';

interface PastPaperViewProps {
  questions: Question[];
  reviewStatus: Record<string, ReviewState>;
  onToggleReview: (id: string, state: ReviewState) => void;
  onSelectQuestionAnswer: (id: string) => void;
  onNavigateToLecture: (lectureId: string) => void;
  onNavigateToTopic: (topicName: string) => void;
  darkMode: boolean;
}

export const PastPaperView: React.FC<PastPaperViewProps> = ({
  questions,
  reviewStatus,
  onToggleReview,
  onSelectQuestionAnswer,
  onNavigateToLecture,
  onNavigateToTopic,
  darkMode,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedLecture, setSelectedLecture] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Filter logic
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Search
      const searchMatch =
        searchTerm === '' ||
        q.numberLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.questionText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.topics.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category
      const categoryMatch =
        selectedCategory === 'All' || q.category === selectedCategory;

      // Difficulty
      const difficultyMatch =
        selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;

      // Lecture
      const lectureMatch =
        selectedLecture === 'All' || q.lectureIds.includes(selectedLecture);

      // Review status
      const status = reviewStatus[q.id] || 'unreviewed';
      const statusMatch =
        selectedStatus === 'All' ||
        (selectedStatus === 'reviewed' && status === 'reviewed') ||
        (selectedStatus === 'needs_practice' && status === 'needs_practice') ||
        (selectedStatus === 'unreviewed' && status === 'unreviewed');

      return (
        searchMatch &&
        categoryMatch &&
        difficultyMatch &&
        lectureMatch &&
        statusMatch
      );
    });
  }, [
    questions,
    searchTerm,
    selectedCategory,
    selectedDifficulty,
    selectedLecture,
    selectedStatus,
    reviewStatus,
  ]);

  const categories: QuestionCategory[] = [
    'Logic',
    'Prolog',
    'Cognitive Systems',
    'Expert Systems',
  ];
  const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="space-y-6 pb-12">
      {/* Paper Header Card */}
      <div
        className={`p-6 rounded-2xl border transition-colors ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                Official Exam Paper
              </span>
              <span className="text-xs text-slate-500">
                November 2025 • CM 3321
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
              BSc IT / ITM Batch 21 Examination: 100 Marks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Time Allowed: 3 hours • Answer ALL 4 questions • Fully structured question breakdown
            </p>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-inherit text-center">
              <div className="font-bold text-slate-900 dark:text-white">
                4 Questions
              </div>
              <div className="text-slate-500 text-[11px]">25 Marks Each</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-inherit text-center">
              <div className="font-bold text-slate-900 dark:text-white">
                {questions.length} Parts
              </div>
              <div className="text-slate-500 text-[11px]">Total Sub-parts</div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 pt-5 border-t border-inherit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search question text..."
              className={`w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
              }`}
            />
          </div>

          {/* Category / Question Type */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`w-full px-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className={`w-full px-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="All">All Difficulties</option>
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>

          {/* Lecture Filter */}
          <div>
            <select
              value={selectedLecture}
              onChange={(e) => setSelectedLecture(e.target.value)}
              className={`w-full px-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="All">All Lectures</option>
              <option value="lec-01">Lecture 01 – Propositional Logic</option>
              <option value="lec-02">Lecture 02 – Predicate Logic</option>
              <option value="lec-03">Lecture 03 – Prolog Foundations</option>
              <option value="lec-04">Lecture 04 – SWI Prolog Control</option>
              <option value="lec-05">Lecture 05 – Cognitive Systems</option>
              <option value="lec-06">Lecture 06 – Expert Systems</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className={`w-full px-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="All">All Statuses</option>
              <option value="reviewed">Reviewed</option>
              <option value="needs_practice">Needs Practice</option>
              <option value="unreviewed">Unreviewed</option>
            </select>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
          <span>Showing {filteredQuestions.length} of {questions.length} questions</span>
          {(searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedLecture !== 'All' || selectedStatus !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSelectedLecture('All');
                setSelectedStatus('All');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div
            className={`p-12 text-center rounded-2xl border ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <Layers className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-40" />
            <h3 className="font-bold text-base text-slate-700 dark:text-slate-300">
              No matching questions found
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Adjust your search keywords or filter criteria above.
            </p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const currentStatus = reviewStatus[q.id] || 'unreviewed';

            return (
              <div
                key={q.id}
                id={`question-card-${q.id}`}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-xs'
                }`}
              >
                {/* Question Header: Number, Marks, Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold text-sm sm:text-base text-blue-600 dark:text-blue-400">
                      {q.numberLabel}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded uppercase font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      {q.marks} Marks
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${
                        q.difficulty === 'Easy'
                          ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                          : q.difficulty === 'Medium'
                          ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {q.category}
                    </span>
                  </div>

                  {/* Status Toggle Buttons */}
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() =>
                        onToggleReview(
                          q.id,
                          currentStatus === 'reviewed' ? 'unreviewed' : 'reviewed'
                        )
                      }
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors ${
                        currentStatus === 'reviewed'
                          ? 'bg-emerald-600 text-white'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{currentStatus === 'reviewed' ? 'Reviewed' : 'Mark Reviewed'}</span>
                    </button>

                    <button
                      onClick={() =>
                        onToggleReview(
                          q.id,
                          currentStatus === 'needs_practice'
                            ? 'unreviewed'
                            : 'needs_practice'
                        )
                      }
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors ${
                        currentStatus === 'needs_practice'
                          ? 'bg-amber-500 text-white'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{currentStatus === 'needs_practice' ? 'Needs Practice' : 'Flag Practice'}</span>
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <div className="mt-2 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                  {q.questionText}
                </div>

                {/* Topics & Lecture Linkage */}
                <div className="mt-4 pt-3 border-t border-inherit flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">
                      Topics:
                    </span>
                    {q.topics.map((top) => (
                      <button
                        key={top}
                        onClick={() => onNavigateToTopic(top)}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 transition-colors font-medium cursor-pointer"
                      >
                        {top}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Related:</span>
                    <button
                      onClick={() => onNavigateToLecture(q.lectureReference.lectureId)}
                      className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {q.lectureReference.lectureTitle} ({q.lectureReference.slides})
                    </button>
                  </div>
                </div>

                {/* Action Buttons: [View Answer] [View Lecture] [Study Topic] */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onSelectQuestionAnswer(q.id)}
                    className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>View Answer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigateToLecture(q.lectureReference.lectureId)}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-colors ${
                      darkMode
                        ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                    <span>View Lecture</span>
                  </button>

                  {q.topics.length > 0 && (
                    <button
                      onClick={() => onNavigateToTopic(q.topics[0])}
                      className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-colors ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Compass className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Study Topic</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
