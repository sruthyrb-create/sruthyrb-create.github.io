export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  highlights,
  github,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400 transition-all duration-300">
      
      <div>
        <h3 className="text-xl font-semibold text-cyan-300">{title}</h3>
        {subtitle && (
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
        )}

        <p className="text-slate-300 mt-4 leading-relaxed">
          {description}
        </p>

        <ul className="mt-4 space-y-2 text-slate-400 text-sm">
          {highlights.map((point, i) => (
            <li key={i}>• {point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-slate-800 text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-sm text-cyan-400 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
