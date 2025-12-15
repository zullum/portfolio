export const navItems = [
  { name: "About", link: "#about" },
  { name: "Resume", link: "/Sanel_Zulic_Fullstack_Developer_CV.pdf" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "A Full Stack Developer with 10+ years of experience in React.js, Node.js, AWS, PHP, Python, and Java.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on scanning software and web applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CRM Enhancements Platform",
    des: "Enterprise marketing automation platform built on serverless AWS technologies, replacing Salesforce Marketing Cloud. Features configuration-driven data sync with Salesforce, Mandrill, and Zoom integrations.",
    img: "/p1.jpg",
    iconLists: ["/aws.svg", "/nodejs.svg", "/ts.svg", "/dynamodb.svg", "/re.svg"],
    link: "/project/1",
    content: `
      ### Role: Senior Software Engineer (Salt Square)
      **Technologies:** Python, AWS Lambda, Step Functions, API Gateway, EventBridge, SNS/SQS, RDS MySQL, Git.

      Contributed to the development of an enterprise marketing automation platform built on **serverless AWS**, designed as a replacement for Salesforce Marketing Cloud. Implemented a configuration-driven data synchronization system for Salesforce objects and integrations with third-party services such as Mandrill and Zoom.
    `,
  },
  {
    id: 2,
    title: "App Compatibility Tool",
    des: "Architected and built a full-stack compatibility dashboard using React, Node.js, and AWS Lambda. Features AI-processed data visualization and charted analysis.",
    img: "/p2.jpg",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/nodejs.svg",
      "/express.svg",
      "/dynamodb.svg",
      "/aws.svg",
    ],
    link: "/project/2",
    content: `
      ### Role: Senior Software Engineer (Endava)
      **Technologies:** React, TypeScript, Node.js, Express, DynamoDB, AWS Amplify, OpenAI API, shadcn/ui, Atomic Design.

      Built a web application from scratch using React and Node.js to display AI-processed data about software compatibility with new computer chips. Responsible for API development, code reviews, technical documentation, and participation in executive meetings.
    `,
  },
  {
    id: 3,
    title: "ASCAP Mobile App",
    des: "Led full-cycle mobile development for earnings analytics. Integrated React Native frontend with complex backend data streams for real-time artist performance tracking.",
    img: "/p3.jpg",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/concourse.svg",
      "/jira.svg",
      "/bitbucket.svg",
    ],
    link: "/project/3",
    content: `
      ### Role: Full-stack Developer (Endava)
      **Technologies:** React Native, TypeScript, Concourse, Jira, Bitbucket, Atomic Design, Clean Architecture, Unit Testing, Accessibility.

      Developed new earnings and analytics features for an existing React Native mobile application used by publishers and artists. Work included analytics dashboards, earnings pages, role-based analytics logic, Datadog integration, unit testing, and bug fixing.
    `,
  },
  {
    id: 4,
    title: "ED Platform & Responsive Engine",
    des: "Engineered a responsive content engine for an online learning platform. Supported eBook/PDF quick views, real-time communication, and cross-iframe navigation.",
    img: "/p4.jpg",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/concourse.svg",
      "/jira.svg",
    ],
    link: "/project/4",
    content: `
      ### Role: Senior Software Engineer (Endava)
      **Technologies:** React, Redux, Python, Node.js, Colyseus, PeerJS, WebRTC, AWS S3, Jenkins, Jira.

      Developed features for an online learning platform focused on personalized teaching and learning. Built a responsive content engine supporting eBook/PDF quick views, live communication with screensharing, cross-iframe navigation using postMessage, and real-time insights panels.
    `,
  },
  {
    id: 5,
    title: "Custom Dashboard Solutions",
    des: "Designed and implemented custom dashboards using Drupal and Python. Focused on data visualization, backend systems, and performance optimization for complex datasets.",
    img: "/p5.jpg",
    iconLists: [
      "/re.svg",
      "/js.svg",
      "/tail.svg",
      "/xhtml.svg",
      "/jira.svg",
      "/aws.svg",
    ],
    link: "/project/5",
    content: `
      ### Role: Full-stack Developer (CA Design)
      **Technologies:** Python, Drupal, PHP, MySQL, JavaScript, HTML/CSS, Elasticsearch, Git.

      Designed and implemented custom dashboards and web applications using Drupal and Python. Focused on data visualization, backend systems, API integrations, real-time data, and performance optimization for complex datasets.
    `,
  },
];

export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    desc: "Building enterprise web applications with React, Node.js, AWS Lambda, and serverless architectures.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Developer",
    desc: "Experience with React Native for mobile application development.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior Full Stack Dev",
    desc: "2.5 years as senior developer leading full-stack implementations for online education platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    desc: "10+ years of full stack experience in React.js, Node.js, PHP, Python, and Java. Building scalable backend services and APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/zullum",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://x.com/zullumai",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/sanelzulic",
  },
];
