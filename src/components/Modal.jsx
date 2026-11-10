import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children }) {
  const dialog = useRef(null);

  useEffect(() => {
    const element = dialog.current;

    if (open && !element.open) {
      element.showModal();
    } else if (!open && element.open) {
      element.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      aria-label="Project input error"
      className="m-auto w-[calc(100%-2rem)] max-w-lg border-0 bg-transparent p-0 text-stone-100 outline-none backdrop:bg-stone-950/80 backdrop:backdrop-blur-sm"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_32px_100px_rgba(0,0,0,0.55)] motion-safe:animate-[modal-enter_360ms_cubic-bezier(0.22,1,0.36,1)]">
        <div className="rounded-[calc(2rem-0.375rem)] bg-stone-900 px-6 py-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] sm:px-8 sm:py-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/20">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M12 8v4m0 4h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3l-7.5-13.1a2 2 0 0 0-3.4 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-0.5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
                Project details
              </p>
              <div className="[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-stone-50 sm:[&_h2]:text-2xl [&_p]:mt-2 [&_p]:text-sm [&_p]:leading-6 [&_p]:text-stone-400">
                {children}
              </div>
            </div>
          </div>

          <div className="flex justify-end border-t border-white/[0.08] pt-5">
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-stone-950 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-amber-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              Got it
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-950/10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="m5 5 10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
