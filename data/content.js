// ─────────────────────────────────────────────
//  data/content.js  —  Edit everything here
// ─────────────────────────────────────────────

export const person = {
  name:           'Hugo Penacho',
  role:           'Technical Consultant',
  location:       'Portugal, Europe · Remote-first',
  email:          'hpworkdev@gmail.com',
  github:         'https://github.com/hpenacho',
  linkedin:       'https://linkedin.com/in/hugopenacho',
  cvUrl:          '/hugo-penacho-cv.pdf',
  available:      true,
  availableLabel: 'Available now',
  availableNote:  'Technical Consultant, Implementation Consultant, Forward Deployed Engineer, Support Engineer roles or similar · Remote-first preferred',
  tagline:        `Protecting your deadline by asking the hard questions two weeks early`,
  about:          `I started as a web developer at Siemens, building internal tools and talking directly to clients to figure out what they actually needed. That second part — understanding what people need — turned out to be what I was most interested in.

At Textkernel, and now Bullhorn, I've spent four years sitting between enterprise clients and complex technical systems, making sure the two sides understand each other. The work isn't glamorous — a lot of provisioning, troubleshooting, documentation, and difficult conversations — but I've learned that the people who show up consistently and follow through quietly are the ones teams actually rely on.`,
  heroQuote: {
    text:       'Hugo is a sharp and energetic consultant who brings structure and clarity to every task and project. He is the one to ask the right questions early, and makes sure expectations of stakeholders are aligned. [...] Beyond his technical skills, he is reliable and a great team-player.',
    author:     'Tonio Kellner',
    authorRole: 'Software Engineer, Textkernel',
  },
};

export const metrics = [
  { value: '100+',  label: 'Enterprise Clients', detail: 'Including 8 Fortune 500 companies and 5 government agencies' },
  { value: '300+',  label: 'Product Rollouts',    detail: 'AI-powered product rollouts tracked in Salesforce' },
  { value: '70%', label: 'Error Reduction', detail: 'Via validation tools & process automation' },
  { value: '30%',label: 'Faster delivery',  detail: 'Through Jenkins, internal scripts & process streamlining' },
];

export const currently = [
  { emoji: '📖', label: 'Reading',  value: 'Atomic Habits — James Clear' },
  { emoji: '🛠',  label: 'Building', value: 'A lightweight observability CLI for Kubernetes clusters' },
  { emoji: '🧠',  label: 'Learning', value: 'eBPF internals and Linux kernel tracing' },
  { emoji: '🎯',  label: 'Seeking',  value: 'Technical Consultant, Implementation Consultant, Support Engineer roles or similar' },
];

export const experience = [
  {
    period:  'Jun 2024 — Jan 2026',
    role:    'Senior Technical Consultant',
    company: 'Bullhorn',
    location:'Remote · Amsterdam, Netherlands',
    desc:    `𝐏𝐨𝐬𝐭-𝐉𝐮𝐧 𝟐𝟎𝟐𝟒 𝐚𝐜𝐪𝐮𝐢𝐬𝐢𝐭𝐢𝐨𝐧 𝐨𝐟 𝐓𝐞𝐱𝐭𝐤𝐞𝐫𝐧𝐞𝐥 𝐛𝐲 𝐁𝐮𝐥𝐥𝐡𝐨𝐫𝐧
 Continued to provision, configure, troubleshoot and deliver most Textkernel products as pre-acquisition, plus:
• Delivered new Bullhorn products, optimizing candidate matching & talent workflows on unified platform.

𝗛𝗶𝗴𝗵𝗹𝗶𝗴𝗵𝘁𝘀
• Successfully delivered AI-powered recruitment solutions for a portfolio of over 100 enterprise clients (incl. 8 Fortune 500, 16 Global 2000).
• Implemented and delivered tailored AI recruitment solutions for 5 government agencies, addressing unique public sector needs.
• Considerably reduced delivery time by up to 30% for key Textkernel products through improvements in provisioning processes (Jenkins) and cross-department process streamlining.
• Slashed user-made provisioning errors by up to 70% by implementing validation tools that enforce naming conventions and block invalid inputs. 
• Successfully finalized over 500 JIRA issues across internal operational enhancements and key customer requests.
• Completed over 300 customer product deliveries and functionality rollouts, tracked in Salesforce.

𝗖𝗼𝗿𝗲 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝗶𝗲𝘀
• Created parameterized Jenkins jobs for automated, customer-tailored Textkernel product deployments.
• Analyzed external customer systems and determined optimal service connections.
• Created technical designs, extensive documentation and oversaw project implementation.
• Managed communication and collaboration with customers and internal resources, ensuring successful project delivery.
• Troubleshot issues ranging from configuration errors to product issues on both ends.
• Worked collaboratively with cross-functional teams to continuously improve products and processes.
`,
    tags:    ['XML', 'Python', 'Jenkins', 'API', 'SOAP', 'AI', 'AWS', 'Kibana', 'Grafana', 'Data Manipulation'],
  },
  {
    period:  'Jun 2022 — Jan 2026',
    role:    'Technical Consultant',
    company: 'Textkernel',
    location:'Remote · Amsterdam, Netherlands',
    desc: `Company acquisition by Bullhorn, see above for full role details which remained largely unchanged.`,
    tags:    ['XML', 'Python', 'Jenkins', 'API', 'SOAP', 'AI', 'AWS', 'Kibana', 'Grafana', 'Data Manipulation'],
  },
  {
    period:  'Feb 2021 — May 2022',
    role:    'Web Developer',
    company: 'Siemens',
    location:'Remote · Lisbon, Portugal',
    desc: `• Developed web applications for internal clients.
• Provided corrective maintenance on company applications to ensure smooth operations.
• Communicated directly with clients to gather feedback and helped to devise solutions that met their unique needs.
• Continuously developed strong problem-solving abilities and collaborated effectively with team members to ensure timely delivery of high-quality work.`,
    tags:    ['React', 'Node.js', 'Cypress', 'Jest', 'Typescript'],
  },
  {
    period:  'Nov 2020 - Jan 2021',
    role:    'Web Developer - Internship',
    company: 'Siemens',
    location:'Remote · Lisbon, Portugal',
    desc: `• Successfully completed a 400-hour curricular internship over 3 months, which led to being hired for a full-time position.
• Demonstrated proficiency in Angular, .NET Core, and Microsoft SQL Server.
• Committed to continuous learning and contributed to key projects, demonstrating dedication to the organization's success.
• Communicated effectively with senior team members, providing regular progress updates and seeking feedback to ensure project success.`,
    tags:    ['MS SQL Server', 'Angular', 'Typescript', '.NET Core'],
  },
];

export const education = [
  {
    period:  'Jan 2021 - Dec 2021',
    role:    'Computer Programming',
    company: 'University of Helsinki',
    location:'Remote · Finland',
    desc:    'M.E.R.N. Stack Course supported and accredited by the University of Helsinki.',
    tags:    ['React', 'Node.js', 'Express', 'MongoDB','Redux'],
  },
  {
    period:  'Sep 2019 - Jan 2021',
    role:    'IT Technologies and Programming Specialist, Computer Programming',
    company: 'ATEC - Training Academy',
    location:'Portugal',
    desc:    'Completed a 1300-hour theory course + 400-hour internship, building academic projects while gaining hands-on experience in Java, C#, Microsoft SQL Server, networking, OOP, project management and more.',
    tags:    ['Object Oriented Programming', 'Algorithms', 'Java', 'C#','Microsoft SQL Server', 'Javascript', 'Git', 'HTML5', 'CSS3', 'Bootstrap', 'ASP.NET', 'WinForms / WebForms', 'Agile Scrum', 'UML', 'Computer Networking', 'Linux'],
  },
];

export const skills = [
  { category: 'Languages',       items: ['Javascript', 'Typescript', 'Python', 'Java', 'C#', 'SQL'] },
  { category: 'Frontend',        items: ['React', 'Next.js', 'Angular', 'HTML', 'CSS'] },
  { category: 'Backend & APIs',  items: ['Node.js', 'REST', 'SOAP'] },
  { category: 'Data & Streaming',items: ['Microsoft SQL Server', 'MongoDB', 'Elasticsearch'] },
  { category: 'Infrastructure',  items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
  { category: 'Practices',       items: ['Technical Consultancy','Design Documents', 'Problem Solving', 'Professional Services', 'Software Implementation', 'Active Listening'] },
];

export const projects = [
  {
    name:     '(Placeholder) Starfield',
    tagline:  '(Placeholder) Open-source observability for small teams',
    desc:     '(Placeholder) A lightweight, self-hosted observability platform for teams tired of paying enterprise prices. Collects metrics, logs, and traces in one place. 1,200 GitHub stars, used by 60+ companies.',
    tags:     ['TypeScript', 'ClickHouse', 'React', 'OpenTelemetry'],
    emoji:    '🔭',
    liveUrl:  '#',
    githubUrl:'#',
    featured: true,
    caseStudy: {
      problem:  '(Placeholder) Small engineering teams get priced out of observability tooling the moment they scale past toy usage. A team of 8 paying $2k/mo for Datadog felt like a solved problem waiting to happen.',
      approach: '(Placeholder) Designed around three constraints: single-binary deploy, ClickHouse as the only dependency for query performance, and a UI that a non-observability engineer could navigate on day one.',
      outcome:  '(Placeholder) Reached 1,200 stars in 4 months, featured in a CNCF newsletter, and is now used by 60+ companies including two YC startups who replaced Datadog with it.',
    },
  },
  {
    name:     '(Placeholder) Noteify',
    tagline:  '(Placeholder) AI-powered writing assistant',
    desc:     '(Placeholder) Minimal note-taking app with semantic search, AI writing suggestions, and auto-tagging. Built in a weekend. Grew to 400 active users through word of mouth.',
    tags:     ['Next.js', 'OpenAI', 'Supabase', 'Vector DB'],
    emoji:    '📝',
    liveUrl:  '#',
    githubUrl:'#',
    featured: false,
  },
  {
    name:     '(Placeholder) GeoFlow',
    tagline:  '(Placeholder) Realtime geolocation stream visualiser',
    desc:     '(Placeholder) Visualise streaming geolocation data on a live map with clustering, heatmaps, and event replay. Built at TechCo, later open-sourced.',
    tags:     ['MapboxGL', 'WebSockets', 'Go', 'React'],
    emoji:    '🌐',
    liveUrl:  '#',
    githubUrl:'#',
    featured: false,
  },
  {
    name:     '(Placeholder) Fluxbot',
    tagline:  '(Placeholder) Slack incident-response assistant',
    desc:     '(Placeholder) Slack bot that triages on-call alerts, drafts incident timelines, and pages the right rotation. Saves ~30 min per incident.',
    tags:     ['Python', 'Slack API', 'PagerDuty', 'LLM'],
    emoji:    '🤖',
    liveUrl:  null,
    githubUrl:'#',
    featured: false,
  },
  {
    name:     '(Placeholder) cargo-diff',
    tagline:  '(Placeholder) Rust dependency auditor CLI',
    desc:     '(Placeholder) CLI tool that analyses Cargo.lock diffs across commits, highlighting breaking changes, license shifts, and known CVEs. 600+ stars on crates.io.',
    tags:     ['Rust', 'CLI', 'OSS', 'Security'],
    emoji:    '📦',
    liveUrl:  null,
    githubUrl:'#',
    featured: false,
  },
];

export const howIWork = [
{
    icon: '🎯',
    title: 'Focus on the "Why"',
    desc: 'I don\'t measure success by how much code I ship, but by how much friction I actually remove. I like to dig into the goal before we start building—sometimes a quick conversation can save us weeks of building the wrong thing.',
  },
  {
    icon: '🛡️',
    title: 'Guardrails, not hurdles',
    desc: 'I believe systems should be designed to catch us when we trip. I focus on building tools that handle the "obvious" mistakes automatically, so we can spend our energy on the interesting problems instead of worrying about common pitfalls.',
  },
  {
    icon: '🧭',
    title: 'Keep us aligned',
    desc: 'I enjoy being the link between what a customer needs and what the code actually does. I make sure everyone is on the same page from the start so we don\'t end up with surprises during Go-Live.',
  },
  {
    icon: '🤝',
    title: 'Strong opinions, loosely held',
    desc: 'I\'ll always bring a clear point of view to the table, but I\'m the first to pivot when I hear a better idea. I\'d much rather be proven wrong quickly than be right slowly, and I think the best work happens when we leave our egos at the door.',
  },
  {
    icon: '⚓',
    title: 'Catch it early',
    desc: 'I\'m a big fan of "boring" production environments. I try to validate ideas and find potential breaking points as early as possible, so that by the time we\'re ready to ship, we can all actually relax.',
  },
  {
    icon: '📜',
    title: 'Leave a trail',
    desc: 'I try to write for the "future me" and the next person who joins the project. Whether it\'s a quick doc or a clear log, I want to make sure my work is easy to follow so the team can keep moving without needing to ask me for directions.',
  }
];

export const recommendations = [
  {
    shortText: "Within a short period of time Hugo turned into a key player in my projects. He is one of my colleagues who makes things happen or get things done. [...] he is able to organize himself, to keep tasks on track, deliverables and milestones. This makes my life way easier.",
    name: 'Hasan Yilmaz',
    role: 'Senior Global Project Manager, Textkernel',
    initials: 'HY',
    color: 'gold',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
  {
    shortText: "He has this rare ability to stay calm, ask the right questions, and quickly understand what people actually need — even when they struggle to explain it themselves. [...] Hugo is the kind of colleague who makes work easier, teams stronger, and results better.",
    name: 'Sheyan Sohrabi',
    role: 'Customer Success and AI Specialist, Bullhorn',
    initials: 'SS',
    color: 'coral',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
  {
    shortText: "Having gone through that 'trial by fire' together, I can say with certainty that Hugo is as resilient as he is sharp. He has a remarkable ability to process and organize massive amounts of complex information with a meticulous eye for detail. [...] he doesn't just solve their tickets; he cares about their outcomes.",
    name: 'Abdelhamid Echaanani',
    role: 'Senior Technical Consultant, Textkernel',
    initials: 'AE',
    color: 'sage',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
  {
    shortText: "Hugo consistently demonstrated great technical expertise, ensuring that every customer project was executed on time. [...] He has an impressive ability to convey complex technical concepts in a clear and understandable manner, making collaboration seamless and productive",
    name: 'Adeline Mani-Rajan',
    role: 'Technical Consultant, Professional Services',
    initials: 'AM',
    color: 'blue',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
  {
    shortText: "Hugo is one of those people who really walks the talk - he excels in both his technical knowledge and execution. [...] He is meticulous, thoughtful when crafting solutions, and has a gift for explaining complex topics at all levels of understanding.",
    name: 'Elina Sulaiman',
    role: 'Technical Consultant, Textkernel',
    initials: 'ES',
    color: 'coral',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
  {
    shortText: "When he commits to something, you can trust that he will follow through with dedication. Beyond his professional expertise, his warm personality and positive energy make him a really nice colleague. [...] Any team needs a Hugo!",
    name: 'Loes Verloop',
    role: 'Support Engineer, Textkernel',
    initials: 'LV',
    color: 'sage',
    linkedinUrl: 'https://www.linkedin.com/in/hugopenacho/',
  },
];