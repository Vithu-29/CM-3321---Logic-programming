export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type QuestionCategory = 'Logic' | 'Prolog' | 'Cognitive Systems' | 'Expert Systems';
export type ReviewState = 'unreviewed' | 'reviewed' | 'needs_practice';

export interface LectureRef {
  lectureId: string;
  lectureTitle: string;
  concept: string;
  slides: string;
  notesExcerpt?: string;
}

export interface Question {
  id: string;
  numberLabel: string; // e.g. "Q1(a)(i)"
  mainQuestion: number; // 1, 2, 3, or 4
  questionText: string;
  marks: number;
  topics: string[];
  lectureIds: string[];
  difficulty: Difficulty;
  category: QuestionCategory;
  coverageNote?: string;
  learningExplanation: string;
  examAnswer: string;
  stepByStepSolution?: string[];
  finalAnswer: string;
  lectureReference: LectureRef;
  codeSnippet?: string;
  truthTableOrDiagram?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
}

export interface VisualItem {
  type: 'truth-table' | 'code' | 'formula-box' | 'diagram' | 'rules-list';
  title?: string;
  data?: any;
}

export interface ConceptItem {
  id: string;
  name: string;
  whatIsIt: string;
  formalDefinition: string;
  howItWorks: string[];
  example: string;
  importantToRemember: string;
  commonMistake: string;
  examConnectionQuestionIds: string[];
  visual?: VisualItem;
}

export interface Lecture {
  id: string;
  code: string; // e.g. "LEC-01"
  title: string;
  subtitle: string;
  instructor: string;
  slideDeck: string;
  overview: string;
  learningObjectives: string[];
  topics: string[];
  keyConcepts: ConceptItem[];
  importantPoints: string[];
  examFocusQuestions: string[];
}

export interface Topic {
  id: string;
  name: string;
  category: QuestionCategory;
  summary: string;
  lectureIds: string[];
  questionIds: string[];
  keyFormulasOrRules: string[];
  detailedNotes: string;
  examWeight: string; // e.g. "High (15 Marks)"
}

export interface HighPriorityTopic {
  topicId: string;
  name: string;
  totalMarks: number;
  whyImportant: string;
  questionIds: string[];
}

export interface DefinitionItem {
  term: string;
  definition: string;
  lecture: string;
  context: string;
}

export interface FormulaItem {
  name: string;
  formula: string;
  description: string;
  lecture: string;
}

export interface CommonPatternItem {
  title: string;
  description: string;
  steps: string[];
  exampleExamQuestion: string;
}
