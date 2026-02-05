"use client";

import Image from "next/image";

type Bank = { name: string; src: string };

// const banks: Bank[] = [
//   { name: "Santander", src: "/logos/Santander.svg" },
//   { name: "Bradesco", src: "/logos/Bradesco.svg" },
//   { name: "Safra", src: "/logos/Safra.svg" },
//   { name: "Banrisul", src: "/logos/Banrisul.svg" },
//   { name: "BMG", src: "/logos/BMG.svg" },
//   { name: "PagBank", src: "/logos/PagBank.svg" },
//   { name: "Daycoval", src: "/logos/Daycoval.svg" },
//   { name: "BRB", src: "/logos/BRB.svg" }
// ];


const banks: Bank[] = [
  { name: "360", src: "/logos/360.svg" },
  { name: "AKI Capital", src: "/logos/aki.png" },
  { name: "Amigoz", src: "/logos/amigoz.png" },
  { name: "Banco Santander", src: "/logos/Santander.svg" },
  { name: "Banrisul", src: "/logos/Banrisul.svg" },
  { name: "C6 Bank", src: "/logos/C6.svg" },
  { name: "Daycoval", src: "/logos/Daycoval.svg" },
  { name: "Digio", src: "/logos/Digio.svg" },
  { name: "Finanto", src: "/logos/Finanto.svg" },
  { name: "Futuro", src: "/logos/Futuro.svg" },
  { name: "Neo", src: "/logos/Neo.svg" },
  { name: "PicPay", src: "/logos/PicPay.svg" },
  { name: "Redconsig", src: "/logos/Redconsig.png" },
  { name: "Total Cash", src: "/logos/totalcash.png" }
];

// function BankCard({ bank }: { bank: Bank }) {
//   return (
//     <div
//       className="bank-card group relative flex h-24 w-40 items-center justify-center rounded-2xl border border-pa-200/60 bg-gray/70 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.03]"
//       title={bank.name}
//     >
//       <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-green/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
//       <Image src={bank.src} alt={bank.name} width={250} height={180} className="h-150 w-auto opacity-120" />
//     </div>
//   );
// }
function BankCard({ bank }: { bank: Bank }) {
  return (
    <div
      className="
        bank-card group relative flex h-24 w-40 items-center justify-center
        rounded-2xl
        border-2 border-blue-200
        bg-gradient-to-b from-blue-50 to-white
        shadow-sm backdrop-blur
        transition-transform duration-300
        hover:-translate-y-1.5 hover:scale-[1.03]
      "
      title={bank.name}
    >
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-b from-blue-200/30 to-transparent
          opacity-0 transition-opacity
          group-hover:opacity-100
        "
      />

      <Image
        src={bank.src}
        alt={bank.name}
        width={240}
        height={120}
        className="
          max-h-16 w-auto object-contain
          opacity-95
          transition-transform
          group-hover:scale-110
        "
      />
    </div>
  );
}



function MarqueeRow({ reverse }: { reverse?: boolean }) {
  const items = [...banks, ...banks];
  return (
    <div className="marquee-wrap">
      <div className={reverse ? "marquee marquee-reverse" : "marquee"}>
        {items.map((bank, idx) => (
          <BankCard key={`${bank.name}-${idx}`} bank={bank} />
        ))}
      </div>
    </div>
  );
}

export default function LogosGrid() {
  return (
    <div className="rounded-3xl border border-pa-200/60 bg-white/55 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-pa-900">Instituições que compõem o ecossistema</p>
        <span className="hidden sm:inline-flex rounded-full border border-pa-200/60 bg-pa-50 px-3 py-1 text-xs font-semibold text-pa-900">
          Passe o mouse para interagir
        </span>
      </div>

      <div className="mt-6 grid gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      <p className="mt-5 text-xs text-slate-600">
        * Os cards são placeholders (SVG). Se você tiver os logos oficiais, basta substituir os arquivos em{" "}
        <code className="rounded bg-white/70 px-1 py-0.5 border border-pa-200/60">/public/logos</code>.
      </p>
    </div>
  );
}
