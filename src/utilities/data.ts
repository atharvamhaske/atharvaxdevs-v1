export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Finance Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization.",
    longDescription:
      "Finance Dashboard is a comprehensive financial analytics platform designed for businesses and individuals to track, analyze, and visualize their financial data in real-time. The application provides intuitive dashboards, interactive charts, and detailed reports that help users make data-driven financial decisions.\n\nUsing modern web technologies, the platform offers a seamless user experience with responsive design and real-time updates. The dashboard includes expense tracking, income management, budget planning, investment monitoring, and financial goal setting features.",
    features: [
      "Real-time financial data visualization",
      "Interactive charts and graphs",
      "Expense categorization and tracking",
      "Budget planning and monitoring",
      "Financial report generation",
      "Data export capabilities",
      "Mobile-responsive design",
    ],
    challenges:
      "One of the main challenges was implementing real-time data updates while maintaining optimal performance. We solved this by using WebSockets for critical updates and implementing efficient data caching strategies. Another challenge was creating intuitive data visualizations that could convey complex financial information clearly to users with varying levels of financial literacy.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    ],
    tech: ["React", "TypeScript", "Chart.js", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
    slug: "finance-dashboard",
  },
  {
    title: "E-commerce Platform",
    description:
      "Modern shopping experience with advanced filtering and payment processing.",
    longDescription:
      "This e-commerce platform provides a complete online shopping experience with a focus on user experience and performance. It features a robust product catalog, advanced filtering and search capabilities, secure checkout process, and comprehensive user accounts.\n\nBuilt with Next.js for optimal performance and SEO, the application uses server-side rendering for fast page loads and a seamless shopping experience. The platform integrates with Stripe for secure payment processing and MongoDB for flexible data storage.",
    features: [
      "Product catalog with categories and tagging",
      "Advanced filtering and search functionality",
      "User accounts and order history",
      "Secure checkout with Stripe integration",
      "Responsive design for all devices",
      "SEO optimization",
      "Inventory management",
    ],
    challenges:
      "The main challenge was building a performant application that could handle thousands of products while maintaining fast search and filtering capabilities. We implemented efficient database indexing and search algorithms to ensure quick response times. Another challenge was creating a seamless checkout flow that prioritized security while minimizing friction for users.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    ],
    tech: ["Next.js", "Stripe", "MongoDB", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    slug: "ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop functionality.",
    longDescription:
      "The Task Management App is a collaborative project management tool designed to help teams organize their work efficiently. With an intuitive kanban-style interface, teams can visualize their workflow and track progress on projects and tasks.\n\nThe application features drag-and-drop functionality for easy task management, real-time updates for team collaboration, file attachments, comments, and deadline tracking. Built with Vue.js and Firebase, it offers a responsive and real-time experience across devices.",
    features: [
      "Kanban-style board with customizable columns",
      "Drag-and-drop task management",
      "Real-time updates and collaboration",
      "Task assignments and deadlines",
      "File attachments and comments",
      "Task filtering and search",
      "Project templates and task checklists",
    ],
    challenges:
      "Implementing a smooth drag-and-drop experience that worked well across devices was particularly challenging. We utilized the DnD Kit library and implemented custom optimizations to ensure responsive performance on both desktop and mobile. Another challenge was managing real-time updates efficiently without overwhelming the database with requests.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
    ],
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "DnD Kit"],
    github: "https://github.com",
    slug: "task-management",
  },
];
