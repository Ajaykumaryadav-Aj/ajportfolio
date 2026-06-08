import {
  Braces,
  CircleDot,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Palette,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'
import viralstanLogo from '../assets/viralstan-logo.png'

export const profile = {
  firstName: 'AJAY',
  lastName: 'KUMAR',
  role: 'Frontend Developer',
  badge: 'Available for New Project',
  intro:
    'Building responsive React and Flutter experiences with clean UI systems, fast-loading pages, and practical product thinking.',
  email: 'ajaykumaraky075@gmail.com',
  mailtoHref:
    'mailto:ajaykumaraky075@gmail.com?subject=Project%20Inquiry&body=Hi%20Ajay%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.',
  emailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=ajaykumaraky075@gmail.com&su=Project%20Inquiry&body=Hi%20Ajay%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.',
  resumeHref: '/resume.pdf',
  location: 'India',
  experience: '1 year React/front-end experience + 9 months Flutter development experience',
}

export const navItems = [
  { label: 'Work', href: '#work', count: '02' },
  { label: 'Service', href: '#service', count: '04' },
  { label: 'Skills', href: '#skills', count: '06' },
  { label: 'Experience', href: '#experience', count: '1y+' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ajaykumaryadav-Aj', icon: CircleDot },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-kumar-8910aa261', icon: Users },
  { label: 'Email', href: profile.mailtoHref, icon: Mail },
]

export const projects = [
  {
    title: 'Viralstan - Company Website',
    category: 'Company Website',
    kicker: 'SEO, SMM, Web Dev',
    description:
      'Worked with Viralstan and built their responsive company website for SEO, social media marketing, paid ads, branding, and web development services.',
    role: 'Frontend Developer at Viralstan - website development, responsive UI, service-page structure',
    timeline: 'Company Project',
    impact: [
      'Built Viralstan website pages for agency discovery and service presentation.',
      'Structured content around SEO, SMM, paid ads, branding, and web development services.',
      'Created reusable React and Tailwind UI sections for cleaner future updates.',
    ],
    tags: ['SEO', 'SMM', 'Digital Marketing', 'React.js', 'Tailwind CSS'],
    href: 'https://viralstan.com/',
    logo: viralstanLogo,
    accent: 'from-fuchsia-500 to-cyan-300',
    icon: Globe2,
  },
  {
    title: 'Chat App - React Messaging Interface',
    category: 'Live Project',
    kicker: 'Realtime Chat UI',
    description:
      'Built a clean messaging interface focused on readable chat states, responsive layouts, reusable React components, and deployment-ready styling.',
    role: 'React UI development, component layout, responsive interaction states',
    timeline: 'Live Demo',
    impact: [
      'Designed a focused messaging flow that works across desktop and mobile.',
      'Separated chat UI into reusable interface pieces.',
      'Deployed the project for quick client and recruiter review.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    href: 'https://chat-app-opal-sigma.vercel.app/',
    accent: 'from-emerald-400 to-violet-500',
    icon: Code2,
  },
]

export const services = [
  {
    title: 'React Web Apps',
    description:
      'Modern frontend development with React.js, JavaScript, reusable components, clean code, and scalable application structure.',
    icon: Code2,
    featured: true,
  },
  {
    title: 'Flutter Mobile Apps',
    description:
      'Cross-platform mobile application development with Flutter and Dart, including responsive screens and smooth app flows.',
    icon: Smartphone,
  },
  {
    title: 'Responsive UI',
    description:
      'User-friendly web and mobile interfaces built with HTML, CSS, Tailwind CSS, and a strong focus on responsive design.',
    icon: Palette,
  },
  {
    title: 'API Integration',
    description:
      'REST API integration, Firebase and Firestore data handling, efficient state management, and performance-focused frontend logic.',
    icon: Braces,
  },
]

export const skills = [
  {
    name: 'JavaScript',
    level: 'Advanced',
    description: 'Modern ES modules, async flows, DOM APIs, and clean application logic.',
    icon: Braces,
  },
  {
    name: 'React.js',
    level: 'Advanced',
    description: 'Reusable components, hooks, state patterns, routing, and production UI architecture.',
    icon: Code2,
  },
  {
    name: 'Flutter',
    level: 'Intermediate',
    description: 'Cross-platform UI screens, responsive layouts, widgets, and app interface flows.',
    icon: Smartphone,
  },
  {
    name: 'Frontend Development',
    level: 'Advanced',
    description: 'Responsive interfaces, accessibility, performance, animations, and pixel-perfect builds.',
    icon: Layers3,
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    description: 'Utility-first design systems, fluid layouts, and polished responsive styling.',
    icon: Palette,
  },
  {
    name: 'UI Motion',
    level: 'Intermediate',
    description: 'Framer Motion reveals, hover states, micro-interactions, and smooth page rhythm.',
    icon: Sparkles,
  },
]

export const experience = [
  {
    company: 'Viralstan',
    role: 'Worked as a frontend developer and built Viralstan company website with React.js, Tailwind CSS, and responsive service pages.',
    period: 'Company Work',
  },
  {
    company: 'Production UI Delivery',
    role: 'Built reusable components, clean layouts, polished hover states, and scalable front-end structure.',
    period: 'Web Apps',
  },
  {
    company: 'Flutter Mobile Development',
    role: 'Created cross-platform mobile screens, responsive widgets, and practical app flows with Flutter and Dart.',
    period: '9 Months',
  },
  {
    company: 'API & Data Integration',
    role: 'Integrated REST APIs, Firebase, Firestore, and client-side data handling for application workflows.',
    period: 'Backend Data',
  },
  {
    company: 'Performance & Architecture',
    role: 'Focused on clean code, performance optimization, accessibility basics, and maintainable UI architecture.',
    period: 'Core Focus',
  },
]
