import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-pa-200">
      <div className="absolute inset-0 bg-gradient-to-b from-pa-50/70 via-white/90 to-white" />
      <div className="pointer-events-none absolute -top-24 right-[-180px] h-[420px] w-[420px] rounded-full bg-pa-100 blur-3xl opacity-70 blob" />
      <div className="pointer-events-none absolute -bottom-32 left-[-220px] h-[520px] w-[520px] rounded-full bg-pa-200 blur-3xl opacity-50 blob" />
      <div className="container-safe relative py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-pa-900">{title}</h1>
            <p className="mt-3 text-slate-700 text-lg leading-relaxed">{subtitle}</p>
          </div>

          <div className="reveal relative overflow-hidden rounded-3xl border border-pa-200 bg-white shadow-soft">
            <div className="relative h-[220px] w-full sm:h-[260px]">
              <div data-form className="absolute inset-0 forming">
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover object-center" priority />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
