import { HighPriorityTopic, DefinitionItem, FormulaItem, CommonPatternItem } from '../types';

export const highPriorityTopics: HighPriorityTopic[] = [
  {
    topicId: 'top-cognitive-arch',
    name: 'Cognitive Architectures & Neuro-Symbolic Hybrid AI',
    totalMarks: 20,
    whyImportant: 'Featured prominently across Question 3 (a, b, c) and Question 4(c)(iii). Essential for explaining how human cognition translates into computational perception, memory, and hybrid AI.',
    questionIds: ['q3-a-i', 'q3-a-ii', 'q3-b-i', 'q3-b-ii', 'q3-b-iii', 'q3-c']
  },
  {
    topicId: 'top-expert-systems',
    name: 'Expert System Architecture & Chaining Strategies',
    totalMarks: 16,
    whyImportant: 'Dominates Question 4. Examines core architectural components, diagnostic troubleshooting, True/False justifications, and Forward vs Backward chaining.',
    questionIds: ['q4-a-i', 'q4-a-ii', 'q4-b-i', 'q4-b-ii', 'q4-b-iii']
  },
  {
    topicId: 'top-pred-logic',
    name: 'First-Order Predicate Logic & Quantifier Formalization',
    totalMarks: 14,
    whyImportant: 'Central to Question 1(a) and 1(c)(i). Direct translation of complex natural language into FOL with strict quantifier scoping.',
    questionIds: ['q1-a-i', 'q1-a-ii', 'q1-a-iii', 'q1-c-i']
  },
  {
    topicId: 'top-cut-fail',
    name: 'Prolog Cut Operator (!) & Backtracking Semantics',
    totalMarks: 12,
    whyImportant: 'Makes up Question 2(b). Requires precise trace analysis of cut execution, choice point pruning, and red cut failure debugging.',
    questionIds: ['q2-b-i', 'q2-b-ii']
  },
  {
    topicId: 'top-inference-res',
    name: 'CNF Conversion & Resolution Refutation',
    totalMarks: 12,
    whyImportant: 'Core algorithmic problem solving in Question 1(b) and Question 1(c)(ii & iii). Mandatory step-by-step clause derivation.',
    questionIds: ['q1-b', 'q1-c-ii', 'q1-c-iii']
  },
  {
    topicId: 'top-ethical-xai',
    name: 'Explainable AI, Counterfactuals & Banking Ethics',
    totalMarks: 9,
    whyImportant: 'Applied case study in Question 4(c). Evaluates real-world regulatory compliance (GDPR Right to Explanation) in automated decision systems.',
    questionIds: ['q4-c-i', 'q4-c-ii', 'q4-c-iii']
  }
];

export const keyDefinitions: DefinitionItem[] = [
  {
    term: 'Proposition',
    definition: 'A declarative statement that is either strictly True or False, but cannot be both simultaneously.',
    lecture: 'Lecture 01',
    context: 'Foundation of Propositional Logic. Slide 4.'
  },
  {
    term: 'Tautology',
    definition: 'A logical formula that evaluates to True under every possible truth valuation / interpretation.',
    lecture: 'Lecture 01',
    context: 'Evaluated by constructing complete truth tables. Slide 13.'
  },
  {
    term: 'Contrapositive',
    definition: 'For an implication p → q, the contrapositive is ¬q → ¬p. It is strictly logically equivalent to p → q.',
    lecture: 'Lecture 01',
    context: 'Equivalence law (p → q ≡ ¬q → ¬p). Slide 19–20.'
  },
  {
    term: 'Universal Quantifier (∀)',
    definition: '∀x P(x) asserts that predicate P(x) is true for every element x in the universe of discourse.',
    lecture: 'Lecture 02',
    context: 'False if at least one counterexample exists. Slide 27.'
  },
  {
    term: 'Existential Quantifier (∃)',
    definition: '∃x P(x) asserts that predicate P(x) is true for at least one element x in the universe of discourse.',
    lecture: 'Lecture 02',
    context: 'False only if P(x) is false for every object in domain. Slide 27.'
  },
  {
    term: 'Universal Instantiation (UI)',
    definition: 'An inference rule stating that from ∀x P(x), one can deduce P(c) for any arbitrary ground term or constant c.',
    lecture: 'Lecture 02',
    context: 'Eliminates quantifiers in automated theorem provers. Exam Q1(a)(iii).'
  },
  {
    term: 'Prolog Atom',
    definition: 'A concrete named object or constant in Prolog, written starting with a lowercase letter (e.g. tom, bob).',
    lecture: 'Lecture 03',
    context: 'Fundamental syntax of Prolog data objects. Slide 18.'
  },
  {
    term: 'Prolog Variable',
    definition: 'A general placeholder that can be instantiated with any term during unification, beginning with an uppercase letter or underscore.',
    lecture: 'Lecture 03',
    context: 'Unification and goal satisfaction. Slide 18.'
  },
  {
    term: 'Cut Operator (!)',
    definition: 'A built-in procedural control predicate that succeeds immediately and prunes all alternative choice points created since entering the parent goal.',
    lecture: 'Lecture 04',
    context: 'Controls backtracking and enforces deterministic execution. Slide 30.'
  },
  {
    term: 'The Symbol Grounding Problem',
    definition: 'The fundamental challenge of how abstract, syntactic symbols inside a computational agent acquire intrinsic semantic meaning tied to physical reality.',
    lecture: 'Lecture 05',
    context: 'Cognitive systems challenge formulated by Stevan Harnad. Exam Q3(b)(ii).'
  },
  {
    term: 'Forward Chaining',
    definition: 'A data-driven inference strategy starting from known facts in working memory and firing matching rules to derive all reachable conclusions.',
    lecture: 'Lecture 06',
    context: 'Ideal for synthesis, monitoring, and planning. Exam Q4(b)(ii).'
  },
  {
    term: 'Backward Chaining',
    definition: 'A goal-driven inference strategy starting from a hypothesized conclusion and working backward to verify whether supporting facts exist.',
    lecture: 'Lecture 06',
    context: 'Ideal for diagnostics, troubleshooting, and audit verification. Exam Q4(b)(ii).'
  },
  {
    term: 'Counterfactual Explanation',
    definition: 'An explanation describing the smallest change in input attributes that would have resulted in a different decision (e.g. turning a loan rejection into approval).',
    lecture: 'Lecture 06',
    context: 'Ethical and legal compliance under GDPR Right to Explanation. Exam Q4(c)(ii).'
  }
];

export const importantFormulas: FormulaItem[] = [
  {
    name: 'Implication to Disjunction Equivalence',
    formula: 'p → q  ≡  ¬p ∨ q',
    description: 'Converts material implication into a disjunctive clause. Critical for CNF conversion and resolution.',
    lecture: 'Lecture 01'
  },
  {
    name: 'Biconditional Expansion',
    formula: 'p ↔ q  ≡  (p → q) ∧ (q → p)  ≡  (¬p ∨ q) ∧ (¬q ∨ p)',
    description: 'Expands "if and only if" into dual directional implications for clause generation.',
    lecture: 'Lecture 01'
  },
  {
    name: 'De Morgan\'s Laws',
    formula: '¬(p ∧ q) ≡ ¬p ∨ ¬q    |    ¬(p ∨ q) ≡ ¬p ∧ ¬q',
    description: 'Pushes negation inside compound expressions while toggling AND and OR.',
    lecture: 'Lecture 01'
  },
  {
    name: 'Distributive Laws',
    formula: 'p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)    |    p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
    description: 'Distributes disjunction across conjunction to achieve Conjunctive Normal Form.',
    lecture: 'Lecture 01'
  },
  {
    name: 'Contrapositive Law',
    formula: 'p → q  ≡  ¬q → ¬p',
    description: 'An implication is logically identical to the implication between the negated and reversed terms.',
    lecture: 'Lecture 01'
  },
  {
    name: 'Universal to Existential Negation Duality',
    formula: '¬∀x P(x)  ≡  ∃x ¬P(x)    |    ¬∃x P(x)  ≡  ∀x ¬P(x)',
    description: 'Negating a universal claim produces an existential claim, and vice versa.',
    lecture: 'Lecture 02'
  },
  {
    name: 'Commutative Quantifiers Law',
    formula: '∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y)    |    ∃x ∃y P(x, y) ≡ ∃y ∃x P(x, y)',
    description: 'Similar quantifiers can safely commute without altering truth value.',
    lecture: 'Lecture 02'
  },
  {
    name: 'Quantifier Order Implication',
    formula: '(∃y ∀x P(x, y))  →  (∀x ∃y P(x, y))',
    description: 'Having a single y for everyone implies that everyone has some y. Converse is NOT valid.',
    lecture: 'Lecture 02'
  },
  {
    name: 'Prolog Negation-as-Failure Idiom',
    formula: 'not_p(X) :- p(X), !, fail.  |  not_p(_).',
    description: 'Standard SWI-Prolog cut-fail pattern implementing closed-world negation.',
    lecture: 'Lecture 04'
  }
];

export const commonQuestionPatterns: CommonPatternItem[] = [
  {
    title: 'Natural Language to Predicate Logic Translation',
    description: 'Converting complex university-level English sentences into unambiguous First-Order Logic formulas.',
    steps: [
      '1. Identify individual entities, classes, and relationships to define explicit predicate signatures (e.g. L(x) for Lecturer, R(x) for Respected).',
      '2. For "All A are B", use universal quantifier with implication: ∀x (A(x) → B(x)).',
      '3. For "Some A are B", use existential quantifier with conjunction: ∃x (A(x) ∧ B(x)). Never use implication here!',
      '4. For "A if and only if B", expand as biconditional: ∀x (A(x) ↔ B(x)).',
      '5. For compound conditions like "intelligent and friendly", conjoin them inside the antecedent: ∀x ((I(x) ∧ F(x)) → R(x)).'
    ],
    exampleExamQuestion: 'Exam Question 1(a)(i) & Question 1(c)(i)'
  },
  {
    title: 'Conversion to Conjunctive Normal Form (CNF)',
    description: 'Step-by-step clausal transformation required before applying resolution theorem proving.',
    steps: [
      '1. Eliminate biconditionals: replace α ↔ β with (α → β) ∧ (β → α).',
      '2. Eliminate implications: replace α → β with ¬α ∨ β.',
      '3. Move negations inward using De Morgan\'s laws and quantifier duality (¬∀x P(x) → ∃x ¬P(x)).',
      '4. Standardize variables so each quantifier binds a unique variable name.',
      '5. Skolemize existential variables: replace ∃x with fresh constants k or Skolem functions f(y).',
      '6. Drop universal quantifiers (all remaining variables are assumed universally quantified).',
      '7. Distribute ∨ over ∧ using (A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C) until only a conjunction of disjunctive clauses remains.'
    ],
    exampleExamQuestion: 'Exam Question 1(c)(ii)'
  },
  {
    title: 'Resolution Refutation Proof Procedure',
    description: 'Proving that a theorem follows from a knowledge base by deriving an explicit contradiction.',
    steps: [
      '1. Formulate the target question/theorem as a logical proposition Q.',
      '2. Negate the target theorem to form ¬Q, and convert it to CNF clause form.',
      '3. Add the negated goal clause(s) to the set of clauses from the knowledge base.',
      '4. Select two clauses containing complementary literals (e.g. P(t) and ¬P(t\')).',
      '5. Compute the Most General Unifier (MGU) θ that unifies the complementary literals.',
      '6. Generate the resolvent clause by combining remaining literals with substitution θ applied.',
      '7. Repeat until deriving the empty clause (□), which proves the negated goal is unsatisfiable, thus proving the original theorem is True.'
    ],
    exampleExamQuestion: 'Exam Question 1(b) & Question 1(c)(iii)'
  },
  {
    title: 'Prolog Cut Operator Backtracking Tracing',
    description: 'Predicting whether a query succeeds or fails in the presence of the cut operator (!).',
    steps: [
      '1. Evaluate subgoals from left to right.',
      '2. If a subgoal before the cut succeeds, note its first variable binding and proceed.',
      '3. When the cut (!) is reached, it succeeds immediately and freezes all variable bindings made in the clause so far, discarding all alternative choice points for those goals.',
      '4. Evaluate subgoals following the cut. If any subgoal fails, Prolog attempts to backtrack.',
      '5. Because the cut prevents backtracking past itself, Prolog CANNOT test alternative bindings for goals to the left of the cut. The parent goal immediately FAILS.'
    ],
    exampleExamQuestion: 'Exam Question 2(b)(i)'
  }
];
