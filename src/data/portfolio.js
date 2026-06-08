import {
  Braces,
  Code2,
  CircleDot,
  Globe2,
  Layers3,
  Palette,
  Smartphone,
  Send,
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
    'Building scalable web and mobile applications with a focus on performance, responsive design, and exceptional user experiences.',
  email: 'ajaykumaraky075@gmail.com',
  emailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=ajaykumaraky075@gmail.com&su=Project%20Inquiry&body=Hi%20Ajay%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.',
  experience: '1 year Frontend Developer experience + 9 months Flutter Developer experience',
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
  { label: 'Instagram', href: 'https://instagram.com/', icon: Send },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-kumar-8910aa261', icon: Users },
  { label: 'Dribbble', href: 'https://dribbble.com/ajaykumaraky075', icon: Globe2 },
]

export const projects = [
  {
    title: 'Viralstan - SEO, SMM & Web Development Website',
    category: 'Marketing Website',
    kicker: 'SEO, SMM, Web Dev',
    description:
      'Built a responsive company website for Viralstan, a digital marketing agency focused on SEO, social media marketing, paid ads, branding, and web development.',
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
      'Built a clean messaging interface with responsive layouts, reusable React components, and Tailwind CSS styling.',
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
    company: 'Frontend Developer',
    role: 'Developing modern web applications with React.js, JavaScript, HTML, CSS, and Tailwind CSS.',
    period: '1 Year',
  },
  {
    company: 'React.js Development',
    role: 'Building reusable components, responsive interfaces, clean application logic, and scalable frontend structure.',
    period: 'Web Apps',
  },
  {
    company: 'Flutter Developer',
    role: 'Creating cross-platform mobile application screens and app flows with Flutter and Dart.',
    period: '9 Months',
  },
  {
    company: 'API & Data Integration',
    role: 'Integrating REST APIs, Firebase, Firestore, and managing application data efficiently.',
    period: 'Backend Data',
  },
  {
    company: 'Performance & Architecture',
    role: 'Focused on clean code, performance optimization, responsive design, and scalable application architecture.',
    period: 'Core Focus',
  },
]
