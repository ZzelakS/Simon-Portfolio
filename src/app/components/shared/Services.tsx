export default function Services() {
  const services = [
    "Digital Product Development",
    "AI Workflows & Automation",
    "Growth Strategy",
    "Ecommerce Funnels",
    "VR Experience Builds",
  ];

  return (
    <section className="max-w-5xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">Services</h2>

      <ul className="list-disc ml-6 text-gray-300">
        {services.map((s,i)=><li key={i}>{s}</li>)}
      </ul>
    </section>
  );
}
