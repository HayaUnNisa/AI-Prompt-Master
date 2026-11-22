// 30 Days, 30 Ways to Earn Using AI
// Day 1 unlocks on SERIES_START (Asia/Karachi). Each following day unlocks at local midnight.
// To edit a day: change its entry below. To link that day's Reel / X post, fill reelUrl / xUrl.

export const SERIES_START = '2026-11-23'
export const SERIES_TZ = 'Asia/Karachi'

export type Difficulty = 'Easy start' | 'Some skill' | 'Takes practice'

export interface SeriesDay {
  day: number
  title: string
  hook: string
  summary: string
  whoFor: string
  steps: string[]
  tools: string[]
  firstMoney: string
  startCost: string
  difficulty: Difficulty
  honestNote: string
  reelUrl?: string
  xUrl?: string
}

export const seriesDays: SeriesDay[] = [
  {
    day: 1,
    title: 'Sell prompt packs for one specific job',
    hook: 'Everyone sells “1,000 ChatGPT prompts.” Nobody buys them. Here’s what people actually pay for.',
    summary:
      'Generic prompt bundles are everywhere and mostly free. What sells is a small, tested pack that solves one job for one type of person — “20 prompts for real estate agents writing listings” beats “1,000 prompts for everything.”',
    whoFor: 'Anyone who already uses AI for their own work and can explain how.',
    steps: [
      'Pick one profession you understand (teachers, agents, salon owners, students) and one task they repeat every week.',
      'Write 15–25 prompts for that task. Test every one and keep a screenshot of the best output.',
      'Put them in a clean PDF or Notion page with a short “how to use this” page at the front.',
      'List it on Gumroad or Payhip at a low price, and show one before/after example in the description.',
      'Post the before/after on social media every few days and link to the pack.',
    ],
    tools: ['ChatGPT or Claude', 'Canva or Google Docs', 'Gumroad / Payhip'],
    firstMoney: 'Usually 2–6 weeks, once a few posts start getting seen.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote:
      'The prompts are not the product — the testing and the niche are. If you can’t show a real result, it won’t sell.',
  },
  {
    day: 2,
    title: 'Freelance blog writing, with AI as your first draft',
    hook: 'Clients don’t hate AI writing. They hate lazy AI writing. That gap is your job.',
    summary:
      'Businesses still need blog posts, and most can tell when something was pasted straight from a chatbot. Use AI for research and structure, then do the part it can’t: real examples, a clear voice, and fact-checking.',
    whoFor: 'People who write clearly in English (or another language clients need).',
    steps: [
      'Choose two niches you can talk about with some confidence.',
      'Write three sample posts and publish them on Medium or a free blog — these are your portfolio.',
      'Create a simple Fiverr or Upwork profile with a fixed-price “1,000-word SEO post” offer.',
      'Use AI for an outline and research questions; write and edit the final version yourself.',
      'Ask every happy client for a review and a second order.',
    ],
    tools: ['Claude or ChatGPT', 'Google Docs', 'Grammarly', 'Fiverr / Upwork'],
    firstMoney: 'Often 2–4 weeks on Fiverr; faster if you message local businesses directly.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Never submit unchecked AI facts. One wrong statistic can lose a client.',
  },
  {
    day: 3,
    title: 'Faceless short videos with an AI voice',
    hook: 'You don’t need to show your face to build an audience. You need to show something useful.',
    summary:
      'Short explainer videos — facts, tips, mini-stories — can be made entirely with stock footage, on-screen text and an AI voiceover. Income comes later from brand deals, affiliate links or your own products, not from views alone.',
    whoFor: 'Introverts, students, anyone who likes editing more than talking.',
    steps: [
      'Pick a narrow topic you could make 100 videos about (study tips, money basics, tech how-tos).',
      'Write 10 scripts of 30–45 seconds each. Hook in the first line, one idea per video.',
      'Generate the voiceover, add stock clips and big readable captions.',
      'Post daily for 30 days on Reels, Shorts and TikTok, then double down on what worked.',
      'Add one way to earn: an affiliate link, a free PDF that leads to a paid one, or sponsorships.',
    ],
    tools: ['ElevenLabs or a similar voice tool', 'CapCut', 'Pexels', 'ChatGPT for script ideas'],
    firstMoney: 'Usually 2–4 months. This is a slow build.',
    startCost: 'Free to start; paid voice plans are optional',
    difficulty: 'Takes practice',
    honestNote: 'Most channels quit before video 30. Consistency matters more than tools.',
  },
  {
    day: 4,
    title: 'Printable planners and worksheets',
    hook: 'People pay for a PDF they could make themselves. Because they won’t.',
    summary:
      'Planners, trackers, kids’ worksheets and checklists sell well as instant downloads. AI helps you research what buyers want and write the content; you design it cleanly.',
    whoFor: 'Organised people who enjoy layout and design.',
    steps: [
      'Search Etsy for a printable type and read the 1–3 star reviews of best sellers — that’s your product brief.',
      'Use AI to draft the content (prompts, sections, labels) for a better version.',
      'Design it in Canva in A4 and US Letter sizes.',
      'Write clear listing photos: one mockup, one inside page, one “what you get.”',
      'Release a small set (3–5 items) in the same style so they sell each other.',
    ],
    tools: ['Canva', 'ChatGPT', 'Etsy or Gumroad'],
    firstMoney: 'Often 3–8 weeks after listing.',
    startCost: 'Small Etsy listing fees',
    difficulty: 'Easy start',
    honestNote: 'Check each marketplace’s rules on AI-generated content and disclose where asked.',
  },
  {
    day: 5,
    title: 'Low-content books on Amazon KDP',
    hook: 'A coloring book has almost no words. It can still be a real business.',
    summary:
      'Coloring books, journals and activity books can be published on Amazon KDP for free and printed on demand. AI can help with line-art ideas and interiors, but quality and originality decide whether it sells.',
    whoFor: 'Patient people who like design and can wait for results.',
    steps: [
      'Pick a specific audience and theme (for example: ocean animals for ages 4–8).',
      'Create 25–40 clean, consistent pages. Check every line and edge at print size.',
      'Design a cover that reads clearly as a thumbnail.',
      'Publish on KDP, answer the AI-content disclosure honestly, and order one proof copy.',
      'Build a series: one theme per book, same style, so readers buy the next one.',
    ],
    tools: ['An image generator', 'Canva or Affinity', 'Amazon KDP'],
    firstMoney: 'Weeks to months; most books earn small, steady amounts.',
    startCost: 'Free to publish; a proof copy costs a few dollars',
    difficulty: 'Some skill',
    honestNote: 'Low effort books get buried. One great book beats ten rushed ones.',
  },
  {
    day: 6,
    title: 'Social media management for local businesses',
    hook: 'The café next to you posts once a month. That’s not laziness — it’s a job opening.',
    summary:
      'Small shops know they should post but don’t have time. With AI for captions and planning, one person can manage several local accounts each month.',
    whoFor: 'People with a phone, decent taste and the confidence to message businesses.',
    steps: [
      'List 20 local businesses with weak or inactive accounts.',
      'Make a free sample: 3 post designs and captions for one of them.',
      'Send it with a simple monthly offer (for example, 12 posts a month).',
      'Use AI to plan a month of content in one sitting, then design in Canva.',
      'Send a short monthly report: what you posted and what performed best.',
    ],
    tools: ['ChatGPT', 'Canva', 'Meta Business Suite'],
    firstMoney: 'Often within 1–3 weeks if you reach out in person or by WhatsApp.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote: 'The hard part is outreach, not content. Expect many “no”s before a “yes.”',
  },
  {
    day: 7,
    title: 'Set up AI chat assistants for small businesses',
    hook: 'Every business gets the same 20 questions. Most answer them by hand, every day.',
    summary:
      'Clinics, salons and shops answer the same questions about prices, timings and location. You can set up a website or WhatsApp assistant that answers them, using no-code tools.',
    whoFor: 'Tech-curious people who enjoy setting things up.',
    steps: [
      'Learn one no-code chatbot builder well by building a bot for an imaginary business.',
      'Interview a real business: collect their 20 most common questions and the answers.',
      'Build, test with tricky questions, and add “talk to a human” for anything unclear.',
      'Charge a setup fee plus a small monthly fee for updates.',
    ],
    tools: ['Tidio, Botpress or a WhatsApp Business tool', 'ChatGPT', 'Google Sheets'],
    firstMoney: 'Typically 3–6 weeks while you learn and land the first client.',
    startCost: 'Free plans exist for most builders',
    difficulty: 'Some skill',
    honestNote: 'Always let customers reach a person. A bot that traps people hurts the business.',
  },
  {
    day: 8,
    title: 'AI product photos for online sellers',
    hook: 'A product shot on a bedsheet loses the sale. The same product on a clean scene doesn’t.',
    summary:
      'Small online sellers often have poor photos. AI tools can remove backgrounds and place products in clean, realistic scenes — a quick, visible improvement you can sell.',
    whoFor: 'People with an eye for visuals.',
    steps: [
      'Find sellers on Instagram or Daraz/Etsy with weak photos.',
      'Redo 2–3 of their photos for free as a before/after sample.',
      'Offer a package: 10 edited photos per product.',
      'Keep the product itself accurate — only change the background and lighting.',
    ],
    tools: ['Photoroom or Canva background tools', 'Adobe Firefly or similar'],
    firstMoney: 'Often 1–3 weeks — before/after samples sell themselves.',
    startCost: 'Free tiers to start',
    difficulty: 'Easy start',
    honestNote: 'Never alter what the product looks like. Misleading photos cause returns and complaints.',
  },
  {
    day: 9,
    title: 'Résumé and LinkedIn rewriting',
    hook: 'People will spend hours applying for jobs and zero minutes fixing the résumé that gets ignored.',
    summary:
      'Job seekers pay for a clear résumé and profile. AI speeds up the drafting; your value is asking the right questions and making their real achievements stand out.',
    whoFor: 'Good writers and good listeners.',
    steps: [
      'Make a short intake form: past roles, results, target job.',
      'Use AI to draft bullet points from their answers, then rewrite with real numbers.',
      'Match keywords to 2–3 job ads they’re targeting.',
      'Deliver a résumé, a LinkedIn headline and an About section as one package.',
    ],
    tools: ['Claude or ChatGPT', 'Google Docs', 'Canva résumé templates'],
    firstMoney: 'Often 1–2 weeks through friends, students and LinkedIn posts.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote: 'Never invent experience. Your job is clarity, not fiction.',
  },
  {
    day: 10,
    title: 'Turn long videos into short clips',
    hook: 'Podcasters record one hour and post it once. You can turn it into twenty posts.',
    summary:
      'Creators and coaches have long videos sitting unused. AI tools can find highlights and add captions; you pick the best moments and polish them.',
    whoFor: 'People who enjoy editing.',
    steps: [
      'Find podcasters or YouTubers who post long videos but few shorts.',
      'Cut 3 sample clips from one of their episodes and send them over.',
      'Offer a monthly package (for example, 15 clips a month).',
      'Use AI to suggest moments, then choose and edit the strongest yourself.',
    ],
    tools: ['Opus Clip or Descript', 'CapCut'],
    firstMoney: 'Usually 2–4 weeks.',
    startCost: 'Free tiers; paid plans once you have clients',
    difficulty: 'Some skill',
    honestNote: 'Automatic clip tools pick a lot of weak moments. Your taste is the service.',
  },
  {
    day: 11,
    title: 'Translation with AI and a human check',
    hook: 'Machine translation is free. Correct translation still isn’t.',
    summary:
      'If you speak two languages well, AI can produce a fast first draft and you fix tone, meaning and cultural details. Businesses pay for the confidence that it’s right.',
    whoFor: 'Bilingual people — Urdu, Arabic and English pairs are in demand.',
    steps: [
      'Choose your language pair and one or two content types (websites, menus, product listings).',
      'Translate a sample page and keep notes of every AI mistake you fixed — show this to clients.',
      'List the service on freelance platforms and reach out to local exporters or schools.',
      'Price per word or per page, with a faster rush option.',
    ],
    tools: ['DeepL or Google Translate', 'Claude or ChatGPT for tone', 'Google Docs'],
    firstMoney: 'Often 2–4 weeks.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Don’t take legal or medical translations unless you’re qualified.',
  },
  {
    day: 12,
    title: 'Simple websites for local businesses',
    hook: 'Half the businesses on Google Maps have no website. They’re losing customers to the ones that do.',
    summary:
      'A clean one- to three-page site with hours, location, services and WhatsApp is enough for most small businesses. AI helps with copy and code; your job is making it look trustworthy.',
    whoFor: 'People who like design and are willing to learn basic web tools.',
    steps: [
      'Pick one type of business (salons, clinics, cafés) and build one great demo site.',
      'Use AI to write the copy and help with any code you get stuck on.',
      'Show the demo to 10 businesses of that type in person or by message.',
      'Charge a build fee plus a small yearly fee for hosting and updates.',
    ],
    tools: ['Framer, Webflow or code with an AI assistant', 'Vercel or Netlify', 'Canva'],
    firstMoney: 'Usually 2–6 weeks.',
    startCost: 'Free hosting tiers; domains cost a little per year',
    difficulty: 'Takes practice',
    honestNote: 'Every client should get a site that feels like theirs, not the same template recoloured.',
  },
  {
    day: 13,
    title: 'A niche newsletter',
    hook: 'An email list is the only audience no algorithm can take away from you.',
    summary:
      'Pick a niche, use AI to help with research and summaries, and send one genuinely useful email each week. Income comes from sponsors, affiliate links or your own products once readers trust you.',
    whoFor: 'Curious people who enjoy reading and explaining.',
    steps: [
      'Choose a topic narrow enough to own (for example: AI tools for teachers).',
      'Set up a free newsletter and write your first three issues before announcing it.',
      'Use AI to summarise sources, then add your own opinion and examples.',
      'Share each issue on social media and invite readers to forward it.',
    ],
    tools: ['Beehiiv or Substack', 'Perplexity for research', 'Claude for summaries'],
    firstMoney: 'Usually 3–6 months.',
    startCost: 'Free',
    difficulty: 'Takes practice',
    honestNote: 'Readers can tell a pasted AI summary from a real opinion. Add yours.',
  },
  {
    day: 14,
    title: 'YouTube thumbnail design',
    hook: 'The thumbnail decides whether anyone ever sees the video.',
    summary:
      'YouTubers constantly need thumbnails. AI tools help with backgrounds, cut-outs and concepts; you bring strong composition and readable text.',
    whoFor: 'Designers or people who want to become one.',
    steps: [
      'Study 50 thumbnails from big channels in one niche and note the patterns.',
      'Redesign 5 thumbnails from small channels as portfolio pieces.',
      'Offer packages of 4 or 8 thumbnails per month.',
      'Deliver two options per video so the creator can test.',
    ],
    tools: ['Photoshop or Photopea', 'Canva', 'An image generator'],
    firstMoney: 'Often 2–4 weeks.',
    startCost: 'Free with Photopea',
    difficulty: 'Some skill',
    honestNote: 'Don’t use clickbait the video can’t deliver — it hurts the creator’s channel.',
  },
  {
    day: 15,
    title: 'Workflow automation for businesses',
    hook: 'Somewhere, someone is copying data from one spreadsheet into another by hand. Every day.',
    summary:
      'Tools like Zapier and Make connect apps together — new form submissions go to a sheet, an email and a WhatsApp alert automatically. Adding AI steps makes them even more useful.',
    whoFor: 'Logical thinkers who like solving puzzles.',
    steps: [
      'Learn one automation tool by automating three things in your own life.',
      'Ask small businesses what boring task they repeat most often.',
      'Build it, test it with real data, and record a 2-minute screen video explaining it.',
      'Charge per automation, plus a monthly fee to maintain it.',
    ],
    tools: ['Zapier or Make', 'Google Sheets', 'ChatGPT API steps'],
    firstMoney: 'Usually 3–6 weeks.',
    startCost: 'Free tiers available',
    difficulty: 'Takes practice',
    honestNote: 'Document everything you build, so the business isn’t stuck if you’re unavailable.',
  },
  {
    day: 16,
    title: 'Sell Notion templates',
    hook: 'People don’t buy Notion templates. They buy the feeling of finally being organised.',
    summary:
      'Templates for study planning, content calendars, budgets or client management sell on Gumroad and Notion’s marketplace. AI helps with structure and formulas.',
    whoFor: 'Organised people who already use Notion.',
    steps: [
      'Build a template you genuinely use, then clean it up for other people.',
      'Add a short video or page explaining how to use it.',
      'List it with screenshots that show the template full of example data.',
      'Offer a free mini version that links to the full one.',
    ],
    tools: ['Notion', 'ChatGPT for formulas', 'Gumroad'],
    firstMoney: 'Often 3–8 weeks.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote: 'The market is crowded. A clear niche (“for nursing students”) helps a lot.',
  },
  {
    day: 17,
    title: 'Create study materials and tutor with AI',
    hook: 'Students don’t need more notes. They need someone to make the notes make sense.',
    summary:
      'If you’re strong in a subject, AI can help you make practice questions, summaries and flashcards fast. Sell them, or use them to run better online tutoring sessions.',
    whoFor: 'Students and graduates strong in a subject.',
    steps: [
      'Pick one subject and exam board or level you know well.',
      'Create a free sample pack: one chapter summary and 20 practice questions.',
      'Share it in student groups and offer paid packs or 1:1 sessions.',
      'Check every AI-generated question and answer yourself.',
    ],
    tools: ['Claude or ChatGPT', 'Google Docs', 'Quizlet', 'Google Meet'],
    firstMoney: 'Often 1–3 weeks through student groups.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote: 'Help students learn, not cheat. That keeps parents and schools on your side.',
  },
  {
    day: 18,
    title: 'Sell AI images and vectors on stock sites',
    hook: 'Some stock sites accept AI images. Most people uploading them are doing it wrong.',
    summary:
      'Some stock platforms accept generative AI content if it’s labelled. What sells is not pretty art but useful, specific images that designers search for.',
    whoFor: 'People who enjoy making images and can work in bulk.',
    steps: [
      'Read the AI content rules of the stock site carefully before uploading anything.',
      'Research what designers search for (business, seasonal, concepts) rather than what’s fun to make.',
      'Create consistent sets of 10–20 images on one theme.',
      'Write accurate titles and keywords, and label AI content as required.',
    ],
    tools: ['An image generator', 'An upscaler', 'Adobe Stock or similar'],
    firstMoney: 'Small and slow — think months, not weeks.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Earnings per image are small. This only works at volume and with good research.',
  },
  {
    day: 19,
    title: 'Meeting notes and transcription service',
    hook: 'Nobody remembers what was decided in the meeting. Everyone wishes someone wrote it down.',
    summary:
      'Coaches, small teams and researchers need clean notes, summaries and action items from calls and interviews. AI transcribes; you turn the transcript into something useful.',
    whoFor: 'Detail-oriented people with good English.',
    steps: [
      'Offer three deliverables: full transcript, one-page summary, action items.',
      'Practise on public podcast episodes to build samples.',
      'Reach out to coaches, researchers and small agencies.',
      'Agree on how recordings are stored and deleted, and stick to it.',
    ],
    tools: ['Otter, Descript or Whisper', 'Claude for summaries'],
    firstMoney: 'Often 2–4 weeks.',
    startCost: 'Free tiers',
    difficulty: 'Easy start',
    honestNote: 'Recordings can be private. Treat client files carefully and never reuse them.',
  },
  {
    day: 20,
    title: 'A niche blog with affiliate links',
    hook: 'A blog post you write once can keep earning while you sleep — if you pick the right topic.',
    summary:
      'Write helpful articles in a niche where people buy things (tools, gadgets, courses), and earn a commission when readers buy through your links. AI helps with research and outlines; real experience helps you rank.',
    whoFor: 'Patient writers.',
    steps: [
      'Choose a niche you can write 50 articles about, with products people actually buy.',
      'Write “best X for Y” and “how to” articles based on real use where possible.',
      'Join affiliate programs for the products you recommend.',
      'Publish consistently for six months before judging results.',
    ],
    tools: ['WordPress or a simple site', 'Google Search Console', 'Claude for outlines'],
    firstMoney: 'Usually 4–9 months.',
    startCost: 'Domain and hosting',
    difficulty: 'Takes practice',
    honestNote: 'Mass-produced AI articles rarely rank today. Original insight is the edge.',
  },
  {
    day: 21,
    title: 'Voiceover services with licensed AI voices',
    hook: 'Not everyone wants to hear your voice. That doesn’t mean you can’t sell voice work.',
    summary:
      'Explainer videos, e-learning and ads need narration. With a commercially licensed AI voice and careful editing, you can deliver clean voiceovers quickly.',
    whoFor: 'People who care about pacing and pronunciation.',
    steps: [
      'Choose a voice tool whose plan allows commercial use.',
      'Make three demo reels: explainer, ad and audiobook-style.',
      'Fix pacing, pauses and pronunciation manually — that’s the craft.',
      'Offer per-minute pricing on freelance platforms.',
    ],
    tools: ['ElevenLabs or similar (commercial plan)', 'Audacity'],
    firstMoney: 'Often 2–4 weeks.',
    startCost: 'A paid voice plan for commercial use',
    difficulty: 'Some skill',
    honestNote: 'Never clone a real person’s voice without their written permission.',
  },
  {
    day: 22,
    title: 'Custom AI assistants for coaches and experts',
    hook: 'Coaches answer the same questions 50 times a week. They’d pay to answer them once.',
    summary:
      'Experts have knowledge locked in PDFs, videos and notes. You can turn it into a custom assistant (like a custom GPT or Claude Project) that their clients can use.',
    whoFor: 'People who understand prompting well.',
    steps: [
      'Build one assistant for yourself using your own notes, and learn its limits.',
      'Find a coach or teacher with lots of existing material.',
      'Organise their material, write clear instructions, and test hard questions.',
      'Charge a setup fee and offer monthly updates.',
    ],
    tools: ['Custom GPTs or Claude Projects', 'Google Drive'],
    firstMoney: 'Usually 3–6 weeks.',
    startCost: 'A paid AI plan',
    difficulty: 'Some skill',
    honestNote: 'Tell users clearly that it’s an assistant, and when to contact the real expert.',
  },
  {
    day: 23,
    title: 'Email copy for online stores',
    hook: 'Most online stores have an email list they never email. That’s money sitting still.',
    summary:
      'Welcome emails, abandoned-cart reminders and weekly offers bring sales for online shops. AI helps you draft; you match the brand voice and plan the sequence.',
    whoFor: 'Writers who like sales and psychology.',
    steps: [
      'Learn the five basic e-commerce email flows.',
      'Write a sample welcome sequence for a real store (as a free sample).',
      'Pitch stores that have a newsletter signup but rarely send emails.',
      'Charge per flow, then offer a monthly retainer.',
    ],
    tools: ['Claude or ChatGPT', 'Klaviyo or Mailchimp'],
    firstMoney: 'Often 2–5 weeks.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'No fake urgency or false discounts. They work once and damage trust after.',
  },
  {
    day: 24,
    title: 'Print-on-demand designs',
    hook: 'You can sell t-shirts without ever touching one.',
    summary:
      'Print-on-demand services print and ship products when someone orders. You create designs for a specific audience; AI helps with ideas and artwork.',
    whoFor: 'Creative people who understand a specific community.',
    steps: [
      'Pick a community with strong identity (nurses, teachers, gamers, a sport).',
      'Create 10 designs around jokes or phrases that community actually uses.',
      'Upload to a POD platform and order one sample to check quality.',
      'Promote inside that community, not to everyone.',
    ],
    tools: ['An image generator', 'Canva or Illustrator', 'Printful / Redbubble'],
    firstMoney: 'Often 1–3 months.',
    startCost: 'Free to list; samples cost money',
    difficulty: 'Some skill',
    honestNote: 'Avoid brand names, logos and characters — trademark strikes close stores.',
  },
  {
    day: 25,
    title: 'Pinterest management',
    hook: 'Pinterest isn’t a social network. It’s a search engine most businesses ignore.',
    summary:
      'Pins can drive traffic for months. Bloggers, shops and creators pay for someone to design and schedule pins. AI helps with titles, descriptions and keywords.',
    whoFor: 'Visual, organised people.',
    steps: [
      'Grow one Pinterest account (yours) for a month to learn what works.',
      'Offer a package: a set number of pins per month plus keyword research.',
      'Use AI for pin titles and descriptions; design in Canva.',
      'Send monthly traffic reports from Pinterest analytics.',
    ],
    tools: ['Pinterest', 'Canva', 'ChatGPT', 'Tailwind (scheduler)'],
    firstMoney: 'Usually 3–6 weeks.',
    startCost: 'Free',
    difficulty: 'Easy start',
    honestNote: 'Pinterest is slow. Set client expectations: results build over months.',
  },
  {
    day: 26,
    title: 'Spreadsheet cleanup and data reports',
    hook: 'Every business has a messy spreadsheet. Few have someone who can make it make sense.',
    summary:
      'Cleaning data, building simple dashboards and writing short monthly reports are valuable skills. AI can help write formulas and explain results.',
    whoFor: 'Analytical people comfortable with Excel or Google Sheets.',
    steps: [
      'Learn the core skills: cleaning, pivot tables, charts and lookup formulas.',
      'Download public datasets and build three sample dashboards.',
      'Offer fixed-price cleanups and monthly reports to small businesses.',
      'Check AI-written formulas on a copy before using them on client data.',
    ],
    tools: ['Google Sheets or Excel', 'ChatGPT or Claude for formulas', 'Looker Studio'],
    firstMoney: 'Often 2–5 weeks.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Work on copies, keep client data private, and never paste sensitive data into AI tools.',
  },
  {
    day: 27,
    title: 'Help experts build their online course',
    hook: 'Experts know their subject. Most have no idea how to turn it into a course.',
    summary:
      'You help a teacher, coach or professional structure a course: outline, lesson scripts, worksheets and quizzes. AI speeds up drafting; you make it clear and well-paced.',
    whoFor: 'Organised people who explain things well.',
    steps: [
      'Interview the expert and record their knowledge.',
      'Use AI to draft an outline, then reorder it the way a beginner would learn.',
      'Write scripts and worksheets for each lesson.',
      'Charge per project, with milestones for outline, scripts and materials.',
    ],
    tools: ['Claude or ChatGPT', 'Google Docs', 'Canva', 'Teachable or similar'],
    firstMoney: 'Usually 1–2 months.',
    startCost: 'Free',
    difficulty: 'Takes practice',
    honestNote: 'The expert owns the knowledge. Agree in writing who owns the finished course.',
  },
  {
    day: 28,
    title: 'Build a tiny AI tool',
    hook: 'You don’t need to build the next ChatGPT. You need to build something one group of people uses daily.',
    summary:
      'Small, focused tools — a caption generator for salons, a quiz maker for teachers — can be built with AI coding help and earn through small subscriptions.',
    whoFor: 'Beginner to intermediate coders, or brave learners.',
    steps: [
      'Find a repeated task one audience complains about.',
      'Build the simplest working version in a weekend with an AI coding assistant.',
      'Give it to 10 real users free and watch how they use it.',
      'Add payments only once people come back without being reminded.',
    ],
    tools: ['Claude or ChatGPT for coding', 'Vercel', 'Stripe or Lemon Squeezy'],
    firstMoney: 'Usually 2–6 months.',
    startCost: 'Low; API usage costs grow with users',
    difficulty: 'Takes practice',
    honestNote: 'Watch your API costs closely. A free tool that goes viral can cost you money.',
  },
  {
    day: 29,
    title: 'Ad copy and creatives for small brands',
    hook: 'Small brands spend money on ads that were written in five minutes. You can write them in thirty.',
    summary:
      'Write and design ad variations for small brands running Meta or Google ads. AI helps you produce many angles fast; testing tells you which one works.',
    whoFor: 'People interested in marketing and persuasion.',
    steps: [
      'Learn the basics: hooks, offers, angles and simple A/B testing.',
      'Study the Meta Ad Library for brands in one niche.',
      'Make 10 ad variations for a brand as a free sample.',
      'Offer monthly creative packs, and report which ones performed best.',
    ],
    tools: ['ChatGPT or Claude', 'Canva', 'Meta Ad Library'],
    firstMoney: 'Often 2–5 weeks.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Don’t make claims the product can’t back up. Ad platforms reject them and so do customers.',
  },
  {
    day: 30,
    title: 'Teach what you’ve learned',
    hook: 'If you followed this series for 30 days, you now know more than most people starting out. That’s worth something.',
    summary:
      'The final way is the one that ties all of them together: document what you tried and teach it. A workshop, a guide or a small community built around your real experience is a product only you can make.',
    whoFor: 'Anyone who tried at least one of these methods.',
    steps: [
      'Pick the method from this series that worked best for you.',
      'Write down exactly what you did, what failed, and what you’d do differently.',
      'Turn it into a short guide, a live workshop or a paid community.',
      'Share your real results — small honest numbers build more trust than big vague ones.',
    ],
    tools: ['Whatever you used', 'Gumroad', 'Google Meet or Zoom'],
    firstMoney: 'Depends on the audience you built over the 30 days.',
    startCost: 'Free',
    difficulty: 'Some skill',
    honestNote: 'Only teach what you’ve actually done. That’s the whole point.',
  },
]

/** Today's date (YYYY-MM-DD) in the series timezone. */
function todayInTz(): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: SERIES_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
  return parts // en-CA formats as YYYY-MM-DD
}

function daysBetween(a: string, b: string) {
  const [ay, am, ad] = a.split('-').map(Number)
  const [by, bm, bd] = b.split('-').map(Number)
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000)
}

/** Preview mode: add ?preview=all to any URL to see every day unlocked (for you, while editing). */
function previewAll(): boolean {
  if (typeof window === 'undefined') return false
  try {
    if (new URLSearchParams(window.location.search).get('preview') === 'all') {
      sessionStorage.setItem('aicadmia-preview', '1')
    }
    return sessionStorage.getItem('aicadmia-preview') === '1'
  } catch {
    return false
  }
}

/** 0 = before launch, 1..30 = live day, >30 = series finished. */
export function currentDay(): number {
  if (previewAll()) return 30
  return daysBetween(SERIES_START, todayInTz()) + 1
}

export function isUnlocked(day: number) {
  return day <= currentDay()
}

export function unlockDate(day: number): Date {
  const [y, m, d] = SERIES_START.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d + day - 1))
}

export function formatUnlock(day: number) {
  return unlockDate(day).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })
}

/** Milliseconds until Day 1 opens (midnight in Asia/Karachi, UTC+5). */
export function msUntilLaunch(): number {
  const [y, m, d] = SERIES_START.split('-').map(Number)
  const launchUtc = Date.UTC(y, m - 1, d) - 5 * 3600 * 1000
  return launchUtc - Date.now()
}
