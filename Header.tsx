"use client";

import Image from "next/image";
import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/onde-estamos", label: "Onde estamos" },
  { href: "/links-uteis", label: "Links úteis" },
  { href: "/#cadastro", label: "Seja parceiro" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // fecha o menu ao mudar de rota/hash
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="container-safe flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/pontoamigo-logo.avif"
            alt="Ponto Amigo"
            width={145}
            height={60}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-slate-900">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-pa-200 bg-white/70 backdrop-blur text-pa-900 shadow-sm hover:bg-pa-50"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a
            href="https://pontoamigo.workbankvirtual.com.br/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-pa-200 bg-white px-4 py-2 text-sm font-semibold text-pa-900 shadow-sm hover:bg-pa-50"
            title="Área do Parceiro"
          >
            Área do Parceiro <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href="/#cadastro"
            className="inline-flex items-center gap-2 rounded-xl bg-pa-900 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
          >
            Seja parceiro
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/90 backdrop-blur">
          <div className="container-safe py-3">
            <nav className="flex flex-col gap-1 text-sm text-slate-700">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="rounded-xl px-3 py-2 hover:bg-pa-50 hover:text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </a>
              ))}

              <a
                href="https://pontoamigo.workbankvirtual.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-between rounded-xl border border-pa-200 bg-white px-3 py-2 font-semibold text-pa-900 shadow-sm hover:bg-pa-50"
                onClick={() => setOpen(false)}
              >
                Área do Parceiro <ExternalLink className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
