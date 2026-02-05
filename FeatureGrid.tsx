import { BadgeCheck, Handshake, ShieldCheck, Users, Building2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Handshake className="h-5 w-5" />,
    title: "Intermediação com bancos",
    desc: "A Ponto Amigo faz a ponte entre o parceiro (correspondente) e os bancos/instituições que representa."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Garantia e segurança",
    desc: "Operação alinhada ao objetivo de oferecer soluções financeiras com garantia e segurança."
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Portfólio completo",
    desc: "Novo, Portabilidade, Refinanciamento, Compra de Dívida, Cartões, Seguro Prestamista e FGTS."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Apoio ao parceiro",
    desc: "Onboarding e direcionamento para você operar com mais clareza e velocidade."
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Presença nacional",
    desc: "Atuação em todo o território nacional, com matriz em São Paulo e origem em Recife."
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Mais de uma década",
    desc: "Experiência com crédito consignado, com ênfase no segmento público."
  }
];

export default function FeatureGrid() {
  return (
    <>
      {/* Mobile: arrastar pro lado */}
      <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-3 snap-x snap-mandatory">
        <div className="flex gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="snap-start min-w-[84%] rounded-3xl border border-pa-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pa-50 text-pa-800 border border-pa-200">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-pa-900">{f.title}</h3>
              <p className="mt-2 text-slate-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/tablet: grid normal */}
      <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl border border-pa-200 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pa-50 text-pa-800 border border-pa-200">
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-pa-900">{f.title}</h3>
            <p className="mt-2 text-slate-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
