import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js app for managing products.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/byui-ed/wdd430-portfolio'
  },
  {
    title: 'Weather Application',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/s-shemmee/React-Weather-App'
  }
];

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 px-6 py-12 text-center">
      <Image
        src="/tailwind-practice.png"
        alt="Colorful abstract shapes representing web design"
        width={800}
        height={450}
        priority
        className="h-auto w-full max-w-2xl rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      />

      <section className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Tailwind CSS Practice
        </h1>
        <p className="text-base leading-7 text-slate-600 sm:text-lg">
          Tailwind CSS lets you style pages using utility classes directly in
          your markup, making it quick to build responsive, polished designs.
        </p>
      </section>
    </main>
  );
}

