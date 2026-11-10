export default function AddProjectButton({ children }) {
  return (
    <button
      type="button"
      className="px-4 py-2 text-xs md:text-base font-medium rounded-md border border-stone-600 bg-stone-800 text-stone-100 shadow-sm transition-colors duration-200 hover:bg-stone-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-stone-500"
    >
      {children}
    </button>
  );
}
