export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Project</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 mb-4">
            This is a Next.js project built with modern web technologies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next.js 16 (App Router)</li>
            <li>React 19</li>
            <li>TypeScript</li>
            <li>Tailwind CSS v4</li>
          </ul>
          <div className="mt-8">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
