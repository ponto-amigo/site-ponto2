type Tone = "white" | "soft";

export default function Section({
  id,
  title,
  subtitle,
  children,
  tone = "white"
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  // Evita branco estourado (conforto visual)
  const bg = tone === "soft" ? "bg-pa-100/25" : "bg-[#F7F9FD]";
  return (
    <section id={id} className={`${bg} py-14 sm:py-16`}>
      <div className="container-safe">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-pa-900">{title}</h2>
          {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
