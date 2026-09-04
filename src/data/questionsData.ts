import { Question } from '../types';

export const questionsData: Question[] = [
  // ==========================================
  // QUESTION 1: LOGIC (25 MARKS)
  // ==========================================
  {
    id: 'q1-a-i',
    numberLabel: 'Question 1 (a) (i)',
    mainQuestion: 1,
    questionText: 'Consider the following English statements:\n1. "All lecturers are intelligent."\n2. "Some lecturers are not friendly."\n3. "Anyone who is intelligent and friendly is respected."\n\nRepresent each of the above statements in Predicate Logic using suitable predicates.',
    marks: 3,
    topics: ['Predicate Logic', 'Quantifiers', 'Formalization'],
    lectureIds: ['lec-02'],
    difficulty: 'Easy',
    category: 'Logic',
    coverageNote: 'Directly supported by Lecture 02 (Slides 25–28, 40–41: Quantifiers and Predicate Translation)',
    learningExplanation: 'In First-Order Predicate Logic (FOL), universal quantification (∀) is conventionally combined with material implication (→) to state that a property applies to all members of a category (e.g., "All A are B" becomes ∀x (A(x) → B(x))). In contrast, existential quantification (∃) is conventionally combined with conjunction (∧) to express the existence of at least one individual having multiple properties (e.g., "Some A are not B" becomes ∃x (A(x) ∧ ¬B(x))). Statement 3 asserts a rule holding for anyone: if an individual possesses both intelligence and friendliness, then that individual is respected.',
    examAnswer: 'Let the universe of discourse be all people, and define the predicates:\n• L(x): x is a lecturer\n• I(x): x is intelligent\n• F(x): x is friendly\n• R(x): x is respected\n\nFormal representations:\n1. ∀x (L(x) → I(x))\n2. ∃x (L(x) ∧ ¬F(x))\n3. ∀x ((I(x) ∧ F(x)) → R(x))',
    stepByStepSolution: [
      'Define predicate symbols for the entities and attributes: L(x) for Lecturer, I(x) for Intelligent, F(x) for Friendly, R(x) for Respected.',
      'Statement 1 ("All lecturers are intelligent"): Universal statement over lecturers. Translated as ∀x (L(x) → I(x)).',
      'Statement 2 ("Some lecturers are not friendly"): Existential claim indicating at least one individual satisfies being a lecturer and not being friendly. Translated as ∃x (L(x) ∧ ¬F(x)). Note: using implication here (∃x (L(x) → ¬F(x))) would be incorrect as it would be vacuously true for any non-lecturer.',
      'Statement 3 ("Anyone who is intelligent and friendly is respected"): Universal condition over compound antecedent. Translated as ∀x ((I(x) ∧ F(x)) → R(x)).'
    ],
    finalAnswer: '1. ∀x (L(x) → I(x))\n2. ∃x (L(x) ∧ ¬F(x))\n3. ∀x ((I(x) ∧ F(x)) → R(x))',
    lectureReference: {
      lectureId: 'lec-02',
      lectureTitle: 'Lecture 02 – Predicate Logic & Quantifiers',
      concept: 'Universal & Existential Quantifiers Formalization',
      slides: 'Slide 27-28, Slide 40-41',
      notesExcerpt: 'Universal quantifier ∀x ("for all x") and Existential quantifier ∃x ("there exists x"). Note: "All vehicles are expensive" → ∀x (V(x) → E(x)); "Some vehicles are expensive" → ∃x (V(x) ∧ E(x)).'
    }
  },
  {
    id: 'q1-a-ii',
    numberLabel: 'Question 1 (a) (ii)',
    mainQuestion: 1,
    questionText: 'Using logical inference, determine whether the following conclusion is valid:\n"Some lecturers are respected."\nJustify your answer using rules of inference.',
    marks: 3,
    topics: ['Logical Inference', 'Validity', 'Countermodel'],
    lectureIds: ['lec-01', 'lec-02'],
    difficulty: 'Medium',
    category: 'Logic',
    coverageNote: 'Supported by Lecture 01 (Validity/Tautology) and Lecture 02 (Quantifier Semantics)',
    learningExplanation: 'To determine if an argument is valid, we must verify whether the conclusion ∃x (L(x) ∧ R(x)) is logically entailed by the premises in all possible interpretations. Premise 1 tells us all lecturers are intelligent. Premise 2 guarantees there is at least one lecturer who is NOT friendly. Premise 3 states that being BOTH intelligent and friendly guarantees respect. However, the premises nowhere state that any lecturer is friendly! It is entirely consistent with all three premises that every single lecturer in existence is unfriendly. Under such a scenario, no lecturer satisfies the antecedent of Premise 3, so no lecturer is guaranteed to be respected. Hence, the conclusion is INVALID.',
    examAnswer: 'The conclusion "Some lecturers are respected" (∃x (L(x) ∧ R(x))) is INVALID.\n\nJustification via Countermodel:\nConsider an interpretation where the domain D = {c}:\n• L(c) = True (c is a lecturer)\n• I(c) = True (c is intelligent)\n• F(c) = False (c is not friendly)\n• R(c) = False (c is not respected)\n\nVerification of Premises:\n1. L(c) → I(c) ≡ T → T ≡ True.\n2. L(c) ∧ ¬F(c) ≡ T ∧ ¬F ≡ T ∧ T ≡ True (so ∃x (L(x) ∧ ¬F(x)) holds).\n3. (I(c) ∧ F(c)) → R(c) ≡ (T ∧ F) → F ≡ F → F ≡ True.\n\nVerification of Conclusion:\n∃x (L(x) ∧ R(x)) ≡ L(c) ∧ R(c) ≡ T ∧ F ≡ False.\n\nSince all premises are True while the conclusion is False, the argument is invalid by definition.',
    stepByStepSolution: [
      'Identify premises in symbolic form: (1) ∀x (L(x) → I(x)), (2) ∃x (L(x) ∧ ¬F(x)), (3) ∀x ((I(x) ∧ F(x)) → R(x)).',
      'Identify conclusion: ∃x (L(x) ∧ R(x)).',
      'Attempt formal derivation: From (2), instantiate constant c such that L(c) ∧ ¬F(c). By UI on (1), L(c) → I(c), yielding I(c). We now have I(c) and ¬F(c).',
      'To derive R(c) from (3), we require I(c) ∧ F(c). However, we only have ¬F(c).',
      'Because the premises say nothing about whether any friendly lecturers exist, we construct a countermodel where all lecturers are unfriendly (F(x) = False). All premises evaluate to True, but R(x) is False, falsifying the conclusion.',
      'Conclude that the argument is invalid.'
    ],
    finalAnswer: 'Conclusion is INVALID. Supported by a counterexample interpretation where all lecturers are intelligent and unfriendly, satisfying all premises while leaving no lecturer respected.',
    lectureReference: {
      lectureId: 'lec-01',
      lectureTitle: 'Lecture 01 – Propositional Logic',
      concept: 'Valuation, Tautology & Validity',
      slides: 'Slide 13-16',
      notesExcerpt: 'An argument is valid iff under every valuation/interpretation where premises are true, the conclusion is also true.'
    }
  },
  {
    id: 'q1-a-iii',
    numberLabel: 'Question 1 (a) (iii)',
    mainQuestion: 1,
    questionText: 'Explain the difference between universal instantiation and existential generalization in Predicate Logic. How do these rules contribute to automated reasoning?',
    marks: 3,
    topics: ['Inference Rules', 'Universal Instantiation', 'Existential Generalization', 'Automated Reasoning'],
    lectureIds: ['lec-02'],
    difficulty: 'Medium',
    category: 'Logic',
    coverageNote: 'Supported by Lecture 02 (Slides 27–32: Quantifiers & Instantiations in Logic)',
    learningExplanation: 'Universal Instantiation (UI) is a top-down deductive rule: if a property holds for every entity in the universe (∀x P(x)), we can conclude that it holds for any specific ground term or arbitrary constant c (P(c)). Existential Generalization (EG) is a bottom-up inductive/existential rule: if a property is known to hold for a specific known object c (P(c)), we can legitimately infer that there exists at least one object with that property (∃x P(x)). In automated reasoning (e.g., theorem provers, resolution engines), UI enables replacing universal variables with matched terms via unification, while EG/Skolemization permits eliminating quantifiers to reduce First-Order Logic to propositional-like clause form.',
    examAnswer: 'Difference:\n• Universal Instantiation (UI): From ∀x P(x), one can infer P(c) for ANY arbitrary constant or ground term c in the universe of discourse.\n  Rule: ∀x P(x) ⊢ P(c)\n• Existential Generalization (EG): From P(c) holding for a specific object c, one can infer that there exists some x satisfying P.\n  Rule: P(c) ⊢ ∃x P(x)\n\nContribution to Automated Reasoning:\n1. Elimination of Quantifiers: Automated theorem provers cannot directly compute over boundless quantified formulas. UI allows replacing variables with concrete candidates determined dynamically through Unification.\n2. Conversion to Clause Form (CNF): UI justifies dropping universal quantifiers after Skolemization, allowing first-order resolution refutation to operate on quantifier-free matrix clauses efficiently.',
    stepByStepSolution: [
      'Define Universal Instantiation (UI) with its formal schema: ∀x φ(x) ⊢ φ(t/x), where t is free for x.',
      'Define Existential Generalization (EG) with schema: φ(c) ⊢ ∃x φ(x).',
      'Contrast direction: UI moves from general to particular; EG moves from particular instance to existential claim.',
      'Explain role in automated reasoning: Unification algorithms find most general unifiers (MGU) using UI; Skolemization handles existential quantification, allowing resolution theorem provers to verify satisfiability without exponential domain searches.'
    ],
    finalAnswer: 'UI derives specific instances P(c) from universal claims ∀x P(x); EG derives existential claims ∃x P(x) from known instances P(c). They enable automated theorem provers to unquantify formulas and employ unification-based resolution.',
    lectureReference: {
      lectureId: 'lec-02',
      lectureTitle: 'Lecture 02 – Predicate Logic & Quantifiers',
      concept: 'Quantifiers Truth Values & Semantics',
      slides: 'Slide 27, 32',
      notesExcerpt: '∀x P(x) is true when P(x) is true for every x. ∃x P(x) is true when there is an x for which P(x) is true.'
    }
  },
  {
    id: 'q1-b',
    numberLabel: 'Question 1 (b)',
    mainQuestion: 1,
    questionText: 'A knowledge base contains the following statements:\n1. ∀x (Bird(x) → CanFly(x))\n2. Bird(Sparrow)\n3. ∀x (CanFly(x) → HasWings(x))\n\nProve that HasWings(Sparrow) is true using Modus Ponens and resolution. Show each inference step clearly.',
    marks: 4,
    topics: ['Modus Ponens', 'Resolution Refutation', 'Clausal Form', 'Unification'],
    lectureIds: ['lec-01', 'lec-02'],
    difficulty: 'Medium',
    category: 'Logic',
    coverageNote: 'Directly supported by Lecture 01 (Implication, Contrapositive) and Lecture 02 (FOL rules)',
    learningExplanation: 'This question tests two core inference paradigms: forward chaining via Modus Ponens (from P and P → Q infer Q) and refutation via Resolution. For Modus Ponens, we instantiate universal statements with the ground term "Sparrow" and chain forward. For Resolution, we negate the target theorem (¬HasWings(Sparrow)), convert all knowledge-base axioms into Conjunctive Normal Form (CNF clauses), and resolve complementary literals until deriving the empty clause (□ / contradiction), confirming the theorem is true.',
    examAnswer: 'PART 1: PROOF USING MODUS PONENS\n1. From Premise (1): ∀x (Bird(x) → CanFly(x))\n   Apply Universal Instantiation with x = Sparrow:\n   Bird(Sparrow) → CanFly(Sparrow)  [Step 4]\n2. From Premise (2): Bird(Sparrow)\n   Apply Modus Ponens to [Step 4] and Premise (2):\n   CanFly(Sparrow)  [Step 5]\n3. From Premise (3): ∀x (CanFly(x) → HasWings(x))\n   Apply Universal Instantiation with x = Sparrow:\n   CanFly(Sparrow) → HasWings(Sparrow)  [Step 6]\n4. Apply Modus Ponens to [Step 6] and [Step 5]:\n   HasWings(Sparrow)  [Q.E.D.]\n\n--------------------------------------------------\nPART 2: PROOF USING RESOLUTION REFUTATION\nConvert Knowledge Base into CNF Clauses:\n• Premise 1: Bird(x) → CanFly(x) ≡ ¬Bird(x) ∨ CanFly(x)   [Clause C1]\n• Premise 2: Bird(Sparrow)                                 [Clause C2]\n• Premise 3: CanFly(y) → HasWings(y) ≡ ¬CanFly(y) ∨ HasWings(y) [Clause C3]\n\nNegate the Goal:\n• Goal: HasWings(Sparrow)\n• Negated Goal: ¬HasWings(Sparrow)                        [Clause C4]\n\nResolution Steps:\n1. Resolve C3 and C4 with unifier θ = {y / Sparrow}:\n   (¬CanFly(Sparrow) ∨ HasWings(Sparrow)) and ¬HasWings(Sparrow)\n   Resolvent C5: ¬CanFly(Sparrow)\n2. Resolve C1 and C5 with unifier θ = {x / Sparrow}:\n   (¬Bird(Sparrow) ∨ CanFly(Sparrow)) and ¬CanFly(Sparrow)\n   Resolvent C6: ¬Bird(Sparrow)\n3. Resolve C2 and C6:\n   Bird(Sparrow) and ¬Bird(Sparrow)\n   Resolvent: □ (Empty Clause / Contradiction)\n\nSince the negated goal leads to a contradiction, HasWings(Sparrow) is TRUE.',
    stepByStepSolution: [
      'Modus Ponens Step 1: Instantiate x = Sparrow in Bird(x) → CanFly(x) to obtain Bird(Sparrow) → CanFly(Sparrow).',
      'Modus Ponens Step 2: Use Bird(Sparrow) with the instantiated implication to conclude CanFly(Sparrow).',
      'Modus Ponens Step 3: Instantiate x = Sparrow in CanFly(x) → HasWings(x) to obtain CanFly(Sparrow) → HasWings(Sparrow).',
      'Modus Ponens Step 4: Use CanFly(Sparrow) to conclude HasWings(Sparrow).',
      'Resolution Step 1: Write clauses C1: ¬Bird(x) ∨ CanFly(x), C2: Bird(Sparrow), C3: ¬CanFly(y) ∨ HasWings(y), C4: ¬HasWings(Sparrow).',
      'Resolution Step 2: Resolve C3 and C4 on HasWings yielding C5: ¬CanFly(Sparrow).',
      'Resolution Step 3: Resolve C1 and C5 on CanFly yielding C6: ¬Bird(Sparrow).',
      'Resolution Step 4: Resolve C2 and C6 on Bird yielding empty clause (□). Contradiction proven.'
    ],
    finalAnswer: 'Both Modus Ponens and Resolution Refutation systematically derive HasWings(Sparrow) from the knowledge base, with resolution terminating in the empty clause (□).',
    lectureReference: {
      lectureId: 'lec-01',
      lectureTitle: 'Lecture 01 – Propositional Logic',
      concept: 'Implication Equivalence (p → q ≡ ¬p ∨ q)',
      slides: 'Slide 7, 14-16',
      notesExcerpt: 'Proof that (p → q) ↔ (q ∨ ¬p) is a tautology. This equivalence forms the foundational clause conversion rule for resolution.'
    }
  },
  {
    id: 'q1-c-i',
    numberLabel: 'Question 1 (c) (i)',
    mainQuestion: 1,
    questionText: 'Use the following paragraph to answer the questions below:\n"A person is promoted in the company if and only if they work hard and adapt to new technologies. Some people work hard but do not adapt to new technologies. Anyone who attends workshops adapts to new technologies. Ravi attends workshops and works hard."\n\nRepresent the above paragraph using Predicate Logic.',
    marks: 4,
    topics: ['Predicate Logic', 'Biconditional', 'Universal & Existential Formalization'],
    lectureIds: ['lec-01', 'lec-02'],
    difficulty: 'Medium',
    category: 'Logic',
    coverageNote: 'Directly supported by Lecture 01 (Slide 8: Biconditional "if and only if") and Lecture 02 (Slides 27–41: FOL Translation)',
    learningExplanation: 'This text requires careful translation of natural language logical connectives. "If and only if" denotes a biconditional (↔). "Some people work hard but do not adapt" uses existential quantification (∃) with conjunction (∧) and negation (¬). "Anyone who attends..." is a universal statement (∀) with implication (→). Ravi is a designated ground constant.',
    examAnswer: 'Define Predicates over the domain of people:\n• P(x): x is promoted in the company\n• W(x): x works hard\n• A(x): x adapts to new technologies\n• T(x): x attends workshops\n• r: constant representing Ravi\n\nPredicate Logic Expressions:\n1. "A person is promoted in the company if and only if they work hard and adapt to new technologies":\n   ∀x (P(x) ↔ (W(x) ∧ A(x)))\n\n2. "Some people work hard but do not adapt to new technologies":\n   ∃x (W(x) ∧ ¬A(x))\n\n3. "Anyone who attends workshops adapts to new technologies":\n   ∀x (T(x) → A(x))\n\n4. "Ravi attends workshops and works hard":\n   T(r) ∧ W(r)',
    stepByStepSolution: [
      'Assign predicate signatures: P(x), W(x), A(x), T(x), constant r for Ravi.',
      'Analyze sentence 1: "if and only if" signifies biconditional: ∀x (P(x) ↔ (W(x) ∧ A(x))).',
      'Analyze sentence 2: "Some people" requires ∃; "but" signifies logical conjunction: ∃x (W(x) ∧ ¬A(x)).',
      'Analyze sentence 3: "Anyone who..." establishes universal condition: ∀x (T(x) → A(x)).',
      'Analyze sentence 4: Ground fact about Ravi: T(r) ∧ W(r).'
    ],
    finalAnswer: '1. ∀x (P(x) ↔ (W(x) ∧ A(x)))\n2. ∃x (W(x) ∧ ¬A(x))\n3. ∀x (T(x) → A(x))\n4. T(r) ∧ W(r)',
    lectureReference: {
      lectureId: 'lec-01',
      lectureTitle: 'Lecture 01 – Propositional Logic',
      concept: 'Bidirectional Implication (p ↔ q)',
      slides: 'Slide 8',
      notesExcerpt: 'p ↔ q corresponds to "p is true if and only if q is true".'
    }
  },
  {
    id: 'q1-c-ii',
    numberLabel: 'Question 1 (c) (ii)',
    mainQuestion: 1,
    questionText: 'Convert the Predicate Logic expressions into Conjunctive Normal Form (CNF).',
    marks: 4,
    topics: ['CNF Conversion', 'Skolemization', 'De Morgan Laws', 'Distributive Laws'],
    lectureIds: ['lec-01', 'lec-02'],
    difficulty: 'Hard',
    category: 'Logic',
    coverageNote: 'Supported by Lecture 01 (Slides 14–18: Implication conversion, De Morgan, Distribution) & Lecture 02 (Quantifier dropping)',
    learningExplanation: 'Converting to CNF requires systematic transformation:\n1. Eliminate biconditionals: (A ↔ B) ≡ (A → B) ∧ (B → A).\n2. Eliminate implications: (A → B) ≡ (¬A ∨ B).\n3. Push negations inward using De Morgan laws.\n4. Standardize variables.\n5. Skolemize existential quantifiers (replacing ∃x with a fresh Skolem constant k).\n6. Drop universal quantifiers.\n7. Distribute disjunction over conjunction to obtain pure clauses.',
    examAnswer: 'Step-by-Step Conversion into CNF:\n\nExpression 1: ∀x (P(x) ↔ (W(x) ∧ A(x)))\n• Eliminate ↔:\n  ∀x [(P(x) → (W(x) ∧ A(x))) ∧ ((W(x) ∧ A(x)) → P(x))]\n• Eliminate →:\n  ∀x [(¬P(x) ∨ (W(x) ∧ A(x))) ∧ (¬(W(x) ∧ A(x)) ∨ P(x))]\n• Apply De Morgan & Distribution:\n  (¬P(x) ∨ W(x)) ∧ (¬P(x) ∨ A(x)) ∧ (¬W(x) ∨ ¬A(x) ∨ P(x))\n• Resulting Clauses:\n  C1: ¬P(x) ∨ W(x)\n  C2: ¬P(x) ∨ A(x)\n  C3: ¬W(x) ∨ ¬A(x) ∨ P(x)\n\nExpression 2: ∃x (W(x) ∧ ¬A(x))\n• Skolemize: Replace existential variable x with Skolem constant k:\n  W(k) ∧ ¬A(k)\n• Resulting Clauses:\n  C4: W(k)\n  C5: ¬A(k)\n\nExpression 3: ∀x (T(x) → A(x))\n• Eliminate →:\n  ¬T(x) ∨ A(x)\n• Resulting Clause:\n  C6: ¬T(x) ∨ A(x)\n\nExpression 4: T(r) ∧ W(r)\n• Resulting Clauses:\n  C7: T(r)\n  C8: W(r)\n\nFinal CNF Clause Set:\n{ (¬P(x) ∨ W(x)), (¬P(x) ∨ A(x)), (¬W(x) ∨ ¬A(x) ∨ P(x)), W(k), ¬A(k), (¬T(x) ∨ A(x)), T(r), W(r) }',
    stepByStepSolution: [
      'Expand biconditional P(x) ↔ (W(x) ∧ A(x)) into two directional implications: (P(x) → (W(x) ∧ A(x))) and ((W(x) ∧ A(x)) → P(x)).',
      'Rewrite implications using ¬α ∨ β: (¬P(x) ∨ (W(x) ∧ A(x))) and (¬(W(x) ∧ A(x)) ∨ P(x)).',
      'Distribute ∨ over ∧: (¬P(x) ∨ W(x)) ∧ (¬P(x) ∨ A(x)).',
      'Apply De Morgan: ¬(W(x) ∧ A(x)) becomes ¬W(x) ∨ ¬A(x), yielding (¬W(x) ∨ ¬A(x) ∨ P(x)).',
      'Skolemize ∃x (W(x) ∧ ¬A(x)) by replacing x with Skolem constant k, yielding unit clauses W(k) and ¬A(k).',
      'Rewrite ∀x (T(x) → A(x)) into ¬T(x) ∨ A(x).',
      'Split T(r) ∧ W(r) into two unit clauses T(r) and W(r).'
    ],
    finalAnswer: 'CNF Clauses:\nC1: ¬P(x) ∨ W(x)\nC2: ¬P(x) ∨ A(x)\nC3: ¬W(x) ∨ ¬A(x) ∨ P(x)\nC4: W(k)\nC5: ¬A(k)\nC6: ¬T(x) ∨ A(x)\nC7: T(r)\nC8: W(r)',
    lectureReference: {
      lectureId: 'lec-01',
      lectureTitle: 'Lecture 01 – Propositional Logic',
      concept: 'De Morgan & Distributive Laws',
      slides: 'Slide 17, 18',
      notesExcerpt: '¬(p ∧ q) ≡ ¬p ∨ ¬q and p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r).'
    }
  },
  {
    id: 'q1-c-iii',
    numberLabel: 'Question 1 (c) (iii)',
    mainQuestion: 1,
    questionText: 'Illustrate how you would check whether Ravi will be promoted in the company.',
    marks: 4,
    topics: ['Resolution Refutation', 'Unification', 'Automated Reasoning'],
    lectureIds: ['lec-01', 'lec-02'],
    difficulty: 'Hard',
    category: 'Logic',
    coverageNote: 'Supported by Lecture 01 & 02 automated reasoning frameworks',
    learningExplanation: 'To formally verify whether Ravi will be promoted, we use Resolution Refutation. We state the goal as P(r) ("Ravi is promoted in the company"). We add the negation of the goal, ¬P(r), to our CNF clause set from part (ii). We then iteratively resolve clauses using unification until an empty clause (□) is derived. Derivation of □ proves that the negated goal is unsatisfiable with the knowledge base, thereby proving P(r) is True.',
    examAnswer: 'Goal to Prove: P(r) ("Ravi will be promoted in the company").\n\nRefutation Strategy:\nAdd the negated goal to the clause set: C_goal: ¬P(r).\n\nRelevant Clauses from Knowledge Base:\n• C3: ¬W(x) ∨ ¬A(x) ∨ P(x)\n• C6: ¬T(x) ∨ A(x)\n• C7: T(r)\n• C8: W(r)\n• C_goal: ¬P(r)\n\nResolution Refutation Trace:\nStep 1: Resolve C3 and C_goal with unifier θ1 = {x / r}\n  From (¬W(r) ∨ ¬A(r) ∨ P(r)) and ¬P(r):\n  Resolvent R1: ¬W(r) ∨ ¬A(r)\n\nStep 2: Resolve R1 with C8: W(r)\n  From (¬W(r) ∨ ¬A(r)) and W(r):\n  Resolvent R2: ¬A(r)\n\nStep 3: Resolve C6 and C7 with unifier θ2 = {x / r}\n  From (¬T(r) ∨ A(r)) and T(r):\n  Resolvent R3: A(r)\n\nStep 4: Resolve R2 and R3\n  From ¬A(r) and A(r):\n  Resolvent: □ (Empty Clause / Contradiction)\n\nConclusion:\nSince the negated goal yields a logical contradiction (□), the hypothesis that Ravi is not promoted is refuted. Therefore, it is logically proven that Ravi WILL be promoted in the company.',
    stepByStepSolution: [
      'Formulate question as theorem proving task: Query is P(r).',
      'Negate theorem: Assume ¬P(r).',
      'Resolve ¬P(r) with C3 (¬W(x) ∨ ¬A(x) ∨ P(x)) under substitution {x/r} yielding ¬W(r) ∨ ¬A(r).',
      'Resolve with known fact W(r) (C8) yielding ¬A(r).',
      'Derive A(r) by resolving C6 (¬T(x) ∨ A(x)) with C7 (T(r)) under substitution {x/r}.',
      'Resolve ¬A(r) with A(r) yielding empty clause □.',
      'State definitive conclusion: Ravi will be promoted.'
    ],
    finalAnswer: 'Resolution refutation derives the empty clause □ in 4 steps, proving conclusively that Ravi will be promoted.',
    lectureReference: {
      lectureId: 'lec-01',
      lectureTitle: 'Lecture 01 – Propositional Logic',
      concept: 'Proof by Contradiction / Refutation',
      slides: 'Slide 14-16',
      notesExcerpt: 'A statement is a tautology / theorem when its negation is unsatisfiable under every valuation.'
    }
  },

  // ==========================================
  // QUESTION 2: PROLOG (25 MARKS)
  // ==========================================
  {
    id: 'q2-a-i',
    numberLabel: 'Question 2 (a) (i)',
    mainQuestion: 2,
    questionText: 'Consider the following Prolog program and answer the questions below:\nmanager(kamal, nimal).\nmanager(nimal, sunil).\nmanager(sunil, rohan).\n\n(i) Write a Prolog predicate superior with two parameters to define the superior relationship. Then, illustrate how Prolog executes the query:\n?- superior(kamal, rohan).',
    marks: 2,
    topics: ['Prolog Rules', 'Recursion', 'Execution Tree', 'Backtracking'],
    lectureIds: ['lec-03'],
    difficulty: 'Easy',
    category: 'Prolog',
    coverageNote: 'Directly supported by Lecture 03 (Slides 22–29: Predecessor relation recursion and search)',
    learningExplanation: 'In Prolog, a hierarchical transitive relation (such as superior or predecessor) is modeled recursively. An individual X is superior to Y either if X is the direct manager of Y (base case), or if X is the manager of some intermediate person Z and Z is superior to Y (recursive case). Execution follows depth-first search with top-down clause selection and left-to-right subgoal evaluation.',
    examAnswer: 'Prolog Predicate Definition:\nsuperior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- manager(X, Z), superior(Z, Y).\n\nExecution Trace for ?- superior(kamal, rohan):\n1. Call: superior(kamal, rohan)\n2. Try Clause 1: manager(kamal, rohan) → Fails (no such fact).\n3. Try Clause 2: manager(kamal, Z), superior(Z, rohan)\n   • Subgoal 1: manager(kamal, Z) matches fact manager(kamal, nimal), unifying Z = nimal.\n   • Subgoal 2: Recursive Call: superior(nimal, rohan)\n4. In recursive call: superior(nimal, rohan)\n   • Try Clause 1: manager(nimal, rohan) → Fails.\n   • Try Clause 2: manager(nimal, Z1), superior(Z1, rohan)\n     - Subgoal 1: manager(nimal, Z1) matches fact manager(nimal, sunil), unifying Z1 = sunil.\n     - Subgoal 2: Recursive Call: superior(sunil, rohan)\n5. In recursive call: superior(sunil, rohan)\n   • Try Clause 1: manager(sunil, rohan) → Matches fact manager(sunil, rohan)! Succeeded!\n6. Success unwinds back through call stack. Query succeeds with "true" / "yes".',
    stepByStepSolution: [
      'Write base case: superior(X, Y) :- manager(X, Y).',
      'Write recursive case: superior(X, Y) :- manager(X, Z), superior(Z, Y).',
      'Trace Query: Call superior(kamal, rohan).',
      'Clause 1 fails as kamal does not directly manage rohan.',
      'Clause 2 finds manager(kamal, nimal), binds Z = nimal, spawns superior(nimal, rohan).',
      'Inside child call, Clause 1 fails; Clause 2 finds manager(nimal, sunil), binds Z1 = sunil, spawns superior(sunil, rohan).',
      'Inside grandchild call, Clause 1 matches manager(sunil, rohan). Base case succeeds.',
      'Prolog returns "yes".'
    ],
    finalAnswer: 'superior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- manager(X, Z), superior(Z, Y).\nQuery succeeds via two recursive unifications through nimal and sunil.',
    lectureReference: {
      lectureId: 'lec-03',
      lectureTitle: 'Lecture 03 – Prolog Foundations & Recursive Reasoning',
      concept: 'Predecessor Relation Formulation',
      slides: 'Slide 24, 27-28',
      notesExcerpt: 'predecessor(X, Z) :- parent(X, Z). predecessor(X, Z) :- parent(X, Y), predecessor(Y, Z).'
    },
    codeSnippet: 'superior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- manager(X, Z), superior(Z, Y).'
  },
  {
    id: 'q2-a-ii',
    numberLabel: 'Question 2 (a) (ii)',
    mainQuestion: 2,
    questionText: 'Write other possible versions of the predicate superior/2 that express the same declarative meaning.',
    marks: 2,
    topics: ['Prolog Recursion', 'Declarative Semantics', 'Rule Variations'],
    lectureIds: ['lec-03'],
    difficulty: 'Medium',
    category: 'Prolog',
    coverageNote: 'Directly supported by Lecture 03 (Slide 26 & 28: Four formulations of predecessor)',
    learningExplanation: 'In logic programming, declarative meaning is independent of clause and goal ordering. Because logical disjunction (;) and conjunction (,) are mathematically commutative, there are 4 classic formulations of transitive closure (demonstrated on Slide 26 of the uploaded Prolog lecture notes): varying between right-recursion, left-recursion, base-clause order, and double-recursion.',
    examAnswer: 'The following versions express the exact same declarative meaning:\n\nVersion 1 (Left-recursive form with base clause first):\nsuperior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- superior(X, Z), manager(Z, Y).\n\nVersion 2 (Swapped clause order - recursive rule first):\nsuperior(X, Y) :- manager(X, Z), superior(Z, Y).\nsuperior(X, Y) :- manager(X, Y).\n\nVersion 3 (Left-recursive with swapped clause order):\nsuperior(X, Y) :- superior(X, Z), manager(Z, Y).\nsuperior(X, Y) :- manager(X, Y).\n\nVersion 4 (Double-recursive transitive closure):\nsuperior(X, Y) :- manager(X, Y).\nsuperior(X, Y) :- superior(X, Z), superior(Z, Y).',
    stepByStepSolution: [
      'Recall Slide 26 & 28 of Prolog lecture showing 4 variations of predecessor(X, Z).',
      'Variation A: manager(X, Y) as base, superior(X, Z), manager(Z, Y) as recursive (left-recursion).',
      'Variation B: Place recursive rule before base rule.',
      'Variation C: Left-recursive with recursive rule first.',
      'Variation D: Double recursion: superior(X, Z), superior(Z, Y).'
    ],
    finalAnswer: 'Four valid declarative formulations exist based on left/right recursion and base/recursive clause ordering.',
    lectureReference: {
      lectureId: 'lec-03',
      lectureTitle: 'Lecture 03 – Prolog Foundations & Recursive Reasoning',
      concept: 'Alternative Predecessor Formulations',
      slides: 'Slide 26, 28',
      notesExcerpt: 'Slide 26 illustrates the four equivalent declarative definitions of predecessor/2.'
    }
  },
  {
    id: 'q2-a-iii',
    numberLabel: 'Question 2 (a) (iii)',
    mainQuestion: 2,
    questionText: 'Compare the different versions of the predicate and discuss which strategy provides the best balance between efficiency and correctness in Prolog execution.',
    marks: 3,
    topics: ['Prolog Execution', 'Left Recursion', 'Infinite Loops', 'Tail Recursion'],
    lectureIds: ['lec-03'],
    difficulty: 'Medium',
    category: 'Prolog',
    coverageNote: 'Supported by Lecture 03 (Slide 19, 30: Execution of Prolog programs, backtracking, recursion)',
    learningExplanation: 'Although declarative meanings are identical, procedural execution in Prolog operates top-down, left-to-right. Left-recursive versions (where the recursive goal appears first in the body) lead to infinite recursion (stack overflow) whenever backtracking occurs or when searching for all solutions, because Prolog invokes superior/2 without first binding any variables through the ground facts. The standard right-recursive version with the base case placed first guarantees termination on finite acyclic graphs, leverages early grounding via manager(X, Z), and benefits from tail-recursion optimization.',
    examAnswer: 'Comparison and Recommendation:\n\n1. Left-Recursive Versions:\n   • Defect: In superior(X, Y) :- superior(X, Z), manager(Z, Y), the leftmost subgoal is superior/2 with uninstantiated Z. When Prolog executes this goal top-down, it repeatedly invokes superior/2 before inspecting any manager/2 facts, falling into an infinite loop and stack overflow.\n\n2. Swapped Clause Order (Recursive rule first):\n   • Defect: Even if right-recursive, placing the recursive clause before the base clause forces Prolog to explore deep indirect paths before checking immediate direct relationships, adding unnecessary overhead for direct queries.\n\n3. Best Strategy:\n   • Formulation:\n     superior(X, Y) :- manager(X, Y).\n     superior(X, Y) :- manager(X, Z), superior(Z, Y).\n   • Justification:\n     - Correctness: Base case first satisfies direct lookups immediately in O(1) step.\n     - Termination: Grounding Z via manager(X, Z) before the recursive call superior(Z, Y) ensures the search space shrinks on finite graphs.\n     - Efficiency: Enables tail-call optimization (TCO) in SWI-Prolog, keeping stack usage minimal.',
    stepByStepSolution: [
      'Analyze procedural semantics of Prolog (SLD resolution: top-down, left-to-right).',
      'Demonstrate why left-recursion causes infinite loops: superior(X, Z) calls superior(X, Z1) calls superior(X, Z2)... without consuming any facts.',
      'Demonstrate why base clause must be first: Immediate solutions are returned first without generating deep stacks.',
      'Explain right recursion with ground generator: manager(X, Z) acts as a generator that binds Z to actual existing individuals before superior(Z, Y) executes.',
      'Conclude that base-first, right-recursive is the optimal standard.'
    ],
    finalAnswer: 'The base-first, right-recursive version (superior(X,Y) :- manager(X,Y). superior(X,Y) :- manager(X,Z), superior(Z,Y).) provides the best balance, preventing infinite loops and ensuring efficient termination.',
    lectureReference: {
      lectureId: 'lec-03',
      lectureTitle: 'Lecture 03 – Prolog Foundations & Recursive Reasoning',
      concept: 'Procedural vs Declarative Semantics in Recursion',
      slides: 'Slide 19, 30',
      notesExcerpt: 'Execution of Prolog programs depends strictly on clause ordering and subgoal ordering.'
    }
  },
  {
    id: 'q2-b-i',
    numberLabel: 'Question 2 (b) (i)',
    mainQuestion: 2,
    questionText: 'Consider the following Prolog knowledge base:\nmammal(elephant).\nmammal(dog).\nmammal(whale).\nbird(parrot).\nbird(pigeon).\nbird(owl).\naquatic(whale).\naquatic(shark).\n\nExplain how the cut operator affects Prolog\'s backtracking in each of the following goals. For each case, state whether the goal succeeds or fails and justify why:\na. mammal(elephant), !, aquatic(elephant).\nb. mammal(X), !, bird(X).\nc. (mammal(X) ; bird(X)), !, aquatic(whale).',
    marks: 9,
    topics: ['Cut Operator (!)', 'Backtracking', 'Pruning Search Tree'],
    lectureIds: ['lec-04'],
    difficulty: 'Hard',
    category: 'Prolog',
    coverageNote: 'Directly supported by Lecture 04 (Slide 30: SWI Prolog execution, backtracking, cut, fail)',
    learningExplanation: 'The cut operator (!) always succeeds immediately when first encountered, but it permanently commits Prolog to all choices made since the parent goal was invoked. It prunes all alternative choice points for goals to the left of the cut within the clause, as well as alternative clauses for the parent predicate. If any goal to the right of the cut fails, Prolog cannot backtrack past the cut to try alternative bindings.',
    examAnswer: 'Case a: ?- mammal(elephant), !, aquatic(elephant).\n• Result: FAILS (no).\n• Justification: Prolog evaluates mammal(elephant), which succeeds on the first fact. The cut (!) is executed, which succeeds and discards any alternative choice points. Prolog then evaluates aquatic(elephant). There is no fact aquatic(elephant) in the KB, so it fails. Because the cut prevents backtracking to previous subgoals, the entire query immediately FAILS.\n\nCase b: ?- mammal(X), !, bird(X).\n• Result: FAILS (no).\n• Justification: Prolog evaluates mammal(X) and unifies X with the first match: X = elephant. Next, the cut (!) executes and succeeds. The cut commits X = elephant and prunes alternative choices for mammal(X) (dog, whale). Next, Prolog evaluates bird(elephant). This fails. Prolog attempts to backtrack, but the cut prevents backtracking to mammal(X) to try X = dog or X = whale. Hence, the query FAILS.\n\nCase c: ?- (mammal(X) ; bird(X)), !, aquatic(whale).\n• Result: SUCCEEDS with X = elephant.\n• Justification: The disjunction (mammal(X) ; bird(X)) tests the left branch first. mammal(X) matches mammal(elephant), binding X = elephant. The cut (!) is reached and executed, which commits to X = elephant and prunes the right disjunct bird(X) as well as alternative mammals. Next, aquatic(whale) is evaluated. Since aquatic(whale) exists in the knowledge base, it succeeds. The entire query SUCCEEDS with X = elephant.',
    stepByStepSolution: [
      'Recall cut semantics: ! succeeds once, prunes all choice points created since parent goal was entered.',
      'Analyze (a): mammal(elephant) -> T. Cut executes -> choice points pruned. aquatic(elephant) -> F. Backtracking blocked. Result: Fails.',
      'Analyze (b): mammal(X) binds X = elephant. Cut commits X = elephant, prunes dog and whale. bird(elephant) fails. Backtracking blocked. Result: Fails.',
      'Analyze (c): (mammal(X) ; bird(X)) tries mammal(X), binds X = elephant. Cut commits this choice and prunes disjunction. aquatic(whale) succeeds. Result: Succeeds with X = elephant.'
    ],
    finalAnswer: 'Case a: FAILS (cut blocks alternative choices after aquatic fails).\nCase b: FAILS (cut freezes X = elephant; bird(elephant) fails).\nCase c: SUCCEEDS with X = elephant (aquatic(whale) is true in KB).',
    lectureReference: {
      lectureId: 'lec-04',
      lectureTitle: 'Lecture 04 – Control, Cut & State Search',
      concept: 'The Cut Operator (!) and Backtracking',
      slides: 'Slide 30',
      notesExcerpt: 'SWI Prolog: execution, recursion, list, backtracking, cut, fail.'
    }
  },
  {
    id: 'q2-b-ii',
    numberLabel: 'Question 2 (b) (ii)',
    mainQuestion: 2,
    questionText: 'Explain how placing the cut in the wrong place might cause not_aquatic/1 to incorrectly report whales or sharks as non-aquatic. Provide a short example of incorrect code and describe the error.',
    marks: 3,
    topics: ['Negation as Failure', 'Cut-Fail Idiom', 'Red Cut Bugs'],
    lectureIds: ['lec-04'],
    difficulty: 'Medium',
    category: 'Prolog',
    coverageNote: 'Directly supported by Lecture 04 (Slide 30: cut & fail pattern)',
    learningExplanation: 'Negation-as-failure in Prolog is implemented via the cut-fail combination: test if Goal is true; if true, cut alternative branches and deliberately fail. If Goal is not true, fall through to the second clause which succeeds. If the cut is placed BEFORE the test condition, or if the test condition is omitted, the cut commits unconditionally before verifying whether the entity is aquatic.',
    examAnswer: 'Correct Cut-Fail Implementation:\nnot_aquatic(X) :- aquatic(X), !, fail.\nnot_aquatic(_).\n(If X is aquatic, cut prunes the second clause and fail forces failure; otherwise, clause 2 succeeds).\n\nIncorrect Code Example (Cut before test):\nnot_aquatic(X) :- !, aquatic(X).\nnot_aquatic(_).\n\nExplanation of Error:\nWhen ?- not_aquatic(whale) is queried in the buggy code:\n1. The first clause is entered and the cut (!) executes IMMEDIATELY before aquatic(whale) is tested.\n2. The cut prunes clause 2 (not_aquatic(_)).\n3. Next, aquatic(whale) succeeds, causing not_aquatic(whale) to succeed! Thus it incorrectly claims that whale is non-aquatic.\nConversely, if ?- not_aquatic(dog) is queried, the cut executes, aquatic(dog) fails, and because clause 2 was pruned, not_aquatic(dog) fails, incorrectly reporting dog as aquatic!\nMisplacing the cut inverts or destroys the negation logic completely.',
    stepByStepSolution: [
      'Present canonical cut-fail pattern: Pred(X) :- Condition(X), !, fail. Pred(_).',
      'Demonstrate common misplaced cut error: not_aquatic(X) :- !, aquatic(X).',
      'Trace execution on whale: Cut commits to clause 1, aquatic(whale) is true, so not_aquatic(whale) returns true (false positive).',
      'Trace execution on dog: Cut commits to clause 1, aquatic(dog) fails, whole predicate fails (false negative).',
      'Conclude that cut must strictly follow the condition to properly guard the cut-fail idiom.'
    ],
    finalAnswer: 'Placing the cut before the condition (e.g. not_aquatic(X) :- !, aquatic(X).) causes unconditional commitment to the first clause, yielding inverted truth values and incorrectly reporting whales as non-aquatic.',
    lectureReference: {
      lectureId: 'lec-04',
      lectureTitle: 'Lecture 04 – Control, Cut & State Search',
      concept: 'Cut-Fail Combination for Negation',
      slides: 'Slide 30',
      notesExcerpt: 'The cut and fail idiom is used to express negation-as-failure in Prolog.'
    }
  },
  {
    id: 'q2-c',
    numberLabel: 'Question 2 (c)',
    mainQuestion: 2,
    questionText: 'Consider the following predicate:\nmystery(List1, List2, Result).\nmystery([], L2, L2).\nmystery(L1, [], L1) :- L1 = [_|_].\nmystery([H1|T1], [H2|T2], [H1|T3]) :- mystery(T1, [H2|T2], T3).\nmystery([H1|T1], [H2|T2], [H2|T3]) :- mystery([H1|T1], T2, T3).\n\n(i) What does the following query produce, if semi-colon, ;, is used to find more than one answer?\n|? mystery([1,2], [a,b], R).\n(ii) Give a brief English description of the predicate mystery.\n(iii) Replace the last two rules of the predicate mystery with a single rule.',
    marks: 6,
    topics: ['Prolog Lists', 'Interleaving', 'Backtracking', 'Pattern Matching'],
    lectureIds: ['lec-04'],
    difficulty: 'Hard',
    category: 'Prolog',
    coverageNote: 'Directly supported by Lecture 04 (Slide 30: lists, recursion, backtracking)',
    learningExplanation: 'The predicate mystery/3 takes two lists and non-deterministically generates all possible order-preserving interleavings (shuffles) of their elements into a single list Result. At each step, either the head of the first list (H1) or the head of the second list (H2) is selected as the head of the result, recursing on the remainder. For inputs [1,2] and [a,b], there are 6 distinct interleavings (since (2+2)! / (2! * 2!) = 6).',
    examAnswer: '(i) Query Results for |? mystery([1,2], [a,b], R):\nProlog generates all 6 order-preserving interleavings in the following sequence:\n1. R = [1, 2, a, b] ;\n2. R = [1, a, 2, b] ;\n3. R = [1, a, b, 2] ;\n4. R = [a, 1, 2, b] ;\n5. R = [a, 1, b, 2] ;\n6. R = [a, b, 1, 2] ;\nno\n\n(ii) English Description:\nThe predicate mystery(List1, List2, Result) generates all possible interleavings (or shuffles) of two lists List1 and List2 into Result, such that the relative ordering of elements originating from each respective input list is strictly preserved.\n\n(iii) Replacing the last two rules with a single rule:\nUsing Prolog disjunction (;):\nmystery([H1|T1], [H2|T2], [H|T3]) :-\n    ( H = H1, mystery(T1, [H2|T2], T3)\n    ; H = H2, mystery([H1|T1], T2, T3)\n    ).',
    stepByStepSolution: [
      'Step 1: Calculate total number of interleavings for two lists of length 2: 4! / (2! * 2!) = 24 / 4 = 6 combinations.',
      'Step 2: Trace execution tree systematically: First explore choosing H1 = 1, then H1 = 2 -> [1, 2, a, b].',
      'Step 3: Backtrack to second position: choose H1 = 1, then H2 = a -> [1, a, 2, b] and [1, a, b, 2].',
      'Step 4: Backtrack to first position: choose H2 = a, then H1 = 1 -> [a, 1, 2, b] and [a, 1, b, 2].',
      'Step 5: Finally choose H2 = a, H2 = b -> [a, b, 1, 2].',
      'Step 6: Describe functionality: Interleaving / order-preserving merge.',
      'Step 7: Combine rules 3 and 4 using logical OR (;) over the head element H.'
    ],
    finalAnswer: '(i) 6 interleavings: [1,2,a,b], [1,a,2,b], [1,a,b,2], [a,1,2,b], [a,1,b,2], [a,b,1,2].\n(ii) Interleaves two lists preserving internal element order.\n(iii) mystery([H1|T1], [H2|T2], [H|T3]) :- (H = H1, mystery(T1, [H2|T2], T3) ; H = H2, mystery([H1|T1], T2, T3)).',
    lectureReference: {
      lectureId: 'lec-04',
      lectureTitle: 'Lecture 04 – Control, Cut & State Search',
      concept: 'Prolog List Manipulation & Backtracking',
      slides: 'Slide 30',
      notesExcerpt: 'List processing, head-tail splitting [H|T], non-deterministic backtracking.'
    },
    codeSnippet: 'mystery([H1|T1], [H2|T2], [H|T3]) :-\n    ( H = H1, mystery(T1, [H2|T2], T3)\n    ; H = H2, mystery([H1|T1], T2, T3)\n    ).'
  },

  // ==========================================
  // QUESTION 3: ARTIFICIAL COGNITIVE SYSTEMS (25 MARKS)
  // ==========================================
  {
    id: 'q3-a-i',
    numberLabel: 'Question 3 (a) (i)',
    mainQuestion: 3,
    questionText: 'Human cognition includes perception, memory, learning, and problem solving. Explain how at least three of these cognitive functions are modelled within modern AI systems. Give one practical application for each function you describe.',
    marks: 4,
    topics: ['Cognitive Functions', 'Perception', 'Memory', 'Learning', 'Problem Solving'],
    lectureIds: ['lec-05'],
    difficulty: 'Medium',
    category: 'Cognitive Systems',
    coverageNote: 'Module Syllabus Grounding: Artificial Cognitive Systems (CM 3321 Cognitive Architectures & Modelling)',
    learningExplanation: 'Cognitive AI architectures mirror human mental faculties. Perception translates raw continuous sensory inputs into structured symbolic concepts. Memory maintains past states, episodic logs, and semantic knowledge bases. Learning updates behavioral policies or parameter weights from feedback. Problem solving performs heuristic search and planning across state spaces to reach designated goals.',
    examAnswer: 'Modeling Three Cognitive Functions in Modern AI Systems:\n\n1. Perception:\n• Modeling: Modeled through multi-layered Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) that transform continuous raw sensory signals (pixels, audio waveforms, LiDAR point clouds) into abstract semantic representations and object categorizations.\n• Practical Application: Autonomous Vehicle Obstacle Detection (e.g., detecting pedestrians, traffic lights, and road lanes in real time from multi-camera video streams).\n\n2. Memory:\n• Modeling: Modeled through hierarchical architectures separating short-term working memory (e.g., hidden states in Transformers/LSTMs or Prolog working memory) from long-term memory, which includes Episodic Memory (vector databases / replay buffers) and Semantic Memory (knowledge graphs / ontologies).\n• Practical Application: Clinical Decision Support Systems that retrieve patient histories and medical ontology facts to advise doctors on diagnosis.\n\n3. Problem Solving:\n• Modeling: Modeled as heuristic state-space search, automated planning, and constraint satisfaction (e.g., A* search, Monte Carlo Tree Search, or Prolog backward chaining as in the Monkey and Banana problem).\n• Practical Application: Automated Warehouse Logistics (e.g., automated robots calculating optimal collision-free routes to pick and pack orders).',
    stepByStepSolution: [
      'Select 3 core cognitive functions: Perception, Memory, Problem Solving.',
      'For Perception: Describe sensory processing pipeline from signal to symbol; give autonomous driving application.',
      'For Memory: Describe working memory vs long-term semantic knowledge graphs; give clinical decision support application.',
      'For Problem Solving: Describe goal-directed state-space search (connecting to Monkey & Banana search covered in Lecture 04); give robotic route planning application.'
    ],
    finalAnswer: 'Perception (CNNs/Transformers in Autonomous Driving), Memory (Knowledge Graphs in Medical Systems), and Problem Solving (State-Space Search in Logistics Planning) accurately model human cognition.',
    lectureReference: {
      lectureId: 'lec-05',
      lectureTitle: 'Lecture 05 – Artificial Cognitive Systems & Architectures',
      concept: 'Cognitive Function Modeling',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Cognitive systems integrate perception, memory, learning, and reasoning into coherent agent architectures.'
    }
  },
  {
    id: 'q3-a-ii',
    numberLabel: 'Question 3 (a) (ii)',
    mainQuestion: 3,
    questionText: 'Select one real-world application (self-driving cars, surgical robots, rescue robots, household robots, social robots...). Discuss how advancements in neuroscience, AI learning, and sensory processing will transform the cognitive abilities of robots in that domain over the next decade.',
    marks: 4,
    topics: ['Robotics', 'Neuroscience Inspiration', 'Sensory Processing', 'Future Cognitive Robotics'],
    lectureIds: ['lec-05'],
    difficulty: 'Medium',
    category: 'Cognitive Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Cognitive Robotics & Emerging AI Systems',
    learningExplanation: 'This question assesses the ability to synthesize cross-disciplinary advances (neuroscience, machine learning, and multimodal sensors) in an applied robotic system. Using Surgical Robots or Self-Driving Cars as a prime exemplar demonstrates deep cognitive integration.',
    examAnswer: 'Selected Application: Autonomous Surgical Robots\n\n1. Sensory Processing Advancements:\n• High-resolution tactile/haptic sensors and hyperspectral imaging will allow surgical robots to perceive tissue elasticity, blood flow, and subsurface micro-vascular structures far beyond human tactile perception.\n• Neuromorphic event-based vision sensors will provide microsecond latency feedback during delicate microsurgical incisions.\n\n2. AI Learning Advancements:\n• Reinforcement Learning from Human Feedback (RLHF) and self-supervised foundation models will enable robots to learn surgical motor skills from millions of hours of endoscopic video.\n• Transfer learning will allow robots to generalize surgical maneuvers across anatomical variations and unanticipated patient morphologies.\n\n3. Neuroscience Inspiration:\n• Cerebellum-inspired predictive motor control will allow sub-millimeter trajectory stabilization, canceling physiological tremors and adapting to dynamic tissue deformation in real time.\n• Cognitive architectures incorporating dual-process theory (fast intuitive reflexes combined with slow deliberate causal reasoning) will ensure the robot can safely pause and alert the human surgeon when encountering unmodeled surgical anomalies.\n\nSummary Impact: Over the next decade, surgical robots will transition from passive tele-operated tools into semi-autonomous cognitive surgical partners capable of executing routine phases (e.g., suturing, tissue resection) autonomously with verifiable safety guarantees.',
    stepByStepSolution: [
      'Select a concrete application domain: Autonomous Surgical Robots.',
      'Address Sensory Processing: Haptic sensing, hyperspectral imaging, event-based neuromorphic cameras.',
      'Address AI Learning: Imitation learning, self-supervised foundation models, reinforcement learning.',
      'Address Neuroscience: Cerebellar motor loops, dual-process cognitive control.',
      'Synthesize 10-year transformation trajectory.'
    ],
    finalAnswer: 'Advancements in neuromorphic haptics, imitation learning, and cerebellar predictive control will evolve surgical robots from tele-operated instruments into proactive cognitive surgical partners.',
    lectureReference: {
      lectureId: 'lec-05',
      lectureTitle: 'Lecture 05 – Artificial Cognitive Systems & Architectures',
      concept: 'Cognitive Robotics & Sensory Integration',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Neuroscience-inspired control and multimodal perception in embodied cognitive agents.'
    }
  },
  {
    id: 'q3-b-i',
    numberLabel: 'Question 3 (b) (i)',
    mainQuestion: 3,
    questionText: 'Discuss how Artificial Cognitive Systems combine symbolic reasoning and non-symbolic learning to solve real-world problems.',
    marks: 3,
    topics: ['Neuro-Symbolic AI', 'Symbolic Reasoning', 'Non-Symbolic Learning'],
    lectureIds: ['lec-05'],
    difficulty: 'Medium',
    category: 'Cognitive Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Hybrid Neuro-Symbolic Cognitive Systems',
    learningExplanation: 'Symbolic AI excels at discrete, deterministic logic, rule verification, auditable explanations, and compositionality. Non-symbolic (connectionist / neural) AI excels at perception, pattern recognition, continuous optimization, and tolerance to noisy data. Modern cognitive systems combine them in hybrid architectures (Neuro-Symbolic AI) where neural networks extract symbolic facts from raw unstructured data, and symbolic inference engines reason over those facts according to domain rules.',
    examAnswer: 'Combination of Symbolic Reasoning and Non-Symbolic Learning:\n\n1. Complementary Strengths:\n• Non-symbolic learning (Deep Neural Networks): Operates on continuous perceptual data, robust against sensory noise, excelling at perceptual categorization (e.g., "What is this image?").\n• Symbolic reasoning (Logic, Ontologies, Prolog): Operates on discrete tokens, excelling at deductive certainty, compositionality, planning, and auditable explanation (e.g., "Given this situation, what logically follows?").\n\n2. Hybrid Integration Mechanisms:\n• Perception-to-Logic Pipeline: Neural networks process raw inputs (e.g., medical scans or camera feeds) and emit grounded symbolic facts (e.g., tumor_size(large), location(brain)).\n• Symbolic Guardrails & Verification: A symbolic rule engine (e.g., Prolog-based safety constraints) checks whether the proposed actions violate safety invariants, legal boundaries, or logical axioms.\n• Neuro-Symbolic Loss Functions: Symbolic knowledge is compiled into differentiable loss terms, guiding neural training to obey physical or logical laws (e.g., conservation of mass, transitivity).\n\nReal-World Example: In autonomous driving, neural networks detect pedestrians and road boundaries, while a symbolic inference engine verifies that navigation maneuvers strictly satisfy traffic laws and safety distance axioms.',
    stepByStepSolution: [
      'Define non-symbolic AI (connectionist, continuous, data-driven, noisy pattern recognition).',
      'Define symbolic AI (discrete, rule-based, deductive, verifiable, interpretable).',
      'Explain hybrid synergy: Neural perception produces symbols; symbolic reasoner applies deterministic logic.',
      'Provide concrete example: Autonomous driving combining vision classification with formal safety rules.'
    ],
    finalAnswer: 'Artificial Cognitive Systems employ hybrid neuro-symbolic pipelines where neural networks handle noisy perception and output symbols, while symbolic engines enforce rigorous logic, safety constraints, and explainability.',
    lectureReference: {
      lectureId: 'lec-05',
      lectureTitle: 'Lecture 05 – Artificial Cognitive Systems & Architectures',
      concept: 'Neuro-Symbolic Integration',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Bridging the semantic gap between connectionist perception and symbolic deliberative cognition.'
    }
  },
  {
    id: 'q3-b-ii',
    numberLabel: 'Question 3 (b) (ii)',
    mainQuestion: 3,
    questionText: 'Describe three major challenges in designing cognitive systems that can mimic human intelligence.',
    marks: 3,
    topics: ['Common Sense Reasoning', 'Symbol Grounding Problem', 'Generalization & Transfer'],
    lectureIds: ['lec-05'],
    difficulty: 'Medium',
    category: 'Cognitive Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Cognitive Science & Human-level AI Challenges',
    learningExplanation: 'Mimicking human cognitive capabilities reveals profound foundational bottlenecks in current AI: the Symbol Grounding Problem (how abstract symbols acquire real-world physical meaning), Common Sense & Causal Reasoning (humans possess immense intuitive physics and social heuristics that cannot be exhaustively enumerated), and Continual/Transfer Learning without catastrophic forgetting.',
    examAnswer: 'Three Major Challenges in Designing Human-like Cognitive Systems:\n\n1. The Symbol Grounding Problem:\n• Challenge: Abstract symbols inside a computer (such as parent(X, Y) or table(T)) have no intrinsic connection to physical objects in reality; they are merely syntax. Bridging the semantic gap between continuous sensorimotor experience and discrete symbolic concepts remains fundamentally difficult.\n\n2. Common Sense and Causal Reasoning:\n• Challenge: Humans possess intuitive knowledge of physical dynamics (e.g., water spills from an inverted cup) and social norms. Current AI relies predominantly on statistical correlation rather than true counterfactual and causal reasoning (Judea Pearl\'s causal hierarchy), causing brittleness when exposed to novel edge cases.\n\n3. Catastrophic Forgetting & Generalization Across Domains:\n• Challenge: When neural cognitive systems learn new tasks, incoming weight updates overwrite previously learned competencies (catastrophic forgetting). Humans exhibit continuous lifelong learning and can transfer insights across radically different domains (analogical reasoning) from only a few examples.',
    stepByStepSolution: [
      'Identify Challenge 1: The Symbol Grounding Problem (Harnad\'s definition: connecting symbols to sensorimotor realities).',
      'Identify Challenge 2: Common Sense and Causal Reasoning (distinguishing correlation from causation, intuitive physics).',
      'Identify Challenge 3: Catastrophic Forgetting vs Lifelong Transfer Learning.',
      'Explain practical implications of each challenge on artificial cognitive architectures.'
    ],
    finalAnswer: 'The three primary challenges are: 1) The Symbol Grounding Problem, 2) Common Sense and Causal Reasoning, and 3) Catastrophic Forgetting during continual multi-domain learning.',
    lectureReference: {
      lectureId: 'lec-05',
      lectureTitle: 'Lecture 05 – Artificial Cognitive Systems & Architectures',
      concept: 'Foundational Challenges in Cognitive AI',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Symbol grounding, frame problem, and common-sense knowledge acquisition bottlenecks.'
    }
  },
  {
    id: 'q3-b-iii',
    numberLabel: 'Question 3 (b) (iii)',
    mainQuestion: 3,
    questionText: 'Explain how cognitive systems perform symbolic manipulation in tasks such as language understanding, mathematical reasoning, or knowledge-based decision-making. Provide examples of AI systems that rely on symbolic processing.',
    marks: 3,
    topics: ['Symbolic Manipulation', 'Ontologies', 'Automated Theorem Provers', 'Expert Systems'],
    lectureIds: ['lec-03', 'lec-05'],
    difficulty: 'Medium',
    category: 'Cognitive Systems',
    coverageNote: 'Supported by Lecture 03 (Prolog Symbolic Unification) and CM 3321 Module Syllabus',
    learningExplanation: 'Symbolic manipulation operates via formal grammar rules, predicate logic, unification, and term rewriting. Expressions are represented as trees or graphs where variables are substituted according to syntactical pattern matching rules.',
    examAnswer: 'Mechanism of Symbolic Manipulation:\n1. Representation: Information is encoded as discrete syntactic structures (terms, predicates, production rules, or parse trees), such as father(X, Z) or (A + B)^2.\n2. Manipulation Mechanisms:\n   • Pattern Matching & Unification: Finding variable substitutions that make two symbolic terms identical (e.g., unifying manager(kamal, Z) with manager(kamal, nimal)).\n   • Term Rewriting & Inference: Applying formal rewrite rules (e.g., applying De Morgan\'s laws, algebraic simplification, or resolution refutation).\n   • Graph Traversal: Traversing taxonomic ontologies via inheritance (e.g., IS-A hierarchies).\n\nExamples of AI Systems Relying on Symbolic Processing:\n1. Mathematical Reasoning: Wolfram Alpha / Computer Algebra Systems (Mathematica, Maple) using term-rewriting algorithms for symbolic integration and algebraic proofs.\n2. Language Understanding & Ontological Reasoning: Cyc / WordNet, maintaining millions of formalized commonsense assertions to disambiguate linguistic meaning.\n3. Knowledge-Based Decision-Making: MYCIN and Prolog Expert Systems, using backward-chaining inference engines to deduce medical or engineering diagnostics.',
    stepByStepSolution: [
      'Define symbolic representation (terms, predicates, grammar trees).',
      'Explain manipulation operators: Unification, term rewriting, deductive inference.',
      'Show application across language, math, and decision-making.',
      'Cite concrete established symbolic AI systems: Wolfram Alpha, Cyc, Prolog/MYCIN.'
    ],
    finalAnswer: 'Cognitive systems manipulate symbols via unification, formal rewrite rules, and logical inference trees. Notable examples include Wolfram Alpha, Cyc, and Prolog inference engines.',
    lectureReference: {
      lectureId: 'lec-03',
      lectureTitle: 'Lecture 03 – Prolog Foundations & Recursive Reasoning',
      concept: 'Atoms, Variables & Unification',
      slides: 'Slide 18, 19',
      notesExcerpt: 'Arguments of relations can be constants (atoms) or general objects (variables). Goals are satisfied via unification.'
    }
  },
  {
    id: 'q3-c',
    numberLabel: 'Question 3 (c)',
    mainQuestion: 3,
    questionText: 'Humans solve problems using memory, reasoning, perception, planning, and learning. Explain how these components are implemented in Artificial Cognitive Systems. Your answer should cover following aspects:\n• symbolic representation (rules, logic, search)\n• non-symbolic representation (neural networks, learning)\n• how modern AI blends the two\n• limitations of current cognitive technology',
    marks: 5,
    topics: ['Cognitive Components', 'Symbolic vs Non-Symbolic', 'Hybrid AI', 'Limitations'],
    lectureIds: ['lec-04', 'lec-05'],
    difficulty: 'Hard',
    category: 'Cognitive Systems',
    coverageNote: 'Connected to Lecture 04 (Monkey & Banana State Planning) and CM 3321 Cognitive Architecture Syllabus',
    learningExplanation: 'This comprehensive essay-style exam question synthesizes all five cognitive pillars (memory, reasoning, perception, planning, learning) across both symbolic and sub-symbolic paradigms, exploring modern hybrid architectures and foundational limitations.',
    examAnswer: 'Comprehensive Implementation of Cognitive Components in Artificial Cognitive Systems:\n\n1. Component Implementation:\n• Perception: Implemented via non-symbolic deep neural networks (CNNs, Vision Transformers) converting unstructured sensory streams into feature representations. In symbolic systems, perception is represented as instantiated sensor predicates.\n• Memory: Implemented as Working Memory (transient blackboard/variable bindings), Semantic Memory (symbolic knowledge graphs and ontologies), and Episodic Memory (neural replay buffers and vector embeddings).\n• Reasoning: Implemented symbolically via formal deduction, resolution, and forward/backward chaining (Prolog). Implemented sub-symbolically via attention mechanisms and probabilistic vector transformations.\n• Planning: Implemented symbolically via state-space search (e.g., A* search, STRIPS, and Prolog state transitions as demonstrated in the Monkey and Banana problem: move(State1, Action, State2)).\n• Learning: Implemented sub-symbolically via backpropagation and reinforcement learning (gradient descent on loss functions); implemented symbolically via inductive logic programming (ILP).\n\n2. Symbolic vs. Non-Symbolic Representations:\n• Symbolic: Explicit, discrete, compositional, deterministic, verifiable, but brittle when facing sensory noise and requires manual knowledge engineering.\n• Non-Symbolic: Continuous distributed representations, resilient to noise, self-learning from data, but opaque (black-box), computationally hungry, and prone to hallucinations/unprovable behavior.\n\n3. Modern AI Blending (Neuro-Symbolic AI):\n• Modern systems integrate neural perception front-ends with symbolic reasoning back-ends (e.g., AlphaGeometry, DeepProbLog, Knowledge-Graph-augmented LLMs). Neural networks propose candidate solutions or extract predicates, while symbolic solvers rigorously verify correctness against formal rules.\n\n4. Limitations of Current Cognitive Technology:\n• Lack of true common-sense understanding and counterfactual causal reasoning.\n• Extreme energy consumption compared to the human brain (~20 Watts).\n• Brittleness outside training distributions and absence of genuine subjective consciousness or self-reflection.',
    stepByStepSolution: [
      'Break down the 5 cognitive functions: Perception, Memory, Reasoning, Planning, Learning.',
      'Contrast symbolic implementations (logic, rules, search trees) against non-symbolic implementations (vectors, weights, gradients).',
      'Explain state-space planning connecting directly to the Monkey and Banana problem from Lecture 04 (state(Monkey, OnBox, Box, Has)).',
      'Describe hybrid neuro-symbolic blending paradigms.',
      'Detail core technological limitations (energy, causality, common sense).'
    ],
    finalAnswer: 'Modern Artificial Cognitive Systems blend sub-symbolic neural perception and learning with symbolic logic, search-based planning, and ontologies, yet remain constrained by high energy demands, lack of common sense, and causal opacity.',
    lectureReference: {
      lectureId: 'lec-04',
      lectureTitle: 'Lecture 04 – Control, Cut & State Search',
      concept: 'State-Space Representation and Planning (Monkey & Banana)',
      slides: 'Slide 33-37',
      notesExcerpt: 'move(state(P, onfloor, P, H), climb, state(P, onbox, P, H)). State transitions model cognitive planning.'
    }
  },

  // ==========================================
  // QUESTION 4: EXPERT SYSTEMS (25 MARKS)
  // ==========================================
  {
    id: 'q4-a-i',
    numberLabel: 'Question 4 (a) (i)',
    mainQuestion: 4,
    questionText: 'Explain how Expert Systems demonstrate cognition-inspired capabilities such as reasoning, knowledge storage, inference, and explanation.',
    marks: 3,
    topics: ['Expert Systems', 'Inference Engine', 'Knowledge Base', 'Explanation Facility'],
    lectureIds: ['lec-06'],
    difficulty: 'Easy',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Expert Systems Architecture and Cognitive Foundations',
    learningExplanation: 'An Expert System emulates the decision-making ability of a human specialist. Its architecture decomposes cognitive performance into distinct functional modules: Knowledge Base (storage), Working Memory (context), Inference Engine (reasoning), and Explanation Facility (transparency).',
    examAnswer: 'Cognition-Inspired Capabilities of Expert Systems:\n\n1. Knowledge Storage (The Knowledge Base):\n• Mimics human semantic memory by storing domain expertise as structured IF-THEN production rules, frames, or ontologies representing facts, heuristics, and relationships.\n\n2. Reasoning & Inference (The Inference Engine):\n• Mimics human logical thought by applying deductive inference mechanisms (Forward Chaining / Data-Driven or Backward Chaining / Goal-Driven) to match current working memory facts against stored knowledge rules to derive new conclusions.\n\n3. Explanation (The Explanation Facility):\n• Mimics human metacognition and communicative transparency by answering "HOW" a conclusion was reached (displaying the firing rule trace) and "WHY" a specific piece of information is requested (displaying the pending goal).',
    stepByStepSolution: [
      'Map human cognitive capabilities to Expert System architectural components.',
      'Knowledge Storage → Knowledge Base (production rules and facts).',
      'Reasoning & Inference → Inference Engine (pattern matching, forward/backward chaining).',
      'Explanation → Explanation Facility (trace generation, How/Why justifications).'
    ],
    finalAnswer: 'Expert Systems emulate cognition via a Knowledge Base (semantic storage), an Inference Engine (deductive reasoning via chaining), and an Explanation Facility (justifying conclusions via rule traces).',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Expert System Cognitive Architecture',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Separation of knowledge base (facts & rules) from inference engine (domain-independent reasoning).'
    }
  },
  {
    id: 'q4-a-ii',
    numberLabel: 'Question 4 (a) (ii)',
    mainQuestion: 4,
    questionText: 'When an experienced engineer troubleshoots a broken machine, they observe symptoms, recall past cases, and narrow down causes before recommending a fix. Identify four cognitive-like features that an Expert System must possess to perform a similar troubleshooting process.',
    marks: 4,
    topics: ['Troubleshooting', 'Diagnostic Reasoning', 'Heuristic Search', 'Case-Based Reasoning'],
    lectureIds: ['lec-06'],
    difficulty: 'Medium',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Diagnostic Systems and Heuristic Troubleshooting',
    learningExplanation: 'Engineering troubleshooting requires sensory data acquisition, episodic memory retrieval, causal hypothesis generation, and prescriptive planning. An Expert System must implement functional counterparts for each of these steps.',
    examAnswer: 'Four Cognitive-like Features for Expert Troubleshooting:\n\n1. Dynamic Symptom Acquisition & Working Memory Updating:\n• The ability to interactively query the technician or ingest sensor telemetry, dynamically updating its current state representation with observed abnormal symptoms.\n\n2. Heuristic & Case-Based Memory Recall:\n• The ability to recall past failure episodes and associate observed symptom patterns with probable failure modes using heuristic weights, fuzzy rules, or case-based retrieval.\n\n3. Goal-Driven Hypothesis Pruning (Backward Chaining):\n• The ability to formulate candidate root-cause hypotheses and work backwards to test which causes are logically supported by the facts, actively pruning contradictory branches.\n\n4. Prescriptive Action Recommendation & Justification:\n• The ability to output a clear repair prescription ranked by cost/effectiveness, accompanied by a step-by-step explanatory causal trace detailing why that specific failure occurred.',
    stepByStepSolution: [
      'Deconstruct the engineer\'s workflow: Observe symptoms → Recall past cases → Narrow down causes → Recommend fix.',
      'Feature 1: Interactive Symptom Ingestion & Dynamic Working Memory.',
      'Feature 2: Case-Based / Associative Knowledge Retrieval.',
      'Feature 3: Backward Chaining Diagnostic Hypothesis Testing.',
      'Feature 4: Prescriptive Action Generation with Causal Explanations.'
    ],
    finalAnswer: 'The 4 features are: 1) Dynamic Symptom Acquisition, 2) Heuristic/Case-Based Memory Recall, 3) Goal-Driven Diagnostic Pruning (Backward Chaining), and 4) Actionable Repair Prescription with Explanations.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Diagnostic Troubleshooting Engines',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Backward-chaining diagnostic trees evaluate symptom evidence to isolate machine faults.'
    }
  },
  {
    id: 'q4-b-i',
    numberLabel: 'Question 4 (b) (i)',
    mainQuestion: 4,
    questionText: 'Identify which of the following statements are true or false. In each case, clearly justify your answer:\n"An Expert System must always have a human expert actively assisting during reasoning to deliver accurate results."',
    marks: 3,
    topics: ['Expert Systems Autonomy', 'Knowledge Engineering'],
    lectureIds: ['lec-06'],
    difficulty: 'Easy',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Principles of Expert Systems',
    learningExplanation: 'A foundational motivation for creating Expert Systems is to capture and preserve scarce human expertise so the system can operate independently when the human expert is unavailable, asleep, or located elsewhere.',
    examAnswer: 'Statement: FALSE.\n\nJustification:\nA human expert is required only during the knowledge acquisition and design phase (to help the knowledge engineer extract and validate domain rules and heuristics). Once deployed, an Expert System operates autonomously: its inference engine reasons independently over the knowledge base and input facts to deliver accurate results without requiring continuous real-time assistance from a human expert.',
    stepByStepSolution: [
      'Evaluate claim: Does an expert system require a human expert during runtime inference?',
      'Identify role of human expert: Expert participates in knowledge engineering phase, not runtime execution.',
      'Confirm conclusion: FALSE with justification.'
    ],
    finalAnswer: 'FALSE. Human experts assist during system design and knowledge elicitation, but the deployed system functions completely autonomously during runtime inference.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Role of Knowledge Engineers and Domain Experts',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Expert systems preserve scarce expertise and operate autonomously without the expert present.'
    }
  },
  {
    id: 'q4-b-ii',
    numberLabel: 'Question 4 (b) (ii)',
    mainQuestion: 4,
    questionText: 'Identify which of the following statements are true or false. In each case, clearly justify your answer:\n"In a rule-based Expert System, the inference engine can apply both forward chaining and backward chaining to reach conclusions, depending on the problem domain."',
    marks: 3,
    topics: ['Forward Chaining', 'Backward Chaining', 'Inference Engine'],
    lectureIds: ['lec-06'],
    difficulty: 'Easy',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Inference Strategies (Forward vs Backward Chaining)',
    learningExplanation: 'Rule-based inference engines support both data-driven (forward chaining) and goal-driven (backward chaining) strategies, as well as bi-directional hybrid chaining, selected based on the nature of the domain.',
    examAnswer: 'Statement: TRUE.\n\nJustification:\nThe inference engine can be configured to use Forward Chaining (data-driven: starting with known facts and firing rules to deduce new facts, ideal for monitoring, synthesis, and planning) or Backward Chaining (goal-driven: starting with a hypothesized goal and checking if supporting facts exist, ideal for diagnosis and troubleshooting), or even bi-directional chaining depending on the problem characteristics.',
    stepByStepSolution: [
      'Evaluate claim: Can an inference engine use forward and backward chaining?',
      'Define forward chaining: Data-driven (Facts → Rules → Conclusions).',
      'Define backward chaining: Goal-driven (Hypothesis → Subgoals → Facts).',
      'Confirm conclusion: TRUE.'
    ],
    finalAnswer: 'TRUE. Forward chaining is applied to data-driven synthesis/monitoring problems, while backward chaining is applied to goal-driven diagnostic/troubleshooting tasks.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Forward vs Backward Chaining',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Forward chaining derives consequences from known facts; backward chaining verifies hypotheses from goals.'
    }
  },
  {
    id: 'q4-b-iii',
    numberLabel: 'Question 4 (b) (iii)',
    mainQuestion: 4,
    questionText: 'Identify which of the following statements are true or false. In each case, clearly justify your answer:\n"Expert Systems cannot learn new knowledge automatically; therefore, they are unsuitable for domains that change frequently, such as cybersecurity or electronic trading systems."',
    marks: 3,
    topics: ['Expert Systems Adaptability', 'Rule Engines in Dynamic Domains', 'Hybrid Systems'],
    lectureIds: ['lec-06'],
    difficulty: 'Medium',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Expert Systems in Real-Time & Dynamic Domains',
    learningExplanation: 'While classical standalone 1980s expert systems lacked self-learning mechanisms, modern expert systems and rule engines are ubiquitous in cybersecurity (e.g., SIEM correlation engines, Snort IDS rules) and financial trading (algorithmic compliance and execution engines) because rule updates can be pushed in real time, and hybrid systems integrate machine learning with symbolic rule execution.',
    examAnswer: 'Statement: FALSE.\n\nJustification:\n1. Rapid Rule Deployability: Although traditional expert systems rely on external knowledge engineering rather than unsupervised self-learning, rules can be updated, hot-swapped, and deployed in real-time (e.g., updating firewall rules, Snort intrusion detection signatures, or algorithmic trading risk thresholds within seconds).\n2. Unrivaled Deterministic Speed & Auditability: High-frequency trading and cybersecurity demand sub-millisecond, deterministic execution and strict compliance guardrails that statistical ML models cannot guarantee alone.\n3. Modern Hybrid Implementations: Modern systems in these domains combine machine learning (which automatically detects novel anomalous patterns) with rule-based expert systems (which enforce deterministic risk limits and execute responses). Therefore, they are highly suitable and widely used in these domains.',
    stepByStepSolution: [
      'Analyze the two premises in the statement: "cannot learn automatically" (historically true of classical ES) and "therefore unsuitable for dynamic domains" (false conclusion).',
      'Examine real-world use cases: Snort, Zeek, SIEMs in cybersecurity; order validation and risk management in algorithmic trading.',
      'Explain that declarative rules can be updated dynamically and combined with machine learning in hybrid engines.',
      'Conclude FALSE with detailed domain justification.'
    ],
    finalAnswer: 'FALSE. Rule-based systems are heavily used in cybersecurity and financial trading because rules can be hot-patched instantly and provide deterministic, auditable microsecond execution, especially when coupled with ML in hybrid architectures.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Real-Time Rule Engines & Dynamic Domains',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Rule engines in cybersecurity and financial systems provide deterministic low-latency compliance.'
    }
  },
  {
    id: 'q4-c-i',
    numberLabel: 'Question 4 (c) (i)',
    mainQuestion: 4,
    questionText: 'A large bank plans to deploy an Expert System to automate loan approval decisions for different types of customers (students, salaried employees, business owners, etc.). The system must be fair, transparent, and able to justify rejections.\n\nIdentify and justify the types of rules, domain knowledge, and reasoning techniques that such a system should use.',
    marks: 3,
    topics: ['Financial Expert Systems', 'Rule Classification', 'Inference Strategy'],
    lectureIds: ['lec-06'],
    difficulty: 'Medium',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Application of Knowledge-Based Systems',
    learningExplanation: 'A banking loan system must handle diverse customer classes (students, salaried employees, business owners) through specialized rule categories: eligibility criteria, financial stability heuristics, and regulatory compliance rules, coordinated by mixed chaining.',
    examAnswer: 'System Architecture for Bank Loan Approval:\n\n1. Types of Rules:\n• Eligibility & Boundary Rules: Hard constraints (e.g., minimum age ≥ 18, valid citizenship/residency, credit score ≥ 600).\n• Customer-Specific Heuristic Rules:\n  - Students: Evaluate guarantor income, enrollment status, program employability, and loan repayment grace period.\n  - Salaried Employees: Debt-to-Income (DTI) ratio ≤ 40%, minimum 6 months steady employment.\n  - Business Owners: 2+ years verified profitability, debt-service coverage ratio (DSCR) ≥ 1.25, cash flow stability.\n• Regulatory Compliance Rules: Non-discrimination constraints strictly barring protected demographic attributes (race, gender, religion) from entering decision logic.\n\n2. Domain Knowledge Representation:\n• Hierarchical Object-Oriented Frames / Ontologies: Representing customer types as subclasses of Applicant, inheriting shared attributes while defining specialized fields.\n• Working Memory: Storing applicant profile, verified bank statements, credit bureau feeds, and loan terms.\n\n3. Reasoning Techniques:\n• Forward Chaining for Initial Assessment: Ingests applicant facts to compute eligibility, calculate DTI/DSCR metrics, and classify the risk tier.\n• Backward Chaining for Rejection Analysis: When a loan fails threshold criteria, backward chaining evaluates specific subgoals (e.g., "Is guarantor sufficient?") to determine exact root-cause failure points for customer justification.',
    stepByStepSolution: [
      'Identify customer archetypes: Student, Salaried, Business Owner.',
      'Formulate rule categories: Hard eligibility, customer-specific financial heuristics, regulatory anti-bias rules.',
      'Select domain knowledge representation: Object-oriented frames / ontologies.',
      'Justify reasoning techniques: Forward chaining for qualification assessment; backward chaining to diagnose specific deficiencies upon failure.'
    ],
    finalAnswer: 'The system should employ customer-specific financial rules, regulatory compliance constraints, frame-based applicant ontologies, and a hybrid forward/backward chaining inference engine.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Rule-Based System Design for Financial Applications',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Production rules represent regulatory limits and heuristic customer scoring.'
    }
  },
  {
    id: 'q4-c-ii',
    numberLabel: 'Question 4 (c) (ii)',
    mainQuestion: 4,
    questionText: 'How the system will generate explanations to comply with ethical and legal requirements.',
    marks: 3,
    topics: ['Explainable AI (XAI)', 'Right to Explanation', 'Counterfactual Explanations', 'Audit Trails'],
    lectureIds: ['lec-06'],
    difficulty: 'Medium',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Explanation Facilities & Ethical AI',
    learningExplanation: 'Financial regulations (such as GDPR Article 22 "Right to Explanation" and the US Equal Credit Opportunity Act) legally mandate that automated financial decision systems provide clear, non-discriminatory reasons for adverse actions (rejections) and actionable counterfactual advice.',
    examAnswer: 'Mechanisms for Generating Ethical and Legal Explanations:\n\n1. Rule-Trace Audit Trails ("HOW" Explanations):\n• The Explanation Facility translates the exact firing sequence of rules from the inference engine into plain, human-readable language (e.g., "Loan rejected because Debt-to-Income ratio of 48% exceeded the maximum permissible threshold of 40% under Policy Rule R-104").\n\n2. Counterfactual Explanations ("What Needs to Change"):\n• In compliance with consumer protection laws, the system computes the minimal actionable modification needed for approval (e.g., "Your application would be approved if your total existing monthly debt payments were reduced by LKR 25,000, or if a qualified guarantor with a monthly income of at least LKR 120,000 is added").\n\n3. Proof of Fairness & Non-Discrimination:\n• The system outputs an auditable certification verifying that no protected demographic variables (gender, ethnicity, religion, marital status) or their proxies were used as antecedents in any rule within the inference tree.',
    stepByStepSolution: [
      'Identify legal frameworks: GDPR Right to Explanation, Adverse Action Notices.',
      'Explain Rule Trace generation: Translating rule IDs and fired conditions into natural language.',
      'Explain Counterfactual explanations: Informing applicant of minimal steps to achieve approval.',
      'Explain Fairness compliance: Auditing absence of discriminatory proxy attributes in the active rule chain.'
    ],
    finalAnswer: 'The system complies with ethical and legal mandates by providing clear natural language rule traces, actionable counterfactual guidance, and verifiable non-discriminatory audit certificates.',
    lectureReference: {
      lectureId: 'lec-06',
      lectureTitle: 'Lecture 06 – Expert Systems & Knowledge Engineering',
      concept: 'Explanation Facilities and Compliance',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'How and Why facilities justify conclusions and fulfill regulatory auditability.'
    }
  },
  {
    id: 'q4-c-iii',
    numberLabel: 'Question 4 (c) (iii)',
    mainQuestion: 4,
    questionText: 'Explain how the expert system to be designed, should be benefited by the concept of hybrid system which integrates symbolic and non-symbolic AI.',
    marks: 3,
    topics: ['Hybrid AI', 'Neuro-Symbolic Banking', 'Credit Scoring', 'Regulatory Guardrails'],
    lectureIds: ['lec-05', 'lec-06'],
    difficulty: 'Medium',
    category: 'Expert Systems',
    coverageNote: 'Module Syllabus Grounding: CM 3321 Neuro-Symbolic Hybrid Architectures',
    learningExplanation: 'Pure symbolic systems struggle to detect subtle multivariate credit risk patterns from rich unstructured transaction histories. Pure machine learning models lack transparency and cannot guarantee compliance with hard legal rules. A hybrid neuro-symbolic architecture unites both.',
    examAnswer: 'Benefits of a Hybrid Neuro-Symbolic Architecture for Loan Approval:\n\n1. Best-in-Class Predictive Accuracy (Non-Symbolic ML Layer):\n• Machine Learning models (e.g., Gradient Boosted Trees, Deep Neural Networks) analyze thousands of continuous, non-linear transactional data points (spending volatility, seasonal revenue patterns, banking app telemetry) to calculate a calibrated Default Probability Score far more accurately than hand-coded rules.\n\n2. Deterministic Legal Compliance & Guardrails (Symbolic Expert System Layer):\n• The symbolic rule engine acts as an uncompromisable supervisor:\n  - Hard regulatory caps (usury laws, minimum age, anti-discrimination constraints) are strictly enforced by symbolic logic, preventing the ML model from generating illegal or biased decisions.\n  - Policy updates (e.g., central bank interest rate changes or emergency credit policies) can be modified instantly in the rule base without costly model retraining.\n\n3. Transparent Explainability with High Capacity:\n• The ML layer produces a sub-symbolic risk assessment, which is fed as a structured proposition (e.g., risk_tier(moderate, 0.18)) into the symbolic expert system. The expert system combines this with explicit policy rules to generate the final legally binding, explainable decision.\n\nResult: The bank gains maximum default prediction accuracy from machine learning while maintaining 100% regulatory compliance, transparency, and auditability from symbolic logic.',
    stepByStepSolution: [
      'Identify limitation of pure symbolic ES: Cannot model complex statistical patterns from raw bank transaction streams.',
      'Identify limitation of pure ML: Black box, lacks guarantees against bias, impossible to certify rule compliance.',
      'Describe hybrid workflow: ML models predict default risk probabilities; Symbolic ES evaluates risk against hard regulatory rules and policy trees.',
      'Highlight concrete benefits: Predictive precision, instant policy patching, and auditable explanations.'
    ],
    finalAnswer: 'A hybrid architecture couples machine learning for non-linear predictive credit risk modeling with a symbolic rule engine for deterministic compliance, instantaneous policy updates, and legally binding explanations.',
    lectureReference: {
      lectureId: 'lec-05',
      lectureTitle: 'Lecture 05 – Artificial Cognitive Systems & Architectures',
      concept: 'Neuro-Symbolic Hybrid Architectures',
      slides: 'Syllabus CM 3321 Module Guide',
      notesExcerpt: 'Combining machine learning pattern recognition with symbolic logic and auditable rules.'
    }
  }
];
