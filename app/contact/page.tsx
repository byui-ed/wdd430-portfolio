export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Have a question, a project proposal, or want to collaborate? Reach out using the form below or connect with me online.
      </p>
      {/* Simple placeholder contact form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" placeholder="john@example.com" className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea rows={4} placeholder="Your message here..." className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"></textarea>
        </div>
        <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </div>
    </div>
  );
}