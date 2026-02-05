const faqs = [
  {
    q: "Quem pode ser parceiro?",
    a: "Parceiros (correspondentes bancários) que desejam atuar com os bancos e instituições representadas pela Ponto Amigo."
  },
  {
    q: "Quais produtos estão disponíveis?",
    a: "Novo, Portabilidade, Refinanciamento, Refinanciamento + Portabilidade, Compra de Dívida, Cartão Benefício, Cartão Consignado, Seguro Prestamista e FGTS."
  },
  {
    q: "Onde a Ponto Amigo atua?",
    a: "Atuação em todo o território nacional, com origem em Recife e matriz em São Paulo."
  },
  {
    q: "Depois do cadastro, o que acontece?",
    a: "Nosso time entra em contato para orientar a parceria, alinhar perfil e indicar os próximos passos."
  }
];

export default function FAQ() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-3xl border border-pa-200 bg-white p-6 shadow-sm open:shadow-soft">
          <summary className="cursor-pointer list-none text-base font-semibold text-pa-900">
            <div className="flex items-center justify-between gap-4">
              <span>{f.q}</span>
              <span className="text-pa-700 group-open:rotate-45 transition-transform">+</span>
            </div>
          </summary>
          <p className="mt-3 text-slate-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
