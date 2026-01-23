"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  variant?: string;
  title: string;
  goal: string;
  role?: string;
  build: string[];
  impact: string[];
  skills?: string[];
  image?: string;
  websiteUrl?: string;
  repoUrl?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export default function CaseStudy({
  title,
  goal,
  role,
  build,
  impact,
  skills,
  image,
  websiteUrl,
  repoUrl,
  cta,
}: Props) {
  return (
    <section className="section-card max-w-5xl mx-auto my-6 md:my-10 p-0 md:p-8">
      {/* IMAGE */}
      {image && (
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[65vw] md:h-[40vw] lg:h-[30vw] object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/35 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-4">
            {websiteUrl && (
              <Link
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-btn inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Visit Website
              </Link>
            )}

            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-btn inline-flex items-center gap-2"
              >
                <Github size={18} />
                View Repo
              </Link>
            )}
          </div>
        </div>
      )}

      {/* TEXT */}
      <div className="px-0 md:px-0 py-4 md:py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        <p className="italic text-gray-400 mt-2">{goal}</p>

        {role && (
          <p className="mt-4 text-gray-300">
            <strong className="text-gray-400">Role:</strong> {role}
          </p>
        )}

        <div className="my-6 h-px bg-white/10" />

        <h3 className="font-semibold text-white">What I Built</h3>
        <ul className="list-disc ml-6 text-gray-300 mt-4 space-y-2">
          {build.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <h3 className="font-semibold text-white mt-6">Impact</h3>
        <ul className="list-disc ml-6 text-gray-300 mt-4 space-y-2">
          {impact.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {skills && (
          <p className="mt-6 text-gray-400">
            <strong className="text-gray-400">Skills:</strong>{" "}
            <span className="text-gray-300">{skills.join(" • ")}</span>
          </p>
        )}

        {cta && (
          <div className="mt-8">
            <Link
              href={cta.href}
              className="neon-btn relative inline-flex items-center gap-2"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
