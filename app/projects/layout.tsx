import Link from 'next/link';

export default function ProjectsLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Projects Dashboard</h2>
      
      {/* Section-specific navigation */}
      <nav className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-800 pb-3 text-sm font-medium">
        <Link href="/projects" className="hover:text-blue-600 transition-colors">
          Overview
        </Link>
        <Link href="/projects/opensource" className="hover:text-blue-600 transition-colors">
          Open Source
        </Link>
        <Link href="/projects/school" className="hover:text-blue-600 transition-colors">
          School
        </Link>
      </nav>

      {/* Render the active child page content */}
      <section>{children}</section>
    </div>
  );
}