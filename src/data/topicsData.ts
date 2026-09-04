import { Topic } from '../types';

export const topicsData: Topic[] = [
  {
    id: 'top-prop-logic',
    name: 'Propositional Logic Operators & Truth Tables',
    category: 'Logic',
    summary: 'Foundational syntax and truth semantics of negation (¬), conjunction (∧), disjunction (∨), implication (→), biconditional (↔), and exclusive-OR (⊕).',
    lectureIds: ['lec-01'],
    questionIds: ['q1-a-i', 'q1-c-i'],
    examWeight: 'High (8 Marks)',
    keyFormulasOrRules: [
      'p → q is False ONLY when p = True and q = False. When p = False, p → q is always True.',
      'p ↔ q is True when both p and q have identical truth values.',
      '7 English forms of implication: "if p then q", "q if p", "p only if q", "p is sufficient for q", "q is necessary for p", "q follows from p".'
    ],
    detailedNotes: 'Propositional logic deals with declarative statements evaluated as either True or False. Connective precedence strictly dictates evaluation order: Negation > Conjunction > Disjunction > Implication > Biconditional. In examination problems, translate natural language phrases with high precision, especially distinguishing "p if q" (q → p) from "p only if q" (p → q).'
  },
  {
    id: 'top-equiv-laws',
    name: 'Logical Equivalences, De Morgan & Tautologies',
    category: 'Logic',
    summary: 'Proving logical formulas identical across all valuations using truth tables, De Morgan\'s laws, distributive laws, and contrapositives.',
    lectureIds: ['lec-01'],
    questionIds: ['q1-a-ii', 'q1-b', 'q1-c-ii'],
    examWeight: 'High (11 Marks)',
    keyFormulasOrRules: [
      'De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q  and  ¬(p ∨ q) ≡ ¬p ∧ ¬q',
      'Distributive: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)  and  p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
      'Implication to Disjunction: p → q ≡ ¬p ∨ q',
      'Contrapositive Equivalence: p → q ≡ ¬q → ¬p'
    ],
    detailedNotes: 'A formula is a tautology iff it is True under every possible truth valuation. Proving (p → q) ↔ (q ∨ ¬p) via truth table establishes the validity of converting implications into disjunctive clauses, a foundational rule for resolution refutation.'
  },
  {
    id: 'top-pred-logic',
    name: 'First-Order Predicate Logic & Quantifiers',
    category: 'Logic',
    summary: 'Extending propositional logic to represent objects, properties, and relations using Universal (∀) and Existential (∃) quantifiers over a specified universe of discourse.',
    lectureIds: ['lec-02'],
    questionIds: ['q1-a-i', 'q1-a-ii', 'q1-a-iii', 'q1-c-i'],
    examWeight: 'Very High (14 Marks)',
    keyFormulasOrRules: [
      '∀x P(x): True when P(x) holds for every object in U. False if even one counterexample exists.',
      '∃x P(x): True when at least one object in U satisfies P(x). False when P(x) is false for all objects.',
      '"All A are B" → ∀x (A(x) → B(x))',
      '"Some A are B" → ∃x (A(x) ∧ B(x))',
      'Quantifier ordering matters: ∀x ∃y P(x, y) ≠ ∃y ∀x P(x, y), though (∃y ∀x P(x, y)) → (∀x ∃y P(x, y)).'
    ],
    detailedNotes: 'Predicate logic remedies the expressiveness limits of propositional logic by quantifying over objects rather than duplicating propositions. Take extreme care with quantifier ordering: "Everybody loves someone" (∀x ∃y Loves(x,y)) is very different from "There is someone loved by everyone" (∃y ∀x Loves(x,y)).'
  },
  {
    id: 'top-inference-res',
    name: 'Logical Inference, Resolution Refutation & CNF',
    category: 'Logic',
    summary: 'Systematic conversion of first-order expressions into Conjunctive Normal Form (CNF) and applying Modus Ponens or Resolution to formally prove target theorems.',
    lectureIds: ['lec-01', 'lec-02'],
    questionIds: ['q1-b', 'q1-c-ii', 'q1-c-iii'],
    examWeight: 'Very High (12 Marks)',
    keyFormulasOrRules: [
      'Modus Ponens: From P and P → Q, infer Q.',
      'Resolution Rule: From (A ∨ B) and (¬B ∨ C), infer (A ∨ C) under unifier θ.',
      'CNF Pipeline: 1. Eliminate ↔  2. Eliminate →  3. Inward ¬ (De Morgan)  4. Standardize variables  5. Skolemize ∃  6. Drop ∀  7. Distribute ∨ over ∧.',
      'Refutation Strategy: Add negated goal ¬Goal to CNF clause set and resolve to empty clause (□).'
    ],
    detailedNotes: 'Resolution refutation is sound and refutation-complete for first-order logic. In Q1(c)(iii), resolving clauses generated from the paragraph with the negated hypothesis ¬Promoted(Ravi) derives the empty clause □ in 4 unified steps.'
  },
  {
    id: 'top-prolog-basics',
    name: 'Prolog Elements, Unification & Family Trees',
    category: 'Prolog',
    summary: 'Declarative logic programming concepts: knowledge base construction from facts and rules, atoms vs variables, and goal unification.',
    lectureIds: ['lec-03'],
    questionIds: ['q2-a-i', 'q2-a-ii'],
    examWeight: 'Medium (6 Marks)',
    keyFormulasOrRules: [
      'Facts: Predicates asserted unconditionally (e.g. manager(kamal, nimal).).',
      'Rules: Head :- Body. Evaluated right-to-left as IF Body THEN Head.',
      'Atoms begin with lowercase; variables begin with uppercase or underscore.',
      'Goals in query separated by comma (,) denote logical conjunction (AND).'
    ],
    detailedNotes: 'Prolog execution operates by searching top-to-bottom for matching clauses and evaluating subgoals left-to-right. Composed queries (like grandparent or manager chains) pass bound variables across subgoals through unification.'
  },
  {
    id: 'top-prolog-recursion',
    name: 'Recursive Relations & Execution Trees (Superior/Predecessor)',
    category: 'Prolog',
    summary: 'Formulating recursive transitive closure relations, understanding left vs right recursion, avoiding infinite loops, and optimizing search trees.',
    lectureIds: ['lec-03'],
    questionIds: ['q2-a-i', 'q2-a-ii', 'q2-a-iii'],
    examWeight: 'High (7 Marks)',
    keyFormulasOrRules: [
      'Standard Form: superior(X, Y) :- manager(X, Y).  superior(X, Y) :- manager(X, Z), superior(Z, Y).',
      'Left-recursion danger: superior(X, Y) :- superior(X, Z), manager(Z, Y) causes infinite recursion when backtracking.',
      'Base clause first ensures direct relationships are confirmed immediately.'
    ],
    detailedNotes: 'Prolog slide 26 lists 4 distinct formulations of the predecessor/superior relation. While all 4 share the exact same declarative meaning, only the base-first, right-recursive formulation terminates reliably without runaway stack overflow on general queries.'
  },
  {
    id: 'top-cut-fail',
    name: 'The Cut Operator (!) & Backtracking Control',
    category: 'Prolog',
    summary: 'Controlling non-deterministic search using the cut (!) and fail predicates, pruning choice points, green vs red cuts, and implementing negation-as-failure.',
    lectureIds: ['lec-04'],
    questionIds: ['q2-b-i', 'q2-b-ii'],
    examWeight: 'Very High (12 Marks)',
    keyFormulasOrRules: [
      '! prunes all choice points between entering the parent goal and the cut.',
      'If goals after cut fail, Prolog cannot backtrack past the cut.',
      'Negation as Failure: not_p(X) :- p(X), !, fail.  not_p(_).',
      'Placing cut before the test condition destroys the conditional logic.'
    ],
    detailedNotes: 'Question 2(b) extensively examines the cut. In mammal(X), !, bird(X), the cut freezes X to elephant. When bird(elephant) fails, cut blocks backtracking to other mammals, failing the entire query.'
  },
  {
    id: 'top-prolog-lists',
    name: 'Prolog List Manipulation & Non-Deterministic Interleaving',
    category: 'Prolog',
    summary: 'Recursive list processing using [Head|Tail] pattern matching and generating combinations preserving relative ordering.',
    lectureIds: ['lec-04'],
    questionIds: ['q2-c'],
    examWeight: 'High (6 Marks)',
    keyFormulasOrRules: [
      '[H|T] splits first element from rest.',
      'mystery/3 non-deterministically interleaves elements from two input lists.',
      'For two lists of size 2, 4! / (2! * 2!) = 6 distinct interleavings are produced upon semicolon (;).'
    ],
    detailedNotes: 'Interleaving preserves the internal ordering of each individual source list while exploring all valid permutations of their merged sequence. The query ?- mystery([1,2], [a,b], R) systematically enumerates all 6 order-preserving combinations.'
  },
  {
    id: 'top-state-space',
    name: 'State-Space Representation & Planning (Monkey & Banana)',
    category: 'Cognitive Systems',
    summary: 'Modeling cognitive problem solving through explicit state terms, action preconditions, and recursive search in Prolog.',
    lectureIds: ['lec-04', 'lec-05'],
    questionIds: ['q3-a-i', 'q3-c'],
    examWeight: 'Medium (5 Marks)',
    keyFormulasOrRules: [
      'State: state(MonkeyPos, OnFloor/OnBox, BoxPos, HasBanana)',
      'Transitions: move(State1, Action, State2)',
      'Planner: canget(state(_,_,_,has)).  canget(S1) :- move(S1, _, S2), canget(S2).'
    ],
    detailedNotes: 'The Monkey and Banana problem serves as the archetype for artificial cognitive planning. By representing the environment as discrete state tuples and defining deterministic move transitions, symbolic logic achieves goal-directed problem solving.'
  },
  {
    id: 'top-cognitive-arch',
    name: 'Cognitive Architectures & Neuro-Symbolic AI',
    category: 'Cognitive Systems',
    summary: 'Computational modeling of human mental faculties (perception, memory, reasoning, planning, learning) and unifying neural networks with symbolic logic.',
    lectureIds: ['lec-05'],
    questionIds: ['q3-a-i', 'q3-a-ii', 'q3-b-i', 'q3-b-ii', 'q3-b-iii', 'q3-c'],
    examWeight: 'Very High (20 Marks)',
    keyFormulasOrRules: [
      'Cognitive functions: Perception (CNNs/ViTs), Memory (Knowledge Graphs/Buffers), Reasoning (Logic/Search), Learning (Backpropagation/RL).',
      'The Symbol Grounding Problem: How abstract syntactic symbols acquire physical sensorimotor reality.',
      'Dual-Process Theory: Fast associative System 1 (Neural) + Slow deliberate System 2 (Symbolic).'
    ],
    detailedNotes: 'Neuro-symbolic architectures resolve the fundamental trade-off in AI: deep neural nets provide robust perception and noisy pattern recognition, while symbolic engines enforce rigorous logic, deterministic safety invariants, and auditability.'
  },
  {
    id: 'top-expert-systems',
    name: 'Expert System Architecture & Chaining Strategies',
    category: 'Expert Systems',
    summary: 'Components of knowledge-based systems (Knowledge Base, Working Memory, Inference Engine, Explanation Facility) and comparing Forward vs Backward chaining.',
    lectureIds: ['lec-06'],
    questionIds: ['q4-a-i', 'q4-a-ii', 'q4-b-i', 'q4-b-ii', 'q4-b-iii'],
    examWeight: 'Very High (16 Marks)',
    keyFormulasOrRules: [
      'Separation of Knowledge Base (rules/facts) from Inference Engine (reasoning algorithms).',
      'Forward Chaining: Data-driven (Facts → Rules → Conclusions). Best for monitoring, synthesis, planning.',
      'Backward Chaining: Goal-driven (Hypothesis → Subgoals → Facts). Best for diagnosis and fault isolation.',
      'Autonomous Operation: ES functions independently of human experts once knowledge base is compiled.'
    ],
    detailedNotes: 'In engineering troubleshooting, an expert system mimics experienced engineers through symptom acquisition, heuristic case recall, backward-chaining hypothesis testing, and repair prescription with causal explanations.'
  },
  {
    id: 'top-ethical-xai',
    name: 'Explainable AI (XAI) & Ethical/Legal Compliance',
    category: 'Expert Systems',
    summary: 'Generating legally binding, transparent explanations for automated decisions in finance and medicine, counterfactual justifications, and bias mitigation.',
    lectureIds: ['lec-06'],
    questionIds: ['q4-c-i', 'q4-c-ii', 'q4-c-iii'],
    examWeight: 'High (9 Marks)',
    keyFormulasOrRules: [
      'HOW Explanations: Translating fired rule traces into plain, auditable English.',
      'WHY Explanations: Clarifying the active subgoal behind a user prompt.',
      'Counterfactual Explanations: Minimum actionable steps required to turn a rejection into an approval.',
      'Regulatory compliance: GDPR Article 22 Right to Explanation, Equal Credit Opportunity Act.'
    ],
    detailedNotes: 'For automated bank loan approval, hybrid systems are ideal: machine learning computes precise non-linear credit risk scores, while a symbolic rule engine enforces non-negotiable legal non-discrimination rules and generates auditable explanations.'
  }
];
