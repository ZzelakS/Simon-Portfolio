export default function Skills() {
  return (
    <section className="section-card max-w-6xl mx-auto py-16">

      <h2 className="text-3xl font-bold mb-6 text-white">
        Hybrid Skillset
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-semibold text-white">Product & Engineering</h3>
          <p className="text-gray-300">
            React JS • Next JS • Firebase • Node • APIs • VR/360 • Automation Logic
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Growth & Marketing</h3>
          <p className="text-gray-300">
            Paid Social • Funnels • Analytics • Retention • Conversion Design
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Strategy & Execution</h3>
          <p className="text-gray-300">
            User-Centered Design • Experimentation • Problem Solving
          </p>
        </div>

      </div>
    </section>
  );
}
