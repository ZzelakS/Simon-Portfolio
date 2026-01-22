interface Props {
  variant?: string;
  title: string;
  goal: string;
  role?: string;
  build: string[];
  impact: string[];
  skills?: string[];
}

export default function CaseStudy({
  variant,
  title,
  goal,
  role,
  build,
  impact,
  skills,
}: Props) {
  return (
    <section className="section-card max-w-5xl mx-auto p-8 my-10">

      {/* Title */}
      <h2 className="text-3xl font-bold text-white">{title}</h2>

      {/* Goal */}
      <p className="italic text-gray-400 mt-2">{goal}</p>

      {/* Role */}
      {role && (
        <p className="mt-4 text-gray-300">
          <strong className="text-gray-400">Role:</strong> {role}
        </p>
      )}

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* What I Built */}
      <h3 className="font-semibold text-white">What I Built</h3>
      <ul className="list-disc ml-6 text-gray-300 mt-4 space-y-2">
        {build.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Impact */}
      <h3 className="font-semibold text-white mt-6">Impact</h3>
      <ul className="list-disc ml-6 text-gray-300 mt-4 space-y-2">
        {impact.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Skills */}
      {skills && (
        <p className="mt-6 text-gray-400">
          <strong className="text-gray-400">Skills:</strong>{" "}
          <span className="text-gray-300">{skills.join(" • ")}</span>
        </p>
      )}
    </section>
  );
}
