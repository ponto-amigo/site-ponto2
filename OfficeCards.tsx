import { MapPin } from "lucide-react";

type Office = { city: string; label: string; address: string };

const offices: Office[] = [
  {
    city: "São Paulo - Matriz",
    label: "Thera Offices Faria Lima",
    address: "Rua Pais Leme, 215 • Conj. 105 • Faria Lima • São Paulo - SP"
  },
  {
    city: "Recife - Origem",
    label: "Pernambuco",
    address: "Operação fundada em Recife e expandida nacionalmente."
  }
];

export default function OfficeCards() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {offices.map((o) => (
        <div key={o.city} className="rounded-3xl border border-pa-200 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-pa-900">{o.city}</p>
              <p className="mt-1 text-sm text-slate-600">{o.label}</p>
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-pa-50 border border-pa-200 text-pa-800">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-4 text-slate-700">{o.address}</p>
        </div>
      ))}
    </div>
  );
}
