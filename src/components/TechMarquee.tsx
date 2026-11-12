export default function TechMarquee() {
  const items = [
    'C# / ASP.NET Core',
    'Native Android (Java)',
    'RESTful Web APIs',
    'SQL Server & EF Core',
    'Firebase Cloud',
    'Automated Testing (xUnit)',
    'Docker Containerization',
    'Clean Architecture',
    'Trilingual Localization',
    'Git & GitHub CI',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.08] bg-[#090b10] py-3.5 select-none relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080b] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeating sequence twice for smooth infinite loop */}
        {[...items, ...items].map((tech, index) => (
          <div key={index} className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <span className="text-white/70 hover:text-amber-400 transition-colors font-medium">
              {tech}
            </span>
            <span className="text-amber-400/50 text-[10px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
