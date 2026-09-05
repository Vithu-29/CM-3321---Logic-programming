import React, { useState, useEffect } from 'react';
import { questionsData } from './data/questionsData';
import { lecturesData } from './data/lecturesData';
import { topicsData } from './data/topicsData';
import {
  highPriorityTopics,
  keyDefinitions,
  importantFormulas,
  commonQuestionPatterns,
} from './data/revisionData';
import { ReviewState } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { PastPaperView } from './components/PastPaperView';
import { AnswersView } from './components/AnswersView';
import { LectureNotesView } from './components/LectureNotesView';
import { TopicExplorerView } from './components/TopicExplorerView';
import { ExamRevisionView } from './components/ExamRevisionView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  // Navigation Section State
  const [currentSection, setCurrentSection] = useState<string>('dashboard');

  // Selected entities for deep-linking
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(
    questionsData[0].id
  );
  const [selectedLectureId, setSelectedLectureId] = useState<string>(
    lecturesData[0].id
  );
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    topicsData[0].id
  );

  // Review Status (localStorage persistent)
  const [reviewStatus, setReviewStatus] = useState<Record<string, ReviewState>>(() => {
    try {
      const saved = localStorage.getItem('cm3321_review_status');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleToggleReview = (questionId: string, state: ReviewState) => {
    setReviewStatus((prev) => {
      const updated = { ...prev, [questionId]: state };
      try {
        localStorage.setItem('cm3321_review_status', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Dark Mode (localStorage persistent, defaulting to clean light theme)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('cm3321_theme');
      if (saved) return saved === 'dark';
      return false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('cm3321_theme', darkMode ? 'dark' : 'light');
    } catch {}
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Mobile sidebar & Search modal
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Navigation handlers
  const navigateToQuestion = (questionId: string) => {
    setSelectedQuestionId(questionId);
    setCurrentSection('answers');
  };

  const navigateToLecture = (lectureId: string) => {
    setSelectedLectureId(lectureId);
    setCurrentSection('lectures');
  };

  const navigateToTopic = (topicNameOrId: string) => {
    // Find matching topic by id or name
    const found = topicsData.find(
      (t) =>
        t.id === topicNameOrId ||
        t.name.toLowerCase().includes(topicNameOrId.toLowerCase())
    );
    if (found) {
      setSelectedTopicId(found.id);
    }
    setCurrentSection('topics');
  };

  const navigateSection = (section: string, filterOrId?: string) => {
    if (filterOrId) {
      if (section === 'answers') {
        setSelectedQuestionId(filterOrId);
      } else if (section === 'lectures') {
        setSelectedLectureId(filterOrId);
      } else if (section === 'topics') {
        setSelectedTopicId(filterOrId);
      }
    }
    setCurrentSection(section);
  };

  const reviewedCount = Object.values(reviewStatus).filter(
    (s) => s === 'reviewed'
  ).length;

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#F9FBFC] text-slate-900'
      }`}
    >
      {/* Sidebar Navigation */}
      <Sidebar
        currentSection={currentSection}
        onSelectSection={setCurrentSection}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        isOpenMobile={isMobileNavOpen}
        onCloseMobile={() => setIsMobileNavOpen(false)}
        reviewedCount={reviewedCount}
        totalQuestions={questionsData.length}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* Top Header */}
        <Header
          currentSection={currentSection}
          onOpenMobile={() => setIsMobileNavOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onSelectSection={setCurrentSection}
        />

        {/* Dynamic Section Views */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <ErrorBoundary onReset={() => setCurrentSection('dashboard')}>
            {currentSection === 'dashboard' && (
              <DashboardView
                questions={questionsData}
                lectures={lecturesData}
                topics={topicsData}
                reviewStatus={reviewStatus}
                onNavigate={navigateSection}
                darkMode={darkMode}
              />
            )}

            {currentSection === 'past-paper' && (
              <PastPaperView
                questions={questionsData}
                reviewStatus={reviewStatus}
                onToggleReview={handleToggleReview}
                onSelectQuestionAnswer={navigateToQuestion}
                onNavigateToLecture={navigateToLecture}
                onNavigateToTopic={navigateToTopic}
                darkMode={darkMode}
              />
            )}

            {currentSection === 'answers' && (
              <AnswersView
                questions={questionsData}
                selectedQuestionId={selectedQuestionId}
                onSelectQuestion={setSelectedQuestionId}
                reviewStatus={reviewStatus}
                onToggleReview={handleToggleReview}
                onNavigateToLecture={navigateToLecture}
                onNavigateToTopic={navigateToTopic}
                darkMode={darkMode}
              />
            )}

            {currentSection === 'lectures' && (
              <LectureNotesView
                lectures={lecturesData}
                selectedLectureId={selectedLectureId}
                onSelectLecture={setSelectedLectureId}
                onSelectQuestion={navigateToQuestion}
                darkMode={darkMode}
              />
            )}

            {currentSection === 'topics' && (
              <TopicExplorerView
                topics={topicsData}
                selectedTopicId={selectedTopicId}
                onSelectTopic={setSelectedTopicId}
                onNavigateToLecture={navigateToLecture}
                onSelectQuestion={navigateToQuestion}
                darkMode={darkMode}
              />
            )}

            {currentSection === 'revision' && (
              <ExamRevisionView
                highPriorityTopics={highPriorityTopics}
                definitions={keyDefinitions}
                formulas={importantFormulas}
                commonPatterns={commonQuestionPatterns}
                allTopics={topicsData}
                allQuestions={questionsData}
                onSelectQuestion={navigateToQuestion}
                onNavigateToTopic={navigateToTopic}
                darkMode={darkMode}
              />
            )}
          </ErrorBoundary>
        </main>
      </div>

      {/* Global Quick Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        questions={questionsData}
        lectures={lecturesData}
        topics={topicsData}
        formulas={importantFormulas}
        definitions={keyDefinitions}
        onNavigateToQuestion={navigateToQuestion}
        onNavigateToLecture={navigateToLecture}
        onNavigateToTopic={navigateToTopic}
        onNavigateToRevision={() => setCurrentSection('revision')}
        darkMode={darkMode}
      />
    </div>
  );
}
