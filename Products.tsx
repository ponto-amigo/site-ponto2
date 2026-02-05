"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CreditCard, RefreshCw, ArrowLeftRight, Shield, Wallet, FileText, BadgeCheck } from "lucide-react";

type Item = { cat: "Consignado" | "Cartões" | "Proteção" | "FGTS" | "Convênios"; name: string; icon: React.ReactNode; desc: string };

const items: Item[] = [
  { cat: "Consignado", name: "Novo", icon: <FileText className="h-5 w-5" />, desc: "Soluções para novas operações com orientação ao parceiro." },
  { cat: "Consignado", name: "Portabilidade", icon: <ArrowLeftRight className="h-5 w-5" />, desc: "Movimente contratos com estratégia e foco em conversão." },
  { cat: "Consignado", name: "Refinanciamento", icon: <RefreshCw className="h-5 w-5" />, desc: "Mais possibilidades para o seu cliente com segurança." },
  { cat: "Consignado", name: "Refinanciamento + Portabilidade", icon: <RefreshCw className="h-5 w-5" />, desc: "Combinações para maximizar oportunidade e taxa de aprovação." },
  { cat: "Consignado", name: "Compra de Dívida", icon: <Wallet className="h-5 w-5" />, desc: "Organize passivos e apresente alternativas ao cliente." },
  { cat: "Cartões", name: "Cartão Benefício", icon: <CreditCard className="h-5 w-5" />, desc: "Opção para ampliar seu mix e atendimento." },
  { cat: "Cartões", name: "Cartão Consignado", icon: <CreditCard className="h-5 w-5" />, desc: "Produto relevante no ecossistema de consignado." },
  { cat: "Cartões", name: "Saque Complementar", icon: <CreditCard className="h-5 w-5" />, desc: "O saque complementar é uma modalidade de crédito consignado que permite a aposentados, pensionistas (INSS) e servidores (SIAPE) sacar até 70% do limite de crédito disponível no seu Cartão de Benefício Consignado ou Cartão de Crédito Consignado." },
  { cat: "Proteção", name: "Seguro Prestamista", icon: <Shield className="h-5 w-5" />, desc: "Proteção vinculada à operação, reforçando confiança e segurança." },
  { cat: "FGTS", name: "FGTS", icon: <Wallet className="h-5 w-5" />, desc: "Solução do portfólio para oportunidades com FGTS." },
  { cat: "Convênios", name: "Prefeituras", icon: <Wallet className="h-5 w-5" />, desc: "Trabalhamos com prefeituras de todo o Brasil." },
];

const cats: Item["cat"][] = ["Consignado", "Cartões", "Proteção", "FGTS", "Convênios"];

export default function Products() {
  const [cat, setCat] = useState<Item["cat"]>("Consignado");
  const filtered = useMemo(() => items.filter((i) => i.cat === cat), [cat]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
      <div className="rounded-3xl border border-pa-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-pa-900">Portfólio</p>
            <p className="mt-1 text-sm text-slate-600">Escolha uma categoria para ver os produtos.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold border transition-colors",
                  c === cat ? "bg-pa-900 text-white border-pa-900" : "bg-white text-pa-900 border-pa-200 hover:bg-pa-50"
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border border-pa-200 bg-gradient-to-b from-pa-50 to-white p-4 shadow-sm hover:shadow-soft transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-pa-800 border border-pa-200 group-hover:animate-floaty">
                  {p.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-pa-900">{p.name}</p>
                  <p className="mt-1 text-sm text-slate-700">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-pa-200 bg-pa-50 p-4">
          <div className="flex items-center gap-2 text-pa-900 font-semibold">
            <BadgeCheck className="h-5 w-5" /> Dica rápida
          </div>
          <p className="mt-2 text-sm text-slate-700">
            Uma parceria forte combina portfólio + processo. A Ponto Amigo orienta o parceiro para operar com mais clareza e ritmo.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-pa-200 bg-white shadow-soft overflow-hidden">
        <Image
          src="/images/onde-estamos.avif"
          alt="Ponto Amigo - atendimento e presença"
          width={800}
          height={600}
          className="h-[280px] w-full object-cover"
        />
        <div className="p-6">
          <p className="text-sm font-semibold text-pa-900">Presença nacional</p>
          <p className="mt-2 text-slate-700">
            Estamos presentes em todo o território nacional e seguimos expandindo em sintonia com o mercado.
          </p>
          <a href="#cadastro" className="mt-5 inline-flex items-center justify-center rounded-2xl bg-pa-900 px-5 py-3 text-sm font-semibold text-white hover:bg-pa-800">
            Quero fazer parte
          </a>
        </div>
      </div>
    </div>
  );
}
