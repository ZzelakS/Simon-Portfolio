"use client";

export default function CVPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-20">
      <h1 className="text-3xl font-bold text-white mb-6">Resume</h1>

      <div className="w-full h-[80vh] rounded-lg border border-white/10 overflow-y-auto overflow-x-hidden">
        <iframe
          src="/ALACHI Simon Okpe CV.pdf#zoom=page-width"
          className="w-full h-full border-0"
        />
      </div>

      <div className="mt-6">
        <a
          href="/ALACHI Simon Okpe CV.pdf"
          download
          className="neon-btn relative inline-flex"
        >
          Download CV
        </a>
      </div>
    </main>
  );
}
