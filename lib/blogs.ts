export interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogs: Blog[] = [
  {
    slug: 'cyted-ai-visibility',
    title: 'Cyted - AI Visibility Platform',
    description: 'An AI Visibility platform evaluating brand presence across multiple LLMs using configurable buyer-intent prompts.',
    date: 'August 2026',
    tags: ['React', 'Next.js', 'LLMs', 'OpenAI', 'Claude', 'Node.js'],
    content: `
## Introduction
Cyted is a cutting-edge AI Visibility platform designed to help brands understand their presence across various Large Language Models (LLMs) including OpenAI, Claude, Gemini, Grok, and Mistral.

## The Challenge
Brands today are largely blind to how they are represented by generative AI. There is a strong need to track visibility, sentiment, and accuracy of AI-generated responses based on buyer-intent prompts.

## The Solution
I developed a scalable platform that concurrently queries multiple LLMs asynchronously. 
- **Configurable Prompts**: Users can set up tailored buyer-intent prompts.
- **Concurrent LLM Querying**: Optimized API polling to handle rate limits and async responses.
- **Data Extraction**: Structured parsing of AI outputs to benchmark competitors and deliver actionable visibility insights.

## Outcome
The platform offers real-time, actionable metrics for brands to actively manage and optimize their AI presence.
    `
  },
  {
    slug: 'stockflow-trading-platform',
    title: 'StockFlow: Event-Driven Trading Platform',
    description: 'A distributed, real-time stock market platform with event-driven trading workflows and low-latency processing.',
    date: 'July 2026',
    tags: ['Go', 'Kafka', 'WebSockets', 'Redis', 'Kubernetes'],
    content: `
## Introduction
StockFlow is a cloud-native financial platform engineered for extremely low-latency trading data processing and event-driven workflows.

## The Architecture
Built with Go and Node.js, the backend utilizes Apache Kafka for distributed message passing, ensuring that real-time stock market data is processed without bottlenecks.

### Key Highlights:
- **Real-Time WebSockets**: Pushing market updates to the frontend with sub-millisecond latency.
- **Microservices**: Containerized with Docker and orchestrated via Kubernetes on AWS for auto-scaling.
- **Observability**: Integrated Prometheus, Grafana, and OpenTelemetry for distributed tracing and performance monitoring.

## Conclusion
By applying advanced data structures and optimized algorithms, StockFlow achieves a highly reliable, low-latency architecture suitable for high-frequency data ingestion.
    `
  },
  {
    slug: 'workpunkt-saas',
    title: 'Workpunkt: Student Management SaaS',
    description: 'A production-grade platform with role-based workflows for students, agents, counsellors, and admins.',
    date: 'June 2026',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Docker'],
    content: `
## Introduction
Workpunkt is a comprehensive SaaS solution designed to streamline the management of student applications, bridging the gap between students, agents, and counsellors.

## Features & Implementation
- **Role-Based Access Control (RBAC)**: Secure, hierarchical access ensuring users only see data relevant to their role.
- **Document Handling**: Scalable and secure upload/verification workflows for academic documents.
- **Database Architecture**: Engineered using PostgreSQL and Prisma ORM for type-safe, highly relational queries.

## Results
Workpunkt is currently in production, successfully managing thousands of applications and drastically reducing administrative overhead for educational institutions.
    `
  },
  {
    slug: 'influmojo-marketplace',
    title: 'Influmojo: Brand-Influencer Marketplace',
    description: 'A full-stack web and mobile marketplace enabling secure authentication and real-time interactions.',
    date: 'April 2026',
    tags: ['Next.js', 'React Native', 'Socket.IO', 'Prisma'],
    content: `
## Introduction
Influmojo connects brands with influencers through a seamless, cross-platform marketplace available on both web and mobile.

## Development Approach
I utilized a unified tech stack featuring Next.js for the web platform and React Native for the mobile app, sharing a common Node.js/Prisma backend.

### Technical Highlights
- **Real-Time Chat**: Implemented Socket.IO for real-time negotiations and collaboration between brands and influencers.
- **Secure Authentication**: Robust JWT and OAuth flows to protect user data and financial transactions.
- **Marketplace Workflows**: End-to-end campaign management, from proposal to final delivery.

## Outcome
The platform offers a frictionless experience, significantly boosting successful brand-influencer partnerships.
    `
  },
  {
    slug: 'sapphire-broking-systems',
    title: 'Sapphire Broking: Financial Systems',
    description: 'Production financial applications with high-performance APIs and trading dashboards.',
    date: 'October 2025',
    tags: ['Go', 'TypeScript', 'NSE APIs', 'BSE APIs'],
    content: `
## Introduction
During my tenure at Sapphire Broking, I engineered robust financial applications, trading dashboards, and client portals.

## Technical Execution
- **Exchange Integration**: Developed highly optimized APIs to interface directly with NSE and BSE exchange systems using Go.
- **Trading Dashboards**: Built high-performance, real-time client portals using Next.js and TailwindCSS.
- **SEO Success**: Managed and optimized the company website, successfully ranking it #1 on Google for key industry terms.

## Mentorship & Leadership
Beyond coding, I mentored junior developers in Next.js and TypeScript, fostering a culture of clean code and pixel-perfect UI implementation based on Figma designs.
    `
  },
  {
    slug: 'studysync-learning',
    title: 'StudySync: Real-Time Learning',
    description: 'A real-time learning and collaboration platform demonstrating scalable application architecture.',
    date: 'August 2025',
    tags: ['React', 'Socket.IO', 'TailwindCSS'],
    content: `
## Introduction
StudySync was built to explore and demonstrate the capabilities of real-time application architectures in an educational context.

## Key Features
- **Collaborative Workspaces**: Live, synchronous interaction between students and educators.
- **Real-Time Messaging**: Built atop Node.js and Socket.IO.
- **Cloud Deployment**: Frontend hosted on Vercel and backend scaled on Render.

## Takeaways
This project served as a foundational exploration into real-time state synchronization, which later influenced my work on larger platforms like StockFlow.
    `
  },
  {
    slug: 'vanik-ai',
    title: 'Vanik: Agricultural AI Platform',
    description: 'An AI assistant utilizing RAG capabilities, vector embeddings, and voice interaction for agriculture.',
    date: 'June 2025',
    tags: ['LLMs', 'LangChain', 'RAG', 'Vector Embeddings'],
    content: `
## Introduction
Vanik was an experimental AI platform designed specifically to assist farmers and agricultural professionals using advanced LLM capabilities.

## Technology Stack
- **RAG & LangChain**: Implemented Retrieval-Augmented Generation using vector embeddings to provide accurate, context-aware agricultural advice.
- **Voice Interaction**: Integrated Google Text-to-Speech (TTS) to allow hands-free use in the field.

## Evolution
The intensive experimentation with vector databases and AI integration in Vanik laid the groundwork for the scalable architectures I subsequently built.
    `
  },
  {
    slug: 'citycare-dashboard',
    title: 'CityCare: Hospital Management',
    description: 'A comprehensive healthcare management dashboard for hospital workflows.',
    date: 'March 2025',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
    content: `
## Introduction
CityCare is a dedicated platform designed to digitalize and streamline hospital management workflows.

## Features
- **Dashboard Interfaces**: Clean, intuitive React dashboards for medical staff to track patient flow and resources.
- **Workflow Management**: Built robust backend APIs to handle sensitive healthcare data efficiently via PostgreSQL.

## Impact
This portfolio project demonstrated my ability to handle complex, domain-specific requirements and translate them into intuitive digital interfaces.
    `
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
