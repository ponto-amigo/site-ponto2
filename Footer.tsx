import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-pa-200 bg-pa-900 text-white">
      <div className="container-safe py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <Image
              src="/pontoamigo-logo.avif"
              alt="Ponto Amigo"
              width={145}
              height={60}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-white/80">
              Ponto Amigo Promotora de Vendas S.A • CNPJ: 19.602.774/0001-10
            </p>
          </div>

          <div className="text-sm text-white/85">
            <p className="font-semibold text-white">Navegação</p>
            <ul className="mt-3 grid gap-2">
              <li><a className="hover:underline" href="/quem-somos">Quem Somos</a></li>
              <li><a className="hover:underline" href="/produtos">Produtos</a></li>
              <li><a className="hover:underline" href="/onde-estamos">Onde Estamos</a></li>
              <li><a className="hover:underline" href="/links-uteis">Links Úteis</a></li>
              <li><a className="hover:underline" href="/#cadastro">Seja Parceiro</a></li>
            </ul>
          </div>

          <div className="text-sm text-white/85 md:text-right">
            <p className="font-semibold text-white">Ouvidoria</p>
            <p className="mt-3">privacidade@pontoamigo.com.br</p>
            <p className="mt-3 text-white/70">© {new Date().getFullYear()} Ponto Amigo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
