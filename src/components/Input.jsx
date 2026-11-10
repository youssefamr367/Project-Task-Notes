export default function Input({ Label, textarea }) {
  const classes =
    "w-full rounded-md border border-stone-700 bg-stone-950/70 px-3 py-2 text-sm text-stone-100 placeholder:text-stone-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30";

  return (
    <p className="my-4 flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
        {Label}
      </label>
      {textarea ? (
        <textarea className={`${classes} min-h-[120px] resize-none`} />
      ) : (
        <input className={classes} />
      )}
    </p>
  );
}
