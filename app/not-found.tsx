import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Sorry, we could not find the page you are looking for. The page might
          have been removed or the link might be broken.
        </p>
        <Link
          href="/"
          className="inline-block items-center gap-2 dark:text-white border p-2 rounded-lg">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
