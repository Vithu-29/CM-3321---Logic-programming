import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  FileText,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  HelpCircle,
  Search,
  CheckCircle2
} from 'lucide-react';
import { Topic } from '../types';

interface TopicExplorerViewProps {
  topics: Topic[];
  selectedTopicId: string | null;
  onSelectTopic: (id: string) => void;
  onNavigateToLecture: (lectureId: string) => void;
  onSelectQuestion: (questionId: string) => void;
  darkMode: boolean;
}

export const TopicExplorerView: React.FC<TopicExplorerViewProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  onNavigateToLecture,
  onSelectQuestion,
  darkMode,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTopics = topics.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.detailedNotes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeTopic =
    topics.find((t) => t.id === selectedTopicId) || filteredTopics[0] || topics[0];

  const categories = ['All', 'Logic', 'Prolog', 'Cognitive Systems', 'Expert Systems'];

  return (
    <div className="space-y-6 pb-16">
      {/* Header & Filter Bar */}
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
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                Knowledge Matrix
              </span>
              <span className="text-xs text-slate-500">
                12 Core Syllabi Units
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
              Topic Explorer & Concept Cross-Referencing
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore interconnected academic concepts spanning Propositional & Predicate Logic, Prolog search, Cognitive architectures, and Expert systems.
            </p>
          </div>
          <div className="text-xs text-slate-500 shrink-0">
            Click any topic to view syllabus formulas & exam questions
          </div>
        </div>

        {/* Filter & Search */}
        <div className="mt-5 pt-4 border-t border-inherit flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search topics..."
              className={`w-full pl-9 pr-3 py-1.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Main Layout: Topic List Grid & Active Topic Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Topic Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Select Topic ({filteredTopics.length})
          </div>

          <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
            {filteredTopics.map((topic) => {
              const isSelected = topic.id === activeTopic.id;

              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : darkMode
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-200'
                      : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      }`}
                    >
                      {topic.category}
                    </span>
                    <span
                      className={`text-[11px] font-bold ${
                        isSelected ? 'text-blue-100' : 'text-amber-600 dark:text-amber-400'
                      }`}
                    >
                      {topic.examWeight}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm leading-snug">{topic.name}</h4>
                  <p
                    className={`text-xs mt-1 line-clamp-2 ${
                      isSelected ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {topic.summary}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-inherit/40">
                    <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>
                      {topic.questionIds.length} Questions Tested
                    </span>
                    <span className="flex items-center font-medium">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Topic View */}
        <div className="lg:col-span-7 space-y-5">
          <div
            className={`p-6 sm:p-7 rounded-2xl border transition-colors ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Header */}
            <div className="pb-4 border-b border-inherit">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                  {activeTopic.category}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                  {activeTopic.examWeight}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {activeTopic.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {activeTopic.detailedNotes}
              </p>
            </div>

            {/* Key Formulas / Rules (Section 7 Item 6) */}
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Key Formulas, Rules & Equivalence Laws</span>
              </div>
              <div className="space-y-2">
                {activeTopic.keyFormulasOrRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 leading-relaxed"
                  >
                    {rule}
                  </div>
                ))}
              </div>
            </div>

            {/* Related Lectures (Section 7 Item 2) */}
            <div className="mt-5 pt-4 border-t border-inherit">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Related Lectures</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTopic.lectureIds.map((lecId) => (
                  <button
                    key={lecId}
                    onClick={() => onNavigateToLecture(lecId)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 transition-colors flex items-center space-x-1.5"
                  >
                    <span>{lecId.toUpperCase()} Notes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Related Past Paper Questions with Practice Buttons (Section 7 Item 4 & 7) */}
            <div className="mt-5 pt-4 border-t border-inherit">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center space-x-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Tested in Past Paper Questions ({activeTopic.questionIds.length})</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeTopic.questionIds.map((qId) => (
                  <button
                    key={qId}
                    onClick={() => onSelectQuestion(qId)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                      darkMode
                        ? 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800'
                        : 'bg-slate-50 border-slate-200 hover:bg-indigo-50/50 hover:border-indigo-200'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs text-blue-600 dark:text-blue-400">
                        {qId.toUpperCase().replace('-', ' ')}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Practice this question
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
