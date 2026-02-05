"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormState = {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  state: string;
  hasStore: "" | "sim" | "nao";
};

type ApiError = { ok: false; errors?: Record<string, string>; message?: string };
type ApiOk = { ok: true };

const UFS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

export default function PartnerForm() {
  const [data, setData] = useState<FormState>({
    name: "",
    whatsapp: "",
    email: "",
    city: "",
    state: "PE",
    hasStore: ""
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const canSubmit = useMemo(() => {
    return data.name.trim() && data.whatsapp.trim() && data.email.trim() && data.city.trim() && data.state.trim();
  }, [data]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErrors({});
    try {
      const r = await fetch("/api/partner", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      });

      const j = (await r.json()) as ApiOk | ApiError;

      if (!r.ok) {
        const err = j as ApiError;
        setErrors(err.errors || {});
        setOk(err.message || "Verifique os campos e tente novamente.");
        return;
      }

      setOk("Obrigado! Recebemos seu cadastro. Em breve entraremos em contato.");
      setData({ name: "", whatsapp: "", email: "", city: "", state: data.state, hasStore: "" });
    } catch {
      setOk("Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function set<K extends keyof FormState>(k: K, v: FormState[K]) {
    setData((s) => ({ ...s, [k]: v }));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold">Cadastro de parceiro</h3>
        <p className="mt-2 text-slate-600">
          Preencha seus dados. Você pode integrar este formulário com CRM, e-mail ou automações.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <Field label="Nome" error={errors.name}>
            <input
              className={inputClass(errors.name)}
              value={data.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Seu nome"
              autoComplete="name"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="WhatsApp" error={errors.whatsapp}>
              <input
                className={inputClass(errors.whatsapp)}
                value={data.whatsapp}
                onChange={(e) => set("whatsapp", e.target.value)}
                placeholder="(81) 99999-9999"
                inputMode="tel"
                autoComplete="tel"
              />
            </Field>

            <Field label="E-mail" error={errors.email}>
              <input
                className={inputClass(errors.email)}
                value={data.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="voce@empresa.com"
                inputMode="email"
                autoComplete="email"
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cidade" error={errors.city}>
              <input
                className={inputClass(errors.city)}
                value={data.city}
                onChange={(e) => set("city", e.target.value)}
                placeholder="Sua cidade"
                autoComplete="address-level2"
              />
            </Field>

            <Field label="UF" error={errors.state}>
              <select
                className={inputClass(errors.state)}
                value={data.state}
                onChange={(e) => set("state", e.target.value)}
                autoComplete="address-level1"
              >
                {UFS.map((uf) => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Possui loja física?" error={errors.hasStore}>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className={radioClass(data.hasStore === "sim")}
                onClick={() => set("hasStore", "sim")}
              >
                Sim
              </button>
              <button
                type="button"
                className={radioClass(data.hasStore === "nao")}
                onClick={() => set("hasStore", "nao")}
              >
                Não
              </button>
            </div>
          </Field>

          <button
            disabled={!canSubmit || loading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-pa-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-pa-800 disabled:opacity-60 disabled:hover:bg-pa-900"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            Enviar cadastro
          </button>

          {ok ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              {ok}
            </div>
          ) : null}
        </form>
      </div>
<aside className="rounded-3xl border border-pa-200 bg-gradient-to-b from-pa-50 to-white p-6 shadow-sm">
  <div className="rounded-3xl border border-pa-200 bg-white overflow-hidden shadow-sm">
    <img src="/images/head-quem-somos.avif" alt="Ponto Amigo" className="h-40 w-full object-cover" />
    <div className="p-5">
      <p className="text-sm font-semibold text-pa-900">O que você ganha como parceiro</p>
      <ul className="mt-3 grid gap-2 text-sm text-slate-700">
        <li className="flex gap-2"><span className="text-pa-800">•</span> Portfólio com diversas soluções (consignado, cartões, seguro e FGTS)</li>
        <li className="flex gap-2"><span className="text-pa-800">•</span> Intermediação com bancos/instituições representadas</li>
        <li className="flex gap-2"><span className="text-pa-800">•</span> Operação com foco em garantia e segurança</li>
        <li className="flex gap-2"><span className="text-pa-800">•</span> Apoio e direcionamento para acelerar sua operação</li>
      </ul>
    </div>
  </div>

  <div className="mt-5 rounded-2xl border border-pa-200 bg-white p-4">
    <p className="text-sm font-semibold text-pa-900">Dica</p>
    <p className="mt-1 text-sm text-slate-700">
      Preencha com atenção: esses dados ajudam nosso time a te direcionar para a melhor jornada de parceria.
    </p>
  </div>
</aside>

    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      {children}
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

function inputClass(err?: string) {
  return [
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-shadow",
    err ? "border-red-300 focus:ring-4 focus:ring-red-100" : "border-slate-200 focus:ring-4 focus:ring-pa-100"
  ].join(" ");
}

function radioClass(active: boolean) {
  return [
    "rounded-xl border px-4 py-3 text-sm font-semibold transition-colors",
    active ? "border-pa-900 bg-pa-900 text-white" : "border-slate-200 bg-white hover:bg-slate-50"
  ].join(" ");
}
