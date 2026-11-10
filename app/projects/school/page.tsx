import { getProjects } from '@/lib/projects-db';

export default function SchoolPage() {
  const projects = getProjects('school');

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">School Projects</h3>
      <div className="grid gap-4">
        {projects.map((p) => (
          <div key={p.id} className="p-4 border rounded-lg dark:border-gray-800">
            <h4 className="font-bold">{p.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}