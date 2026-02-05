const stats = [
  { k: "Atuação", v: "Brasil" },
  { k: "Foco", v: "Garantia e segurança" },
  { k: "Perfil", v: "Parceiros (CORBAN)" },
  { k: "Portfólio", v: "Consignado, cartões, seguros, FGTS" }
];

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.k} className="rounded-3xl border border-pa-200 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
          <p className="text-xs font-bold text-slate-500">{s.k}</p>
          <p className="mt-2 text-lg font-semibold text-pa-900">{s.v}</p>
        </div>
      ))}
    </div>
  );
}
