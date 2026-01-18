// src/components/ServiceCard.jsx
export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {/* You can insert SVG icons here */}
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}