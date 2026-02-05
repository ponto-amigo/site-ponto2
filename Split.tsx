import Image from "next/image";

export default function Split({
  eyebrow,
  title,
  subtitle,
  bullets,
  imageSrc,
  imageAlt,
  reverse
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const imgClass =
    imageSrc.includes("/photos/kaline.png")
      ? "object-cover object-[55%_20%]"
      : imageSrc.includes("/photos/kaline-valerio.png")
        ? "object-cover object-center"
        : "object-cover object-center";

  return (
    <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="reveal">
        {eyebrow ? (
          <div className="inline-flex items-center rounded-full border border-pa-200 bg-pa-50 px-3 py-1 text-xs font-semibold text-pa-900">
            {eyebrow}
          </div>
        ) : null}

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-pa-900">{title}</h3>
        {subtitle ? <p className="mt-3 text-slate-700 leading-relaxed">{subtitle}</p> : null}

        {bullets?.length ? (
          <ul className="mt-5 grid gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 rounded-2xl border border-pa-200 bg-white p-4 shadow-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-pa-500" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="reveal rounded-3xl border border-pa-200 bg-white shadow-soft overflow-hidden">
        <div className="relative h-[280px] w-full sm:h-[360px]">
          <div data-form className="absolute inset-0 forming">
            <Image src={imageSrc} alt={imageAlt} fill className={imgClass} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
