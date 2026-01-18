// src/pages/Services.jsx
const services = [
  { title: "System Integration", desc: "Broad range of technologies empowering clients to run business effectively." },
  { title: "Design & Engineering", desc: "Tailored requirements from initial concept to detailed technical drawings." },
  { title: "Maintenance Portal", desc: "Dedicated portal for maintenance contract holders to ensure 24/7 uptime." },
  { title: "Project Management", desc: "Highly qualified managers devoted to meeting your specific project goals." }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-900">{s.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}