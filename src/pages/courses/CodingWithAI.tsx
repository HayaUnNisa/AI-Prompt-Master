import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const codingWithAIModules = [
  {
    title: 'Code Generation',
    time: '3 hours',
    lessons: [
      {
        title: 'Writing Effective Code Prompts',
        time: '45 min',
        intro:
          'Writing code with AI starts with writing better prompts. AI can generate useful code, explain confusing logic, suggest architecture, and speed up development, but it needs clear instructions. If the prompt is vague, the code will usually be vague too.',
        explanation: [
          'Many beginners think coding with AI means typing something simple like “build me an app” or “make a login system.” This usually creates incomplete code, messy structure, or code that does not match the project.',
          'AI is not automatically aware of your project goals. It does not know your folder structure, stack, database, styling system, coding rules, or skill level unless you tell it.',
          'A strong coding prompt gives AI the same kind of information you would give to a real developer before assigning a task.',
          'The first part of a good coding prompt is the role. For example, “Act as a senior React developer” or “Act as a backend engineer.”',
          'The second part is the task. Tell AI exactly what you want it to build, fix, explain, or improve.',
          'The third part is the tech stack. Mention the language, framework, database, libraries, and tools being used.',
          'The fourth part is constraints. These are rules like “use TypeScript,” “avoid any,” “use Tailwind CSS,” “do not use external libraries,” or “keep the same design.”',
          'The fifth part is output format. Tell AI if you want one file, multiple files, comments, explanation, folder structure, or only the updated code.',
          'A weak prompt is: “Build me a login system.”',
          'This is weak because AI does not know whether you are using React, Next.js, Node.js, Firebase, MongoDB, Supabase, JWT, sessions, or another method.',
          'A better prompt is: “Act as a senior full-stack developer. Build a login system using React, TypeScript, Node.js, Express, MongoDB, JWT, bcrypt, and protected routes. Separate the code into routes, controllers, middleware, and services.”',
          'This gives AI enough direction to create a much better result.',
          'Another important technique is asking AI to plan before coding.',
          'Instead of saying “write the code,” first say “explain the implementation plan before writing code.”',
          'This helps you catch problems early.',
          'For example, AI might suggest a wrong database structure. If you ask for a plan first, you can correct the approach before code is generated.',
          'Step-by-step prompting is also powerful.',
          'Instead of asking for the full project at once, break it into smaller tasks.',
          'Step 1: Create the database schema.',
          'Step 2: Create API routes.',
          'Step 3: Add controller logic.',
          'Step 4: Add validation.',
          'Step 5: Add frontend form.',
          'Step 6: Add error handling.',
          'Step 7: Test the full flow.',
          'This makes the output easier to understand and easier to fix.',
          'A common beginner mistake is asking AI to generate too much code at once.',
          'Large prompts can create large errors. Smaller prompts create better control.',
          'If you are working in an existing project, always include context.',
          'For example, show your current folder structure, current component, current error, and what you want changed.',
          'Do not ask AI to guess your structure.',
          'Another strong habit is asking AI to explain the code after generating it.',
          'This helps you learn instead of just copying.',
          'A good prompt can say: “After the code, explain how it works in beginner-friendly steps.”',
          'This is especially useful when learning new frameworks, APIs, or patterns.',
          'AI should be treated like a coding assistant, not a replacement for your understanding.',
          'The best workflow is: define task, provide context, ask for plan, generate code, review code, test code, then refine.',
          'Strong prompting reduces bugs, improves structure, and makes AI much more useful for real development.',
        ],
        weakPrompt: 'Build me a login system.',
        betterPrompt:
          'Act as a senior full-stack developer. Build a login system using React, TypeScript, Node.js, Express, MongoDB, JWT, bcrypt, and protected routes. Separate the backend into routes, controllers, middleware, and services, then explain how the flow works.',
        commonMistake:
          'The biggest mistake is asking for code without giving stack, context, constraints, or output format.',
        practice:
          'Choose one feature idea. First write a weak prompt. Then rewrite it with role, task, stack, constraints, and output format. Compare the difference in AI output.',
        takeaway:
          'Better coding prompts create better code because they reduce guessing and give AI a clear development direction.',
      },

      {
        title: 'Specifying Language and Constraints',
        time: '45 min',
        intro:
          'AI can write code in many languages and frameworks, but developers must clearly define the exact language, tools, rules, and limitations. Constraints are what keep AI output aligned with your real project.',
        explanation: [
          'When you ask AI for code without specifying the language, it may choose whatever it thinks is suitable.',
          'For example, if you say “create an API,” AI might generate Node.js, Python, PHP, or even pseudocode.',
          'That may be fine for learning, but it is not fine when you are working inside a real project.',
          'Always mention your language clearly.',
          'Examples include TypeScript, JavaScript, Python, Java, PHP, C++, or SQL.',
          'After language, mention the framework.',
          'Examples include React, Next.js, Express, Django, Laravel, Flask, Vue, Angular, or NestJS.',
          'Then mention your styling or UI system if it matters.',
          'Examples include Tailwind CSS, CSS modules, plain CSS, Bootstrap, Material UI, or Shadcn UI.',
          'Then mention data storage.',
          'Examples include MongoDB, PostgreSQL, MySQL, Firebase, Supabase, Prisma, or localStorage.',
          'The more specific you are, the less AI has to guess.',
          'Constraints are rules that the AI must follow.',
          'A constraint can be technical.',
          'Example: “Use TypeScript interfaces.”',
          'A constraint can be architectural.',
          'Example: “Use MVC structure.”',
          'A constraint can be styling-related.',
          'Example: “Use Tailwind only and do not use inline styles.”',
          'A constraint can be security-related.',
          'Example: “Do not expose API keys in frontend code.”',
          'A constraint can also be educational.',
          'Example: “Explain every step for an intermediate developer.”',
          'A weak prompt is: “Make a dashboard.”',
          'A better prompt is: “Create a React TypeScript dashboard using Tailwind CSS. Use reusable components, responsive layout, mock data, and no external chart libraries.”',
          'This makes the output more useful because it fits your project rules.',
          'For backend work, constraints become even more important.',
          'Example prompt: “Create an Express API using TypeScript, PostgreSQL, Prisma, Zod validation, and proper error handling. Use environment variables and do not hardcode secrets.”',
          'This is much better than simply saying “create API.”',
          'Constraints also protect your code quality.',
          'If you do not want AI to use weak TypeScript, say: “Do not use any.”',
          'If you want clean code, say: “Keep functions small and readable.”',
          'If you want beginner-friendly code, say: “Add comments explaining the important parts.”',
          'If you want production-style code, say: “Use proper error handling and validation.”',
          'Another important constraint is file scope.',
          'Tell AI whether you want only one file updated or multiple files created.',
          'Example: “Only update this component. Do not change other files.”',
          'This prevents unnecessary rewrites.',
          'Good developers control AI output using constraints.',
          'Without constraints, AI may generate code that technically works but does not fit your project.',
        ],
        weakPrompt: 'Make a dashboard.',
        betterPrompt:
          'Create a React TypeScript dashboard using Tailwind CSS. Use reusable components, responsive layout, mock data, and no external chart libraries. Keep the code clean and beginner-friendly.',
        commonMistake:
          'The biggest mistake is not specifying stack, style rules, architecture, and limitations.',
        practice:
          'Take one coding task and write a prompt that includes language, framework, database, styling, constraints, and output format.',
        takeaway:
          'Constraints shape AI-generated code. Without constraints, AI guesses. With constraints, AI follows your project rules.',
      },

      {
        title: 'Generating Functions and Classes',
        time: '45 min',
        intro:
          'Functions and classes are core building blocks in software development. AI can help generate reusable logic quickly, but the prompt must define purpose, input, output, edge cases, and coding style.',
        explanation: [
          'One of the most practical uses of AI is generating small reusable pieces of logic.',
          'These can include utility functions, validators, formatters, API helpers, service classes, controllers, hooks, and data transformers.',
          'A weak prompt is: “Make a function for user data.”',
          'This does not explain what user data means or what the function should return.',
          'A better prompt is: “Create a TypeScript function that validates user registration data. It should check name, email format, password length, and return an object with isValid and errors.”',
          'Now AI knows the input, validation rules, and output structure.',
          'When asking AI to generate a function, include the function purpose.',
          'Then include input type.',
          'Then include output type.',
          'Then include edge cases.',
          'Then include examples if possible.',
          'Example: “Create a function that takes an array of orders and returns total revenue grouped by product category.”',
          'This is much clearer than saying “calculate revenue.”',
          'AI can also generate classes.',
          'Classes are useful when logic belongs together.',
          'For example, a UserService class may include createUser, getUserById, updateUser, deleteUser, and validateUser methods.',
          'A service class can help keep business logic separate from routes and controllers.',
          'This improves structure in larger projects.',
          'A good class prompt might say: “Create a TypeScript UserService class with methods for creating users, finding users by email, updating profiles, and deleting users. Use dependency injection for the repository.”',
          'This is more advanced because it guides architecture.',
          'AI can also explain when to use a function and when to use a class.',
          'For simple reusable logic, a function may be enough.',
          'For grouped behavior with shared state or dependencies, a class may be useful.',
          'Another strong use case is asking AI to generate tests for a function.',
          'After generating a function, ask: “Now create unit tests for normal cases, edge cases, and invalid inputs.”',
          'This improves code reliability.',
          'You can also ask AI to improve naming.',
          'Good names make code easier to read.',
          'Prompt example: “Review these function names and suggest clearer names without changing behavior.”',
          'AI can also identify repeated logic and turn it into reusable functions.',
          'This is useful when refactoring messy code.',
          'Always review AI-generated functions. AI may miss edge cases, use weak types, or return a structure that does not match your app.',
          'The best workflow is: define function purpose, define input, define output, mention edge cases, generate code, review, test.',
        ],
        weakPrompt: 'Make a function for user data.',
        betterPrompt:
          'Create a TypeScript function that validates user registration data. It should check name, email format, password length, and return an object with isValid and errors. Do not use any.',
        commonMistake:
          'The biggest mistake is not defining input, output, edge cases, or expected behavior clearly.',
        practice:
          'Write prompts for three functions: one validator, one formatter, and one data transformer. Include input, output, and edge cases for each.',
        takeaway:
          'AI can generate strong reusable functions and classes when you clearly define purpose, input, output, and rules.',
      },

      {
        title: 'Building from Pseudocode',
        time: '45 min',
        intro:
          'Pseudocode is one of the best ways to work with AI because it separates logic from syntax. First you explain the steps in plain language, then AI converts those steps into real code.',
        explanation: [
          'Many coding problems become easier when you plan the logic before writing code.',
          'Pseudocode helps you do that.',
          'It is not real code. It is a simple step-by-step explanation of what the code should do.',
          'AI works very well with pseudocode because it gives clear logic.',
          'A weak prompt is: “Build a signup system.”',
          'A better approach is to write the flow first.',
          'Example pseudocode: receive form data, validate required fields, check if email already exists, hash password, save user, create token, return response.',
          'Then ask AI to convert it into code.',
          'Prompt example: “Convert this pseudocode into a Node.js Express signup controller using MongoDB, bcrypt, JWT, and proper error handling.”',
          'This creates cleaner code because the logic is already defined.',
          'Pseudocode is useful for authentication flows, payment flows, form handling, algorithms, dashboards, data processing, and API workflows.',
          'It also helps prevent AI from inventing the wrong flow.',
          'When you do not give logic, AI fills in the blanks.',
          'Sometimes that is helpful, but sometimes it creates architecture that does not match your project.',
          'Pseudocode gives you control.',
          'Another benefit is learning.',
          'When you write pseudocode first, you understand the problem better.',
          'Then AI becomes a translator from logic into syntax.',
          'This is much better than asking AI to think for you.',
          'For example, if you are building a search feature, your pseudocode may include: get search input, trim spaces, debounce request, call API, filter results, show loading state, show empty state, handle errors.',
          'Now AI can build the feature more accurately.',
          'Pseudocode also helps with debugging.',
          'If the code does not work, you can compare the real code against the planned steps.',
          'This makes it easier to find missing logic.',
          'You can also ask AI to review your pseudocode before coding.',
          'Prompt example: “Review this pseudocode. Are there missing steps, edge cases, or security issues before I turn it into code?”',
          'This is very useful for complex features.',
          'The best workflow is: write pseudocode, review logic, convert to code, test code, refine edge cases.',
        ],
        weakPrompt: 'Build a signup system.',
        betterPrompt:
          'Convert this pseudocode into a Node.js Express signup controller using MongoDB, bcrypt, JWT, validation, and proper error handling. Explain the code after generating it.',
        commonMistake:
          'The biggest mistake is skipping logic planning and expecting AI to invent the correct flow.',
        practice:
          'Write pseudocode for login, search, or checkout. Ask AI to review it, then convert it into code.',
        takeaway:
          'Pseudocode gives AI clear logic, and clear logic creates cleaner code.',
      },
    ],
  },

  {
    title: 'Debugging and Review',
    time: '3 hours',
    lessons: [
      {
        title: 'Debugging with AI',
        time: '45 min',
        intro:
          'Debugging is one of the most useful ways developers can use AI. Instead of only searching error messages manually, you can give AI the error, code context, expected behavior, and actual behavior. This helps AI explain the problem and suggest focused fixes.',
        explanation: [
          'Every developer faces bugs.',
          'Some bugs are simple, like spelling mistakes, missing imports, or wrong variable names.',
          'Other bugs are deeper, like incorrect state handling, async timing issues, wrong data shape, missing dependency arrays, broken database queries, or authentication problems.',
          'AI can help debug faster, but only when you provide enough context.',
          'A weak prompt is: “Fix this error.”',
          'This is weak because AI does not know what you expected, what actually happened, what file the code is from, what framework you are using, or what you already tried.',
          'A stronger prompt is: “I am using React with TypeScript. This component should submit a form, but the state resets before the API request finishes. Here is the component code and exact error. Explain the cause first, then show the corrected code.”',
          'This gives stack, expected behavior, actual behavior, code context, and output requirement.',
          'A good debugging prompt should include the error message, relevant code, expected behavior, actual behavior, environment, and what you already tried.',
          'For frontend bugs, include component code, props, state, event handlers, console error, and screenshot if useful.',
          'For backend bugs, include route, controller, service, request body, response, and stack trace.',
          'For database bugs, include schema, query, expected data shape, and actual data shape.',
          'For TypeScript bugs, include the exact type error and relevant interfaces.',
          'Do not paste the entire project first.',
          'Start with the smallest relevant code block.',
          'This helps AI focus on the real issue.',
          'AI can also explain errors in simple language.',
          'Example prompt: “Explain this TypeScript error like I am an intermediate developer and show why it happens.”',
          'This helps you learn instead of blindly copying.',
          'AI can compare working and broken versions.',
          'Prompt example: “This version works and this version breaks. Compare them and identify the likely cause.”',
          'This is useful when a bug appears after a recent edit.',
          'Another good prompt is: “Give me three possible causes ranked from most likely to least likely.”',
          'This helps you debug logically.',
          'Be careful with AI fixes.',
          'Sometimes AI suggests hiding the error instead of solving the root cause.',
          'For example, it may suggest using any in TypeScript.',
          'That may remove the error, but it weakens your code.',
          'A better instruction is: “Do not use any. Fix the type properly.”',
          'The best debugging workflow is: isolate the problem, provide exact error, explain expected behavior, ask for cause, apply one fix, test again.',
          'Debugging with AI works best when you treat AI like a developer helping you reason through the issue, not a magic button.',
        ],
        weakPrompt: 'Fix this error.',
        betterPrompt:
          'I am using React with TypeScript. This component should submit a form, but the state resets before the API request finishes. Here is the code and error message. Explain the cause first, then show the corrected code without using any.',
        commonMistake:
          'The biggest mistake is pasting an error without context. AI needs the code, expected behavior, actual behavior, and environment to debug accurately.',
        practice:
          'Take one real error from your project. Write a debugging prompt that includes stack, exact error, relevant code, expected behavior, actual behavior, and what you already tried.',
        takeaway:
          'AI can speed up debugging, but clear context is what turns random suggestions into useful fixes.',
      },

      {
        title: 'Refactoring and Optimization',
        time: '45 min',
        intro:
          'Refactoring means improving code without changing what it does. Optimization means improving readability, performance, maintainability, or efficiency. AI can help with both, but developers must guide it carefully.',
        explanation: [
          'Many developers use AI only to generate new code.',
          'But AI is also powerful for improving existing code.',
          'As projects grow, code can become messy.',
          'Functions become too long.',
          'Components repeat logic.',
          'Variable names become unclear.',
          'State management becomes confusing.',
          'Performance problems appear slowly.',
          'AI can help identify these issues and suggest cleaner structure.',
          'A weak prompt is: “Make this better.”',
          'This is too vague because better can mean many things.',
          'Do you want better readability, better performance, fewer lines, stronger typing, cleaner architecture, or better naming?',
          'A better prompt is: “Refactor this React TypeScript component for readability. Keep the behavior exactly the same. Extract repeated UI into reusable components and explain each change.”',
          'This defines the goal and protects behavior.',
          'The phrase “keep behavior the same” is very important.',
          'Without it, AI may accidentally change logic while cleaning the code.',
          'You can also ask AI to refactor in stages.',
          'Step 1: Identify code smells.',
          'Step 2: Suggest improvements.',
          'Step 3: Refactor one section.',
          'Step 4: Explain what changed.',
          'Step 5: Compare before and after.',
          'This is safer than asking for a full rewrite.',
          'Common refactoring tasks include extracting functions, splitting large components, improving naming, removing duplication, simplifying conditionals, and organizing files.',
          'For backend code, AI can help separate route logic, controller logic, service logic, validation logic, and database access.',
          'For frontend code, AI can help extract components, create custom hooks, simplify props, improve state structure, and remove repeated JSX.',
          'Optimization is different from refactoring.',
          'Optimization focuses on speed, memory, API calls, database queries, rendering, and efficiency.',
          'React optimization may include memoization, avoiding unnecessary renders, lazy loading, and reducing state updates.',
          'Backend optimization may include reducing database queries, adding indexes, caching, pagination, and avoiding repeated calculations.',
          'Do not optimize blindly.',
          'First ask AI to identify performance problems before rewriting code.',
          'Prompt example: “Review this function for performance problems. Do not rewrite yet. First list the bottlenecks and explain them.”',
          'Then ask: “Now refactor the function to improve performance while keeping the same output.”',
          'This creates a safer workflow.',
          'AI can also compare the original and refactored code.',
          'Prompt example: “Compare these two versions and tell me whether behavior changed.”',
          'The best refactoring workflow is: review, identify issues, refactor small parts, test, then continue.',
        ],
        weakPrompt: 'Make this code better.',
        betterPrompt:
          'Refactor this React TypeScript component for readability. Keep the behavior exactly the same, extract repeated UI into reusable components, avoid any, and explain each change.',
        commonMistake:
          'The biggest mistake is asking AI to improve code without defining what improvement means.',
        practice:
          'Paste one messy function into AI. Ask it to identify readability issues first. Then ask it to refactor while keeping behavior unchanged.',
        takeaway:
          'AI is excellent for refactoring when you define the goal, protect behavior, and review changes carefully.',
      },

      {
        title: 'Understanding Large Codebases',
        time: '45 min',
        intro:
          'Large codebases can feel overwhelming. Files are connected, logic is spread across components, and it is not always clear where a feature begins or ends. AI can help developers understand structure, trace logic, and learn unfamiliar projects faster.',
        explanation: [
          'When joining a new project, developers spend time understanding folders, files, naming conventions, data flow, routes, components, services, and business logic.',
          'This can feel confusing, especially when the project has many files.',
          'AI can speed up this process by summarizing files, explaining functions, and mapping relationships.',
          'A weak prompt is: “Explain this project.”',
          'This is too broad.',
          'A better prompt is: “Here is the folder structure of my React TypeScript app. Explain what each main folder likely does and where the login feature is probably located.”',
          'Start with folder structure first.',
          'Then provide key files one by one.',
          'Ask AI to explain the role of each file before asking it to change code.',
          'A good workflow is: folder structure, key files, data flow, feature tracing, then modification.',
          'If you want to understand authentication, provide files related to routes, auth context, API service, login page, token storage, and protected routes.',
          'Then ask: “Explain how authentication flows from login submit to protected page access.”',
          'This gives you a clear mental model.',
          'AI can also help identify where to make changes.',
          'Example prompt: “I want to add role-based access. Based on these files, where should I make changes and why?”',
          'This is better than asking AI to edit everything immediately.',
          'Large codebase work requires careful context management.',
          'Do not paste too much at once.',
          'Instead, paste relevant files and ask focused questions.',
          'AI can create text-based diagrams.',
          'Example: “Create a simple flow diagram showing how data moves from form to API to database.”',
          'AI can explain a file section by section.',
          'Prompt example: “Explain this file in sections. What does each function do? What external files does it depend on? What could break if I change it?”',
          'This is useful before editing unfamiliar code.',
          'AI can help onboard junior developers by turning code into explanations.',
          'But AI can also assume relationships that are not true if it does not see enough files.',
          'Always verify by checking imports, routes, function calls, and actual usage.',
          'The best way to use AI for large codebases is to ask for understanding first, then planning, then editing.',
        ],
        weakPrompt: 'Explain this project.',
        betterPrompt:
          'Here is the folder structure and key files of my React TypeScript project. Explain the purpose of each folder, trace the authentication flow, and tell me which files are most important before making changes.',
        commonMistake:
          'The biggest mistake is asking AI to modify a large codebase before helping it understand the structure and relevant files.',
        practice:
          'Copy your project folder structure and ask AI to explain it. Then provide one feature-related file and ask AI to trace how it connects to the rest of the app.',
        takeaway:
          'AI can help you understand large codebases faster when you provide structure, relevant files, and focused questions.',
      },

      {
        title: 'Code Review, Documentation, and Testing',
        time: '45 min',
        intro:
          'AI can support the final stages of development: reviewing code, writing documentation, and creating tests. These steps are often skipped by beginners, but they are essential for professional development and long-term project quality.',
        explanation: [
          'Writing code is only one part of development.',
          'Good developers also review, document, and test their code.',
          'AI can help with all three.',
          'Code review means checking code for bugs, readability, security issues, performance problems, and maintainability.',
          'A weak prompt is: “Review this code.”',
          'This is broad and may produce shallow feedback.',
          'A better prompt is: “Review this Express controller for security, validation, error handling, readability, and maintainability. List issues first, then suggest improvements.”',
          'This gives AI clear review categories.',
          'You can ask for different review styles.',
          'Examples include beginner-friendly review, senior developer review, security-focused review, performance-focused review, or TypeScript-focused review.',
          'Security reviews are especially useful.',
          'AI can check for missing validation, exposed secrets, weak authentication, unsafe queries, missing authorization, and poor error handling.',
          'Documentation is another important area.',
          'Many projects fail because the code works but nobody understands how to use or maintain it.',
          'AI can write README files, function comments, API documentation, setup instructions, and developer notes.',
          'Prompt example: “Create documentation for this API route. Include purpose, request body, response format, error cases, and example request.”',
          'AI can also document React components.',
          'Prompt example: “Document this component. Explain props, state, usage, and examples.”',
          'Testing is the third major area.',
          'AI can help write unit tests, integration tests, and end-to-end test cases.',
          'A weak prompt is: “Write tests.”',
          'A better prompt is: “Write Jest unit tests for this function. Cover valid input, invalid input, edge cases, and expected errors.”',
          'Testing prompts should mention the testing framework.',
          'Examples include Jest, Vitest, React Testing Library, Cypress, and Playwright.',
          'AI can also suggest test cases before writing test code.',
          'Prompt example: “List test cases for this login function before writing code.”',
          'This helps you think like a tester.',
          'AI can identify edge cases.',
          'Examples include empty strings, null values, duplicate users, expired tokens, network failures, missing permissions, invalid IDs, and slow API responses.',
          'A strong final workflow is: generate code, review code, document code, write tests, run tests, fix issues, then commit.',
          'AI can assist in every step, but you must still run the code and verify results.',
          'Never assume AI-generated tests are enough.',
          'Tests should be reviewed like any other code.',
          'This lesson brings the course together: AI can help you code faster, but professional development still requires review, documentation, testing, and judgment.',
        ],
        weakPrompt: 'Review this code.',
        betterPrompt:
          'Review this Express controller for security, validation, error handling, readability, and maintainability. List issues first, then suggest improvements without changing behavior.',
        commonMistake:
          'The biggest mistake is treating generated code as complete without review, documentation, or tests.',
        practice:
          'Choose one function from your project. Ask AI to review it, document it, list test cases, and then write unit tests for it.',
        takeaway:
          'AI can help with professional development workflows, but code should still be reviewed, documented, tested, and verified by the developer.',
      },
    ],
  },
]

function CodingWithAI() {
  return (
    <div className="space-y-8">
      {codingWithAIModules.map((module, moduleIndex) => (
        <div key={module.title} className="glass-card p-6">
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400">
              Module {moduleIndex + 1} • {module.time} •{' '}
              {module.lessons.length} Lessons
            </span>

            <h2 className="font-display text-3xl font-bold text-white mt-2">
              {module.title}
            </h2>
          </div>

          <div className="space-y-6">
            {module.lessons.map((lesson, lessonIndex) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border bg-navy-900/40 p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-400 font-mono text-sm">
                    Lesson {lessonIndex + 1}
                  </span>

                  <span className="text-slate-500 text-sm">{lesson.time}</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  {lesson.intro}
                </p>

                {lesson.explanation.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-400 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-purple-300 font-semibold mb-2">
                    Weak Prompt
                  </p>

                  <p className="text-slate-300">{lesson.weakPrompt}</p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-green-300 font-semibold mb-2">
                    Better Prompt
                  </p>

                  <p className="text-slate-300">{lesson.betterPrompt}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-red-300 font-semibold">
                      Common Mistake
                    </h4>

                    <p className="text-slate-400">{lesson.commonMistake}</p>
                  </div>

                  <div>
                    <h4 className="text-blue-300 font-semibold">Practice</h4>

                    <p className="text-slate-400">{lesson.practice}</p>
                  </div>

                  <div className="flex gap-2 items-start pt-2">
                    <CheckCircle
                      size={18}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />

                    <p className="text-white font-medium">
                      {lesson.takeaway}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CodingWithAI