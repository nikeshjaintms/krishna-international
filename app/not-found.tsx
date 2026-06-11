import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-black text-gray-900 font-display mb-4">404</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">The page you are looking for could not be found.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#C20000] transition-colors">
        Return Home
      </Link>
    </div>
  );
}
