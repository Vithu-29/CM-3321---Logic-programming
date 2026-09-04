import { Lecture } from '../types';

export const lecturesData: Lecture[] = [
  // ==========================================
  // LECTURE 01: PROPOSITIONAL LOGIC
  // ==========================================
  {
    id: 'lec-01',
    code: 'LEC-01',
    title: 'Propositional Logic',
    subtitle: 'Connectives, Truth Tables, Tautology & Equivalence Laws',
    instructor: 'Dr. Rukshima Dabare',
    slideDeck: 'Logic Programming and Artificial Cognitive Systems (Slides 1–22)',
    overview: 'Propositional logic is the branch of formal mathematical logic that studies statements (propositions) that can be either True or False. This lecture establishes logical operators (unitary and binary), truth table construction, operational precedence, tautological proofs, De Morgan\'s laws, distributive laws, and implication variations (contrapositive, converse, inverse).',
    learningObjectives: [
      'Define propositions and distinguish between unitary (¬) and binary operators (∧, ∨, →, ↔, ⊕).',
      'Construct complete truth tables for complex compound propositions.',
      'Understand and apply the 7 natural language terminologies for implication.',
      'Verify tautologies and equivalences, specifically proving (p → q) ↔ (q ∨ ¬p).',
      'Translate English natural language statements into formal propositional formulas.',
      'Apply De Morgan\'s, Distributive, and Contrapositive transformation laws.'
    ],
    topics: ['Propositional Logic', 'Logical Operators', 'Implication & Biconditional', 'Tautologies & Equivalence'],
    importantPoints: [
      'A proposition is a declarative statement that is either strictly True or False, but not both.',
      'Implication p → q is FALSE in only ONE condition: when the antecedent p is True and the consequent q is False. When p is False, p → q is always True (vacuous truth).',
      'The contrapositive ¬q → ¬p is logically equivalent (≡) to the original implication p → q.',
      'The converse (q → p) and inverse (¬p → ¬q) are NOT equivalent to p → q, but are equivalent to each other.',
      'A formula is a tautology if and only if it evaluates to True under every possible truth valuation.'
    ],
    examFocusQuestions: ['q1-a-ii', 'q1-b', 'q1-c-i', 'q1-c-ii', 'q1-c-iii'],
    keyConcepts: [
      {
        id: 'c-prop-01',
        name: 'Logical Connectives & Truth Conditions',
        whatIsIt: 'Building blocks that combine simple true/false statements into more complex logical statements.',
        formalDefinition: 'Formal operators including unitary operator (Negation ¬) and binary operators: Conjunction (∧), Disjunction (∨), Material Implication (→), Biconditional (↔), and Exclusive OR (⊕).',
        howItWorks: [
          'Negation (¬p): Inverts truth value. True if p is false; false if p is true.',
          'Conjunction (p ∧ q): True if and only if BOTH p and q are true.',
          'Disjunction (p ∨ q): True if p is true, q is true, or both are true (inclusive or).',
          'Implication (p → q): True in all cases EXCEPT when p is true and q is false.',
          'Biconditional (p ↔ q): True when p and q have identical truth values (both true or both false).'
        ],
        example: 'If p: "Kamal is tall", q: "Kamal is slim", then p ∧ q represents "Kamal is tall AND slim". If house costs < LKR 100M, Anula will buy it represents p → q.',
        importantToRemember: 'Crucial exam trap: When p is False, the implication p → q is ALWAYS True, regardless of whether q is True or False!',
        commonMistake: 'Confusing exclusive OR (either but not both) with logical inclusive disjunction (∨), which is true when both inputs are true.',
        examConnectionQuestionIds: ['q1-a-i', 'q1-c-i'],
        visual: {
          type: 'truth-table',
          title: 'Truth Table of Core Propositional Connectives',
          data: {
            headers: ['p', 'q', '¬p', 'p ∧ q', 'p ∨ q', 'p → q', 'p ↔ q', 'p ⊕ q'],
            rows: [
              ['T', 'T', 'F', 'T', 'T', 'T', 'T', 'F'],
              ['T', 'F', 'F', 'F', 'T', 'F', 'F', 'T'],
              ['F', 'T', 'T', 'F', 'T', 'T', 'F', 'T'],
              ['F', 'F', 'T', 'F', 'F', 'T', 'T', 'F']
            ]
          }
        }
      },
      {
        id: 'c-prop-02',
        name: 'Terminology for Implication (p → q)',
        whatIsIt: 'The different English phrasing conventions used to convey "if p then q" in exam questions.',
        formalDefinition: 'Natural language expressions equivalent to material implication p → q, identifying the antecedent (p) and consequent (q).',
        howItWorks: [
          '"if p, then q" → p implies q',
          '"q, if p" → p is the condition, so p → q',
          '"p, only if q" → q is necessary for p, so p → q',
          '"p is sufficient for q" → having p guarantees q, so p → q',
          '"q is necessary for p" → without q, p cannot happen, so p → q',
          '"q follows from p" → p leads to q, so p → q'
        ],
        example: '"Alice is not honest if she is smart" translates to: smart is the antecedent, so Smart → ¬Honest.',
        importantToRemember: 'Watch out for "p only if q" vs "p if q": "p if q" means q → p, whereas "p only if q" means p → q!',
        commonMistake: 'Translating "q if p" backwards as q → p instead of recognizing that the "if" clause is always the antecedent (p → q).',
        examConnectionQuestionIds: ['q1-a-i', 'q1-c-i'],
        visual: {
          type: 'formula-box',
          title: 'Implication Equivalences',
          data: 'p → q  ≡  ¬p ∨ q  ≡  ¬q → ¬p (Contrapositive)'
        }
      },
      {
        id: 'c-prop-03',
        name: 'Tautology Proof via Truth Table',
        whatIsIt: 'A logical statement that is universally true in every conceivable scenario.',
        formalDefinition: 'A formula is a tautology if and only if it is true under every possible truth valuation / interpretation.',
        howItWorks: [
          'Step 1: List all combinations of truth values for atomic variables (2^n rows).',
          'Step 2: Evaluate intermediate sub-formulas column by column.',
          'Step 3: Evaluate the outermost connective.',
          'Step 4: If every entry in the final column is T, the formula is a tautology.'
        ],
        example: 'Proving (p → q) ↔ (q ∨ ¬p) is a tautology across all 4 valuations of p and q.',
        importantToRemember: 'In exams, you must show all intermediate columns (e.g. ¬p, p → q, q ∨ ¬p) to receive full step marks.',
        commonMistake: 'Failing to include intermediate columns or evaluating false antecedent rows incorrectly.',
        examConnectionQuestionIds: ['q1-a-ii', 'q1-b'],
        visual: {
          type: 'truth-table',
          title: 'Proof of (p → q) ↔ (q ∨ ¬p)',
          data: {
            headers: ['p', 'q', 'p → q', '¬p', 'q ∨ ¬p', '(p → q) ↔ (q ∨ ¬p)'],
            rows: [
              ['T', 'T', 'T', 'F', 'T', 'T'],
              ['T', 'F', 'F', 'F', 'F', 'T'],
              ['F', 'T', 'T', 'T', 'T', 'T'],
              ['F', 'F', 'T', 'T', 'T', 'T']
            ]
          }
        }
      },
      {
        id: 'c-prop-04',
        name: 'Equivalence Laws: De Morgan, Distributive & Contrapositive',
        whatIsIt: 'Algebraic transformation rules for rewriting and simplifying logical formulas.',
        formalDefinition: 'Duality and equivalence theorems governing conjunction, disjunction, and negation in Boolean and propositional logic.',
        howItWorks: [
          'De Morgan Law 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q (Negation of conjunction is disjunction of negations).',
          'De Morgan Law 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q (Negation of disjunction is conjunction of negations).',
          'Distributive Law 1: p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r).',
          'Distributive Law 2: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).',
          'Contrapositive: p → q ≡ ¬q → ¬p.'
        ],
        example: 'Statement: "All red objects have colour" (If red, then has colour). Contrapositive: "If an object does not have colour, then it is not red".',
        importantToRemember: 'De Morgan\'s laws change the operator between literals: AND becomes OR, OR becomes AND, when negating.',
        commonMistake: 'Distributing negation without flipping ∧ to ∨, e.g. writing ¬(p ∧ q) as ¬p ∧ ¬q.',
        examConnectionQuestionIds: ['q1-b', 'q1-c-ii'],
        visual: {
          type: 'rules-list',
          title: 'Key Propositional Equivalence Laws',
          data: [
            '¬(p ∧ q) ≡ ¬p ∨ ¬q',
            '¬(p ∨ q) ≡ ¬p ∧ ¬q',
            'p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)',
            'p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
            'p → q ≡ ¬q → ¬p'
          ]
        }
      }
    ]
  },

  // ==========================================
  // LECTURE 02: FIRST ORDER PREDICATE LOGIC
  // ==========================================
  {
    id: 'lec-02',
    code: 'LEC-02',
    title: 'First-Order Predicate Logic (FOL)',
    subtitle: 'Quantifiers, Universes of Discourse & Formalization',
    instructor: 'Dr. Rukshima Dabare',
    slideDeck: 'Logic Programming and Artificial Cognitive Systems (Slides 23–46)',
    overview: 'Propositional logic cannot express relationships between objects or assert properties over sets of individuals without creating separate rules for every entity. First-Order Logic (FOL / Predicate Calculus) upgrades propositional logic with predicates, variables, constants, functions, and quantifiers (Universal ∀ and Existential ∃).',
    learningObjectives: [
      'Explain the limitations of propositional logic and why quantifiers are required.',
      'Express universal statements using ∀x and existential statements using ∃x.',
      'Specify the Universe of Discourse (U) and determine truth values under domain interpretations.',
      'Analyze the critical effect of quantifier ordering (e.g. ∀x ∃y vs ∃y ∀x).',
      'Translate complex English sentences into First-Order Predicate Logic without ambiguity.'
    ],
    topics: ['Predicate Logic', 'Quantifiers', 'Quantifier Ordering', 'Universe of Discourse'],
    importantPoints: [
      'First Order Logic == First Order Predicate Logic == First Order Predicate Calculus.',
      'Universal quantifier ∀x ("for all x"): True when P(x) is true for EVERY element in the domain. False if there exists at least ONE counterexample.',
      'Existential quantifier ∃x ("there exists x"): True when P(x) is true for AT LEAST ONE element in the domain. False when P(x) is false for all elements.',
      'Quantifier Order Matters: ∀x ∃y P(x, y) is NOT equivalent to ∃y ∀x P(x, y). However, similar quantifiers can commute: ∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y).',
      'The implication (∃y ∀x Loves(x, y)) → (∀x ∃y Loves(x, y)) is always valid, but the converse is not.'
    ],
    examFocusQuestions: ['q1-a-i', 'q1-a-ii', 'q1-a-iii', 'q1-b', 'q1-c-i', 'q1-c-ii'],
    keyConcepts: [
      {
        id: 'c-fol-01',
        name: 'Limitations of Propositional Logic',
        whatIsIt: 'Why simple True/False logic fails when modeling general facts about people or objects.',
        formalDefinition: 'Propositional logic assumes the world is modeled as a fixed, finite set of propositions. It lacks the ability to directly reference objects or express general quantified assertions.',
        howItWorks: [
          'In Propositional Logic, "If a person is rich then they have a nice car" cannot be stated generally.',
          'To model Kirihami and Sathyapalan, one must duplicate rules: Rich_Kirihami → NiceCar_Kirihami and Rich_Sathyapalan → NiceCar_Sathyapalan.',
          'For a population of N people, N separate rules are needed.',
          'FOL solves this by introducing variables: ∀x (Rich(x) → HasNiceCar(x)).'
        ],
        example: 'Rather than thousands of distinct propositions, FOL uses one single rule: ∀x (Person(x) ∧ Rich(x) → HasNiceCar(x)).',
        importantToRemember: 'Exam justification: Propositional logic lacks variables and quantifiers, causing combinatorial rule explosion.',
        commonMistake: 'Trying to use propositional symbols to represent statements that apply universally across individuals.',
        examConnectionQuestionIds: ['q1-a-i'],
        visual: {
          type: 'formula-box',
          title: 'FOL Solution to Propositional Limitation',
          data: 'FOL Rule:  ∀x (Person(x) ∧ Rich(x) → HasNiceCar(x))'
        }
      },
      {
        id: 'c-fol-02',
        name: 'Universal (∀) and Existential (∃) Quantifiers',
        whatIsIt: 'Mathematical symbols specifying how many objects in a universe have a particular property.',
        formalDefinition: '∀x P(x) asserts that predicate P holds for all x in domain U. ∃x P(x) asserts that predicate P holds for at least one x in domain U.',
        howItWorks: [
          '∀x: True when P(x) is true for every x. False when there is an x for which P(x) is false.',
          '∃x: True when there is an x for which P(x) is true. False when P(x) is false for every x.',
          'Standard pairing with connectives: "All A are B" → ∀x (A(x) → B(x)). "Some A are B" → ∃x (A(x) ∧ B(x)).'
        ],
        example: '"All vehicles are expensive" → ∀x (V(x) → E(x)). "Some vehicles are expensive" → ∃x (V(x) ∧ E(x)). "Cheap vehicles do not exist" → ¬∃x (V(x) ∧ ¬E(x)) or ∀x (V(x) → E(x)).',
        importantToRemember: 'Never use → with ∃ for "Some A are B"! ∃x (A(x) → B(x)) is vacuously true if there is any object that is NOT A.',
        commonMistake: 'Writing "Some vehicles are expensive" as ∃x (V(x) → E(x)).',
        examConnectionQuestionIds: ['q1-a-i', 'q1-a-ii', 'q1-a-iii', 'q1-c-i'],
        visual: {
          type: 'truth-table',
          title: 'Quantifier Truth Conditions',
          data: {
            headers: ['Statement', 'True When', 'False When'],
            rows: [
              ['∀x P(x)', 'P(x) is true for every x in U', 'There is at least one x for which P(x) is false'],
              ['∃x P(x)', 'There is at least one x for which P(x) is true', 'P(x) is false for every x in U']
            ]
          }
        }
      },
      {
        id: 'c-fol-03',
        name: 'Mixing Quantifiers & Ordering Semantics',
        whatIsIt: 'Rules governing how combinations of ∀ and ∃ change meaning when their order is altered.',
        formalDefinition: 'The semantic interpretation of nested quantified expressions, where quantifiers are read strictly from left to right.',
        howItWorks: [
          '∀x ∃y P(x, y): "For every x, there exists a y (which may depend on x)". E.g. "Everybody loves someone" (each person can love someone different).',
          '∃y ∀x P(x, y): "There is a single y who is loved by everyone". This is a much stronger claim!',
          'Commutation of identical quantifiers: ∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y) and ∃x ∃y P(x, y) ≡ ∃y ∃x P(x, y).',
          'Implication direction: (∃y ∀x P(x, y)) → (∀x ∃y P(x, y)) is valid, but the converse is FALSE.'
        ],
        example: 'Slide 34–37: "Everybody loves someone" is ∀x ∃y Loves(x, y). "There is someone loved by everyone" is ∃y ∀x Loves(x, y).',
        importantToRemember: 'Quantifiers must be evaluated strictly left-to-right. Swapping ∀ and ∃ fundamentally changes the meaning!',
        commonMistake: 'Assuming ∀x ∃y is equal to ∃y ∀x.',
        examConnectionQuestionIds: ['q1-a-i'],
        visual: {
          type: 'formula-box',
          title: 'Quantifier Hierarchy & Implication',
          data: '(∃y ∀x Loves(x, y))  →  (∀x ∃y Loves(x, y))  [Valid]\n(∀x ∃y Loves(x, y))  ↛  (∃y ∀x Loves(x, y))  [Invalid]'
        }
      }
    ]
  },

  // ==========================================
  // LECTURE 03: PROLOG FOUNDATIONS & RECURSION
  // ==========================================
  {
    id: 'lec-03',
    code: 'LEC-03',
    title: 'Logic Programming & Prolog Foundations',
    subtitle: 'Facts, Rules, Queries, Unification & Recursive Relations',
    instructor: 'Dr. Rukshima Dabare',
    slideDeck: 'Logic Programming and Artificial Cognitive Systems (Slides 1–29)',
    overview: 'Prolog (PROgramming in LOGic) is a declarative programming language based on first-order predicate logic (specifically Horn clauses). Unlike procedural or functional programming where the programmer specifies step-by-step instructions (how to solve), Prolog programs describe the knowledge base (what is true) using facts and rules, allowing an inference engine to answer queries automatically.',
    learningObjectives: [
      'Differentiate between logical programming and functional/imperative programming paradigms.',
      'Define the fundamental elements of Prolog: Facts, Rules, and Questions/Goals.',
      'Understand clauses, atoms, variables, and unification matching.',
      'Model family trees and hierarchical transitive relationships.',
      'Implement recursive relations (predecessor/superior) and trace execution trees.'
    ],
    topics: ['Prolog Elements', 'Family Tree Model', 'Recursive Rules', 'Superior / Predecessor'],
    importantPoints: [
      'Logical Programming: User supplies Knowledge Base + Question -> Prolog Machine searches and deduces the Answer.',
      'Atoms: Begin with a lowercase letter (e.g. tom, bob, nimal, parent).',
      'Variables: Begin with an uppercase letter or underscore (e.g. X, Y, Z, Result, _).',
      'Facts: Predicates asserted unconditionally as true, terminated with a period (e.g. parent(pam, bob).).',
      'Rules: Assertions containing conditional clauses with neck operator :- (e.g. father(X, Y) :- parent(X, Y), male(X).). Comma denotes conjunction (AND).',
      'Questions (Goals): User queries terminated with a period (e.g. ?- parent(bob, X).).'
    ],
    examFocusQuestions: ['q2-a-i', 'q2-a-ii', 'q2-a-iii', 'q3-b-iii'],
    keyConcepts: [
      {
        id: 'c-prolog-01',
        name: 'Elements of Prolog (Facts, Rules, Questions)',
        whatIsIt: 'The three foundational building blocks that make up every Prolog program.',
        formalDefinition: 'A Prolog program consists of clauses (facts and rules). A fact asserts an unconditional relation. A rule asserts a relation conditioned on subgoals. A question queries whether a goal is satisfiable.',
        howItWorks: [
          'Fact: predicate(arg1, arg2). E.g. parent(pam, bob).',
          'Rule: Head :- Body. Head is true IF all goals in Body are true. E.g. grandfather(X, Y) :- father(X, Z), parent(Z, Y).',
          'Question: ?- Goal. Prolog attempts to unify Goal against facts and rule heads in the Knowledge Base.',
          'Satisfiable: Goal succeeds and Prolog returns variable bindings or "yes/true". Unsatisfiable: Goal fails and Prolog returns "no/false".'
        ],
        example: 'Family tree knowledge base: parent(pam, bob). parent(tom, bob). Query ?- parent(X, liz). binds X = tom.',
        importantToRemember: 'Constants and predicates MUST start with lowercase letters. Variables MUST start with uppercase letters.',
        commonMistake: 'Capitalizing atom names (e.g. writing Parent(Tom, Bob) instead of parent(tom, bob)), which turns them into variables.',
        examConnectionQuestionIds: ['q2-a-i', 'q2-a-ii'],
        visual: {
          type: 'code',
          title: 'Family Tree Knowledge Base Example',
          data: 'parent(pam, bob).\nparent(tom, bob).\nparent(tom, liz).\nparent(bob, ann).\nparent(bob, pat).\nparent(pat, jim).\n\nfather(X, Y) :- parent(X, Y), male(X).'
        }
      },
      {
        id: 'c-prolog-02',
        name: 'Recursive Rule Formulations (Predecessor / Superior)',
        whatIsIt: 'Techniques for defining chains of relationships (ancestor, predecessor, superior) over any depth.',
        formalDefinition: 'Inductive definition of a transitive relation using a base clause (direct relation) and a recursive clause (indirect relation).',
        howItWorks: [
          'Base Case: X is a predecessor of Z if X is a direct parent of Z: predecessor(X, Z) :- parent(X, Z).',
          'Recursive Case: X is a predecessor of Z if there is some Y such that X is a parent of Y AND Y is a predecessor of Z: predecessor(X, Z) :- parent(X, Y), predecessor(Y, Z).',
          'Search: Prolog steps down the chain one generation at a time until the base case matches.'
        ],
        example: 'manager(kamal, nimal), manager(nimal, sunil), manager(sunil, rohan). Then superior(kamal, rohan) recursively traverses nimal and sunil.',
        importantToRemember: 'Slide 26 & 28 show 4 variations: right recursion, left recursion, base clause first, recursive clause first. Right recursion with base first is best!',
        commonMistake: 'Writing left-recursive rules first (e.g. superior(X, Y) :- superior(X, Z), manager(Z, Y)), which causes infinite loops during backtracking.',
        examConnectionQuestionIds: ['q2-a-i', 'q2-a-ii', 'q2-a-iii'],
        visual: {
          type: 'code',
          title: 'Canonical Recursive Form',
          data: 'superior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- manager(X, Z), superior(Z, Y).'
        }
      }
    ]
  },

  // ==========================================
  // LECTURE 04: SWI PROLOG CONTROL & STATE SEARCH
  // ==========================================
  {
    id: 'lec-04',
    code: 'LEC-04',
    title: 'SWI Prolog Control, Cut, Fail & State Search',
    subtitle: 'Cut Operator, Backtracking, Lists & Monkey and Banana Problem',
    instructor: 'Dr. Rukshima Dabare',
    slideDeck: 'Logic Programming and Artificial Cognitive Systems (Slides 30–38)',
    overview: 'This lecture covers advanced execution control in SWI-Prolog, including how the cut operator (!) and fail predicate manipulate the search tree, list processing via head-tail pattern matching, and the classic Monkey and Banana state-space search and planning problem.',
    learningObjectives: [
      'Understand Prolog\'s backtracking mechanism and how choice points are created.',
      'Explain how the cut operator (!) prunes the execution tree.',
      'Implement negation-as-failure using the cut-fail idiom.',
      'Process lists in Prolog using [Head|Tail] decomposition.',
      'Model state-space problems (Monkey and Banana) using states and move transition clauses.'
    ],
    topics: ['Cut Operator (!)', 'Backtracking', 'List Processing', 'Monkey and Banana Problem'],
    importantPoints: [
      'The cut operator (!) always succeeds when encountered, but commits Prolog to all variable choices made since entering the parent goal.',
      'Green cuts improve efficiency without changing the declarative meaning (answers remain identical).',
      'Red cuts alter the declarative meaning of the program; misplacing them introduces logical errors.',
      'Negation as Failure idiom: not_p(X) :- p(X), !, fail. not_p(_).',
      'Lists are recursive data structures: [Head | Tail], where Head is the first element and Tail is a list containing the rest.'
    ],
    examFocusQuestions: ['q2-b-i', 'q2-b-ii', 'q2-c', 'q3-c'],
    keyConcepts: [
      {
        id: 'c-cut-01',
        name: 'The Cut Operator (!) & Backtracking Control',
        whatIsIt: 'A special built-in control predicate that stops Prolog from searching alternative solutions.',
        formalDefinition: 'A procedural primitive that prevents backtracking across all subgoals preceding it in the current clause, and prunes alternative clauses for the parent predicate.',
        howItWorks: [
          'When ! is evaluated, it succeeds unconditionally.',
          'It freezes all variable bindings made between the clause head and the cut.',
          'It discards all choice points created by preceding goals in that clause and by alternative clauses for that predicate.',
          'If a goal after the cut fails, Prolog cannot backtrack past the cut; the parent goal immediately fails.'
        ],
        example: 'mammal(X), !, bird(X). Prolog binds X = elephant. The cut executes and prunes dog, whale. bird(elephant) fails. Whole query fails!',
        importantToRemember: 'Remember Question 2(b): If the cut commits to a candidate that later fails, the entire query fails because alternative choice points were pruned.',
        commonMistake: 'Thinking cut forces the whole predicate to succeed; cut only prevents backtracking—if subgoals following the cut fail, the query fails.',
        examConnectionQuestionIds: ['q2-b-i', 'q2-b-ii'],
        visual: {
          type: 'formula-box',
          title: 'Cut Behavior Summary',
          data: 'Goal :- Cond1, Cond2, !, Subgoal1, Subgoal2.\n→ Choice points for Cond1 and Cond2 are PRUNED.\n→ If Subgoal1 fails, query FAILS immediately.'
        }
      },
      {
        id: 'c-list-01',
        name: 'Prolog List Manipulation & Interleaving',
        whatIsIt: 'Techniques for processing sequential collections of elements using recursive head-tail splitting.',
        formalDefinition: 'List representation using the cons operator [Head | Tail], enabling recursive decomposition and non-deterministic generation of permutations and interleavings.',
        howItWorks: [
          '[H|T] decomposes a non-empty list into its first element H and the remaining list T.',
          'Empty list [] serves as the termination base case.',
          'In non-deterministic list predicates (like mystery/3 in Question 2(c)), alternative clauses non-deterministically pick from either list, generating all valid interleavings upon backtracking.'
        ],
        example: 'mystery([1,2], [a,b], R) yields 6 interleavings: [1,2,a,b], [1,a,2,b], [1,a,b,2], [a,1,2,b], [a,1,b,2], [a,b,1,2].',
        importantToRemember: 'Order preservation: in an interleaving of [1,2] and [a,b], 1 must appear before 2, and a must appear before b.',
        commonMistake: 'Generating arbitrary permutations rather than preserving the relative order of elements from each source list.',
        examConnectionQuestionIds: ['q2-c'],
        visual: {
          type: 'code',
          title: 'Interleaving Predicate mystery/3',
          data: 'mystery([], L2, L2).\nmystery(L1, [], L1) :- L1 = [_|_].\nmystery([H1|T1], [H2|T2], [H1|T3]) :- mystery(T1, [H2|T2], T3).\nmystery([H1|T1], [H2|T2], [H2|T3]) :- mystery([H1|T1], T2, T3).'
        }
      },
      {
        id: 'c-search-01',
        name: 'Monkey & Banana State-Space Representation',
        whatIsIt: 'A classic AI planning problem demonstrating how physical state transitions are encoded in logic programming.',
        formalDefinition: 'State-space search where world states are represented as structured terms state(MonkeyPos, OnFloor/OnBox, BoxPos, HasBanana) and actions are transition clauses move(State1, Action, State2).',
        howItWorks: [
          'State definition: state(HorizontalPos, VerticalPos, BoxPos, BananaStatus).',
          'Initial state: state(atdoor, onfloor, atwindow, hasnot).',
          'Goal condition: canget(state(_, _, _, has)).',
          'Transitions: 1. grasp (when at middle, on box, box at middle, hasnot). 2. climb (onfloor to onbox). 3. drag(P1, P2). 4. walk(P1, P2).',
          'Recursive search: canget(State1) :- move(State1, _, State2), canget(State2).'
        ],
        example: 'The monkey walks from door to window, pushes box to middle, climbs box, and grasps the banana.',
        importantToRemember: 'This formulation directly illustrates how symbolic problem solving implements goal-directed cognitive planning (tested in Q3(c)).',
        commonMistake: 'Allowing the monkey to grasp when not on the box or when the box is not in the middle.',
        examConnectionQuestionIds: ['q3-a-i', 'q3-c'],
        visual: {
          type: 'code',
          title: 'Prolog Monkey & Banana State Model',
          data: 'move(state(middle,onbox,middle,hasnot), grasp, state(middle,onbox,middle,has)).\nmove(state(P,onfloor,P,H), climb, state(P,onbox,P,H)).\nmove(state(P1,onfloor,P1,H), drag(P1,P2), state(P2,onfloor,P2,H)).\nmove(state(P1,onfloor,B,H), walk(P1,P2), state(P2,onfloor,B,H)).\n\ncanget(state(_,_,_,has)).\ncanget(State1) :- move(State1,_,State2), canget(State2).'
        }
      }
    ]
  },

  // ==========================================
  // LECTURE 05: COGNITIVE SYSTEMS & ARCHITECTURES
  // ==========================================
  {
    id: 'lec-05',
    code: 'LEC-05',
    title: 'Artificial Cognitive Systems & Architectures',
    subtitle: 'Cognitive Functions, Robotics, Neuro-Symbolic Hybrid AI',
    instructor: 'Module Syllabus CM 3321',
    slideDeck: 'Module Curriculum: Artificial Cognitive Systems & Robotics',
    overview: 'Artificial Cognitive Systems (ACS) bridge computational neuroscience, artificial intelligence, and cognitive science. This module examines how core human mental faculties—perception, memory, learning, reasoning, and planning—are formalized in computational agents, contrasting symbolic and non-symbolic representations and exploring neuro-symbolic hybrid paradigms.',
    learningObjectives: [
      'Explain how perception, memory, learning, and problem solving are modeled in modern AI.',
      'Analyze the impact of neuroscience, AI learning, and sensory advances on robotics.',
      'Compare symbolic (rules, logic, search) vs non-symbolic (neural networks, embeddings) representations.',
      'Evaluate hybrid neuro-symbolic cognitive architectures.',
      'Identify the foundational challenges facing human-mimetic AI (symbol grounding, common sense, continual learning).'
    ],
    topics: ['Cognitive Functions', 'Cognitive Robotics', 'Symbolic vs Non-Symbolic', 'Neuro-Symbolic Hybrid AI'],
    importantPoints: [
      'Dual-Process Theory: Fast, reactive, subconscious perception (System 1 - Neural) paired with deliberate, slow, auditable logic (System 2 - Symbolic).',
      'The Symbol Grounding Problem: How meaningless syntactic tokens acquire real-world physical and sensorimotor meaning.',
      'Modern cognitive robotics combines neuromorphic tactile/vision sensors with predictive cerebellar motor loops and foundation models.'
    ],
    examFocusQuestions: ['q3-a-i', 'q3-a-ii', 'q3-b-i', 'q3-b-ii', 'q3-b-iii', 'q3-c'],
    keyConcepts: [
      {
        id: 'c-cog-01',
        name: 'The 5 Pillars of Cognitive Systems',
        whatIsIt: 'The essential mental capabilities that any artificial cognitive agent must possess to act intelligently.',
        formalDefinition: 'The functional integration of Perception (signal-to-symbol), Memory (short-term & long-term), Reasoning (deductive/probabilistic), Planning (state-space search), and Learning (parameter/rule update).',
        howItWorks: [
          'Perception: Sensory feature extraction transforming continuous signals into abstract concepts.',
          'Memory: Triple structure of Working Memory (blackboard), Semantic Memory (facts/ontology), and Episodic Memory (temporal experiences).',
          'Reasoning: Inferring new truths from existing knowledge bases.',
          'Planning: Composing sequences of state-transforming actions to achieve a goal.',
          'Learning: Continual adaptation based on environmental rewards or error gradients.'
        ],
        example: 'In autonomous surgical robots: Stereo endoscopy provides perception, anatomical atlas provides semantic memory, motion planner computes incision path, and adaptive controllers stabilize tremors.',
        importantToRemember: 'Question 3(a) and 3(c) require explaining how at least three of these are modeled computationally with practical applications.',
        commonMistake: 'Equating cognition only to machine learning, ignoring deliberative planning and symbolic memory systems.',
        examConnectionQuestionIds: ['q3-a-i', 'q3-c'],
        visual: {
          type: 'diagram',
          title: 'Cognitive Cycle Architecture',
          data: 'Perception → Memory Retrieval → Deliberative Planning / Reasoning → Motor Action → Learning Feedback'
        }
      },
      {
        id: 'c-cog-02',
        name: 'Symbolic vs Non-Symbolic AI & Hybrid Synthesis',
        whatIsIt: 'The two major paradigms of artificial intelligence and how modern systems combine them.',
        formalDefinition: 'Symbolic AI (GOFAI) utilizes discrete symbols, explicit rules, and formal logic. Non-symbolic AI uses continuous distributed vector embeddings and neural networks.',
        howItWorks: [
          'Symbolic: Deterministic, transparent, verifiable, composable, but brittle to noise and requires manual engineering.',
          'Non-symbolic: Resilient to noise, learns from data, handles raw audio/pixels, but opaque (black-box) and unprovable.',
          'Hybrid Integration: Neural front-end extracts symbolic predicates from raw sensor feeds; symbolic inference engine checks safety invariants and derives explanations.'
        ],
        example: 'AlphaGeometry: Language model suggests auxiliary geometric constructions, while a symbolic deduction engine rigorously verifies mathematical proofs.',
        importantToRemember: 'Exam key point: Hybrid systems combine the perceptual robustness of neural networks with the formal certainty and explainability of logic.',
        commonMistake: 'Describing symbolic and neural AI as mutually exclusive rather than complementary layers in a cognitive hierarchy.',
        examConnectionQuestionIds: ['q3-b-i', 'q3-c', 'q4-c-iii'],
        visual: {
          type: 'truth-table',
          title: 'Comparison: Symbolic vs Non-Symbolic AI',
          data: {
            headers: ['Attribute', 'Symbolic AI', 'Non-Symbolic AI (Neural)'],
            rows: [
              ['Representation', 'Discrete symbols, rules, logic', 'Continuous distributed vectors'],
              ['Noise Tolerance', 'Low (brittle to sensor noise)', 'High (robust statistical generalization)'],
              ['Transparency', '100% auditable rule traces', 'Black-box / opaque weights'],
              ['Knowledge Source', 'Formalized domain rules & ontologies', 'Trained on massive datasets'],
              ['Verification', 'Mathematically provable', 'Empirical / statistical only']
            ]
          }
        }
      }
    ]
  },

  // ==========================================
  // LECTURE 06: EXPERT SYSTEMS & KNOWLEDGE ENGINEERING
  // ==========================================
  {
    id: 'lec-06',
    code: 'LEC-06',
    title: 'Expert Systems & Knowledge Engineering',
    subtitle: 'Architectures, Chaining Strategies, Explanation Facilities & Ethics',
    instructor: 'Module Syllabus CM 3321',
    slideDeck: 'Module Curriculum: Expert Systems and Knowledge-Based Engineering',
    overview: 'Expert Systems (ES) are domain-specific artificial intelligence programs that emulate the decision-making ability of human experts. This module examines the classic architecture (Knowledge Base, Inference Engine, Working Memory, Explanation Facility), compares forward vs backward chaining, and addresses explainability and ethical/legal requirements in high-stakes domains such as banking and healthcare.',
    learningObjectives: [
      'Deconstruct an Expert System into Knowledge Base, Inference Engine, Working Memory, and Explanation Facility.',
      'Compare Forward Chaining (data-driven) and Backward Chaining (goal-driven).',
      'Explain how diagnostic troubleshooting systems mimic experienced engineers.',
      'Analyze why expert systems remain vital in dynamic, real-time domains (cybersecurity, trading).',
      'Design explainable, legally compliant financial expert systems with counterfactual reasoning.'
    ],
    topics: ['Expert System Architecture', 'Forward & Backward Chaining', 'Diagnostic Troubleshooting', 'Explainability & Compliance'],
    importantPoints: [
      'Knowledge Base vs Inference Engine: Separation of declarative domain knowledge (rules) from the procedural reasoning mechanism is the defining hallmark of Expert Systems.',
      'Forward Chaining starts with known facts and derives new conclusions (ideal for synthesis, monitoring, and loan qualification).',
      'Backward Chaining starts with a hypothesis/goal and searches for supporting facts (ideal for fault diagnosis and loan rejection root-cause analysis).',
      'Explanation Facilities answer "WHY" a question is asked (shows the current subgoal) and "HOW" a conclusion was reached (shows the fired rule trace).',
      'Under GDPR Article 22 and consumer credit laws, automated loan rejection requires deterministic, non-discriminatory explanation.'
    ],
    examFocusQuestions: ['q4-a-i', 'q4-a-ii', 'q4-b-i', 'q4-b-ii', 'q4-b-iii', 'q4-c-i', 'q4-c-ii', 'q4-c-iii'],
    keyConcepts: [
      {
        id: 'c-es-01',
        name: 'Expert System Architecture & Explanation Facility',
        whatIsIt: 'The standard multi-part design of a knowledge-based system and how it explains its reasoning.',
        formalDefinition: 'A modular architecture comprising a Knowledge Base (facts and production rules), Working Memory (current session state), an Inference Engine (matching and execution), and an Explanation Facility (generating HOW and WHY justifications).',
        howItWorks: [
          'Knowledge Base: Encodes rules in IF [condition] THEN [action/conclusion] format.',
          'Working Memory: Holds dynamic case-specific facts submitted by the user or derived by rules.',
          'Inference Engine: Implements the Match-Resolve-Act cycle against the agenda.',
          'HOW Facility: Displays the exact chain of rules that fired to derive the final conclusion.',
          'WHY Facility: Explains why the system is requesting a specific user input by showing the active rule being evaluated.'
        ],
        example: 'In automated loan approval, if rejected, the HOW facility outputs: "Rejected because Debt-to-Income (48%) > 40% threshold under Rule R-104".',
        importantToRemember: 'The clean separation between Knowledge Base and Inference Engine allows updating domain rules without altering the reasoning software.',
        commonMistake: 'Confusing the Explanation Facility with a simple help menu; it provides dynamic audit traces of executed inference chains.',
        examConnectionQuestionIds: ['q4-a-i', 'q4-c-ii'],
        visual: {
          type: 'diagram',
          title: 'Expert System Component Architecture',
          data: 'User ↔ User Interface ↔ Explanation Facility ↔ Inference Engine ↔ [Working Memory + Knowledge Base]'
        }
      },
      {
        id: 'c-es-02',
        name: 'Forward Chaining vs. Backward Chaining',
        whatIsIt: 'The two primary reasoning strategies applied by an inference engine.',
        formalDefinition: 'Forward Chaining is data-driven reasoning starting from known facts to infer all possible consequences. Backward Chaining is goal-driven reasoning starting from a hypothesis to find supporting facts.',
        howItWorks: [
          'Forward Chaining: Facts in Working Memory match rule antecedents (IF parts). All matched rules fire, adding new facts to Working Memory. Repeats until no more rules match or a goal is reached.',
          'Backward Chaining: System selects a goal hypothesis and finds rules whose consequent (THEN part) matches the goal. The antecedents of those rules become new subgoals to verify recursively.'
        ],
        example: 'Forward Chaining: Given symptoms, what diseases might the patient have? Backward Chaining: Hypothesize patient has Dengue fever; check if platelet count is low and fever is present.',
        importantToRemember: 'Forward chaining is best when many outcomes are possible from given data; backward chaining is best when confirming specific diagnostic hypotheses.',
        commonMistake: 'Thinking an inference engine can only do one; modern rule engines support mixed/bidirectional chaining.',
        examConnectionQuestionIds: ['q4-b-ii', 'q4-c-i'],
        visual: {
          type: 'truth-table',
          title: 'Comparison: Forward vs Backward Chaining',
          data: {
            headers: ['Dimension', 'Forward Chaining (Data-Driven)', 'Backward Chaining (Goal-Driven)'],
            rows: [
              ['Starting Point', 'Known initial facts', 'Hypothesized target goal'],
              ['Direction', 'Bottom-up (Antecedent → Consequent)', 'Top-down (Consequent → Antecedent)'],
              ['Optimal Domains', 'Configuration, monitoring, design, planning', 'Diagnosis, troubleshooting, legal verification'],
              ['User Interaction', 'Batch data ingestion up front', 'Interactive targeted queries as needed']
            ]
          }
        }
      }
    ]
  }
];
