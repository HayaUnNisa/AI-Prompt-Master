export const promptEngineeringFundamentalsQuiz = {
  module1: {
    title: 'Module 1 Quiz: Introduction to AI and Prompts',
    questions: [
      {
        question: 'What is a prompt?',
        options: [
          'A type of AI account',
          'An instruction or request given to an AI tool',
          'A programming language',
          'A website design style',
        ],
        answer: 1,
        explanation:
          'A prompt is the instruction, question, or request you give to an AI tool to guide its response.',
      },
      {
        question: 'Why do many beginner prompts produce weak answers?',
        options: [
          'They are too clear',
          'They give little context or direction',
          'They always include examples',
          'They use normal language',
        ],
        answer: 1,
        explanation:
          'Weak prompts are usually vague, so the AI has to guess what the user wants.',
      },
      {
        question: 'What should a good beginner prompt usually include?',
        options: [
          'Only one word',
          'A clear task, useful context, and desired format',
          'Random keywords',
          'No explanation',
        ],
        answer: 1,
        explanation:
          'Good prompts reduce guessing by clearly stating the task, context, and output format.',
      },
      {
        question: 'What does AI usually do when a prompt is unclear?',
        options: [
          'It refuses every time',
          'It guesses based on limited information',
          'It automatically knows your exact goal',
          'It deletes the prompt',
        ],
        answer: 1,
        explanation:
          'AI responds based on the information provided. If the prompt is unclear, the answer may be generic or inaccurate.',
      },
      {
        question: 'Which prompt is more effective?',
        options: [
          'Write something',
          'Write a beginner-friendly 150-word explanation of crypto wallets',
          'Help',
          'Make it good',
        ],
        answer: 1,
        explanation:
          'This prompt gives a clear task, audience, topic, and length, so it is easier for AI to follow.',
      },
      {
        question: 'Why is testing prompts important?',
        options: [
          'Because the first prompt is always perfect',
          'Because prompts improve through review and refinement',
          'Because AI only works after ten tries',
          'Because short prompts never work',
        ],
        answer: 1,
        explanation:
          'Prompting improves when you test outputs, notice issues, and refine the prompt.',
      },
      {
        question: 'What is one sign of a weak AI response?',
        options: [
          'It directly answers your question',
          'It is generic and does not match your goal',
          'It follows your format',
          'It includes useful steps',
        ],
        answer: 1,
        explanation:
          'Generic answers often mean the prompt did not provide enough detail or direction.',
      },
      {
        question: 'What does “context” mean in prompting?',
        options: [
          'The background information AI needs to answer better',
          'The font size of the answer',
          'The name of the AI company',
          'The speed of your internet',
        ],
        answer: 0,
        explanation:
          'Context gives the AI background information, such as the audience, goal, situation, or constraints.',
      },
      {
        question: 'What is the best mindset for learning prompting?',
        options: [
          'One perfect prompt solves everything',
          'Prompting is a skill improved through practice',
          'AI should guess everything automatically',
          'Long prompts are always better',
        ],
        answer: 1,
        explanation:
          'Prompting is a practical skill. It improves with practice, examples, and iteration.',
      },
      {
        question: 'What should beginners avoid when prompting?',
        options: [
          'Being specific',
          'Giving examples',
          'Using vague requests with no goal',
          'Asking for a format',
        ],
        answer: 2,
        explanation:
          'Vague requests make it harder for AI to understand what kind of response you need.',
      },
    ],
  },

  module2: {
    title: 'Module 2 Quiz: The Core Prompt Framework',
    questions: [
      {
        question: 'What does “role” do in a prompt?',
        options: [
          'It tells the AI what perspective or expertise to use',
          'It changes the AI model permanently',
          'It removes all context',
          'It makes the answer shorter automatically',
        ],
        answer: 0,
        explanation:
          'Role tells AI who to act as, such as a teacher, editor, coach, or analyst.',
      },
      {
        question: 'What is the “task” in a prompt?',
        options: [
          'The exact action you want the AI to perform',
          'The AI website name',
          'The number of tabs open',
          'The color of the text',
        ],
        answer: 0,
        explanation:
          'The task is what you want AI to do, such as explain, summarize, rewrite, compare, or create.',
      },
      {
        question: 'Why is “format” useful in prompting?',
        options: [
          'It controls how the answer is structured',
          'It makes AI never make mistakes',
          'It removes the need for instructions',
          'It changes your keyboard',
        ],
        answer: 0,
        explanation:
          'Format tells AI whether to answer in bullets, a table, checklist, paragraph, steps, or another structure.',
      },
      {
        question: 'Which prompt uses a clear role?',
        options: [
          'Explain this',
          'Act as a beginner-friendly teacher and explain this topic',
          'Make it better',
          'Write anything',
        ],
        answer: 1,
        explanation:
          'This prompt gives the AI a role: beginner-friendly teacher.',
      },
      {
        question: 'Which part of a prompt explains the situation or background?',
        options: ['Role', 'Context', 'Spelling', 'Theme color'],
        answer: 1,
        explanation:
          'Context gives background details that help the AI understand the situation.',
      },
      {
        question: 'What is a constraint in prompting?',
        options: [
          'A rule or limit the AI should follow',
          'A type of computer virus',
          'A paid AI feature',
          'A browser setting',
        ],
        answer: 0,
        explanation:
          'Constraints are limits like word count, tone, audience, style, or things to avoid.',
      },
      {
        question: 'Which is the strongest prompt?',
        options: [
          'Write a post',
          'Write a short beginner-friendly LinkedIn post about AI prompts. Use simple language and no hype.',
          'AI post',
          'Make content',
        ],
        answer: 1,
        explanation:
          'This prompt includes task, audience, topic, tone, and constraint.',
      },
      {
        question: 'Why should prompts mention the target audience?',
        options: [
          'So the answer matches the reader’s knowledge level',
          'So the AI writes slower',
          'So the answer becomes random',
          'So the AI ignores the topic',
        ],
        answer: 0,
        explanation:
          'Audience helps the AI choose the right level of detail and language.',
      },
      {
        question: 'What does “tone” control?',
        options: [
          'The emotional style of the answer',
          'The internet speed',
          'The size of your screen',
          'The AI password',
        ],
        answer: 0,
        explanation:
          'Tone controls whether the answer feels professional, friendly, simple, formal, persuasive, or casual.',
      },
      {
        question: 'What is a prompt framework useful for?',
        options: [
          'Creating more consistent prompts',
          'Avoiding all thinking',
          'Making AI always perfect',
          'Deleting old prompts',
        ],
        answer: 0,
        explanation:
          'A framework gives you a repeatable structure so your prompts become clearer and more reliable.',
      },
    ],
  },

  module3: {
    title: 'Module 3 Quiz: Practical Prompt Writing',
    questions: [
      {
        question: 'Why should you build a prompt library?',
        options: [
          'To save useful prompts for future use',
          'To stop learning prompting',
          'To hide your notes',
          'To make AI answer less clearly',
        ],
        answer: 0,
        explanation:
          'A prompt library saves your best reusable prompts so you do not start from zero each time.',
      },
      {
        question: 'What should you do with important AI-generated information?',
        options: [
          'Verify it before trusting or publishing it',
          'Always believe it instantly',
          'Delete it immediately',
          'Only trust it if it is long',
        ],
        answer: 0,
        explanation:
          'AI can make mistakes, so important facts should be checked before use.',
      },
      {
        question: 'What is AI brainstorming best for?',
        options: [
          'Generating ideas and angles quickly',
          'Guaranteeing perfect decisions',
          'Replacing all human judgment',
          'Making every answer correct',
        ],
        answer: 0,
        explanation:
          'AI brainstorming is useful for generating options, but you still need to review and choose carefully.',
      },
      {
        question: 'What is a good way to improve a weak AI answer?',
        options: [
          'Refine the prompt with more context and clearer instructions',
          'Never use AI again',
          'Ask the exact same vague question repeatedly',
          'Remove all details',
        ],
        answer: 0,
        explanation:
          'A better prompt can guide the AI toward a more useful response.',
      },
      {
        question: 'Which is a good editing prompt?',
        options: [
          'Fix',
          'Rewrite this paragraph to sound clearer, professional, and beginner-friendly',
          'Words',
          'Make text',
        ],
        answer: 1,
        explanation:
          'This prompt explains the task and the desired tone/style.',
      },
      {
        question: 'Why is it useful to save prompts that work well?',
        options: [
          'They can be reused and improved over time',
          'They make AI free forever',
          'They stop AI from updating',
          'They remove the need to read outputs',
        ],
        answer: 0,
        explanation:
          'Saving effective prompts helps you build a practical personal workflow.',
      },
      {
        question: 'What should you avoid when using AI for research?',
        options: [
          'Checking sources',
          'Asking follow-up questions',
          'Trusting every claim without verification',
          'Comparing answers',
        ],
        answer: 2,
        explanation:
          'AI can hallucinate or be outdated, so research claims need verification.',
      },
      {
        question: 'What is a follow-up prompt?',
        options: [
          'A second instruction used to improve or continue the answer',
          'A new AI account',
          'A hidden browser setting',
          'A type of image file',
        ],
        answer: 0,
        explanation:
          'Follow-up prompts help refine, expand, shorten, reorganize, or clarify the previous answer.',
      },
      {
        question: 'Which workflow is most practical?',
        options: [
          'Prompt once and publish without reading',
          'Prompt, review, refine, verify, then use',
          'Only use vague prompts',
          'Never edit AI output',
        ],
        answer: 1,
        explanation:
          'A responsible workflow includes reviewing, refining, and verifying before using the output.',
      },
      {
        question: 'What is the main goal of practical prompt writing?',
        options: [
          'To get useful, clear, and reliable outputs for real tasks',
          'To write the longest prompt possible',
          'To confuse the AI',
          'To avoid giving context',
        ],
        answer: 0,
        explanation:
          'Practical prompting is about getting useful results that match your actual goal.',
      },
    ],
  },
}