export default function Stats() {
  const stats = [
    "📈 1,000+ users served across platforms",
    "🎮 Built and scaled a VR experience center",
    "🛒 Full-stack ecommerce + booking systems",
    "🤖 AI chat & workflow automation",
    "🎥 Content funnels & brand storytelling"
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-lg">
        {stats.map((s, i) => (
          <div key={i} className="text-center text-gray-200">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
