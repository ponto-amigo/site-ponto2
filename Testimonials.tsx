import { Star } from "lucide-react";

const items = [
  {
    name: "Parceiro (CORBAN)",
    role: "Operação no Nordeste",
    quote:
      "O suporte e o direcionamento facilitaram a operação com os produtos. O fluxo ficou mais claro e ágil."
  },
  {
    name: "Parceiro (CORBAN)",
    role: "Operação no Sudeste",
    quote:
      "O portfólio ajudou a ampliar o mix. A comunicação é rápida e o processo de ativação foi objetivo."
  },
  {
    name: "Parceiro (CORBAN)",
    role: "Operação 100% digital",
    quote:
      "Ter uma estrutura por trás traz segurança. Consegui organizar melhor o atendimento e as etapas do cliente."
  }
];

export default function Testimonials() {
  return (
    <div
      className={
        "flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory " +
        "lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible lg:grid lg:gap-4 lg:grid-cols-3"
      }
    >
      {items.map((t, idx) => (
        <div
          key={idx}
          className={
            "snap-start min-w-[86%] sm:min-w-[70%] md:min-w-[52%] " +
            "lg:min-w-0 rounded-3xl border border-pa-200 bg-white p-6 shadow-sm " +
            "hover:shadow-soft transition-shadow"
          }
        >
          <div className="flex items-center gap-1 text-pa-700">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
          <p className="mt-4 text-slate-700 leading-relaxed">“{t.quote}”</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-pa-50 border border-pa-200" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-pa-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
