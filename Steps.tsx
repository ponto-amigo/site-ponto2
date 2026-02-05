const steps = [
  { n: "01", title: "Cadastro", desc: "Preencha seus dados como parceiro (correspondente bancário)." },
  { n: "02", title: "Contato", desc: "Nosso time entra em contato para alinhar perfil e oportunidades." },
  { n: "03", title: "Ativação", desc: "Orientações, acessos e direcionamento para iniciar a operação." },
  { n: "04", title: "Operação", desc: "Você começa a trabalhar com os bancos/instituições representadas." }
];

export default function Steps() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <div key={s.n} className="rounded-3xl border border-pa-200 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
          <p className="text-xs font-bold text-pa-800">{s.n}</p>
          <h3 className="mt-3 text-lg font-semibold text-pa-900">{s.title}</h3>
          <p className="mt-2 text-slate-700">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
