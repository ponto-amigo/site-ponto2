// "use client";

// import Image from "next/image";
// import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
// import { useRef } from "react";

// /**
//  * HERO
//  * - Mantém o texto/CTA e badges intactos
//  * - Troca o visual para "texto + imagem" no estilo da referência: sem divisão dura,
//  *   com fade/opacity para combinar com o azul.
//  * - No mobile, a imagem fica "atrás" do texto (subindo um pouco) para valorizar sem competir.
//  */
// export default function Hero() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden">
//       {/* background */}
//       <div className="absolute inset-0 bg-hero" />
//       <div className="pointer-events-none absolute -top-24 right-[-240px] h-[560px] w-[560px] rounded-full bg-pa-200 blur-3xl opacity-60 blob" />
//       <div className="pointer-events-none absolute -bottom-40 left-[-320px] h-[720px] w-[720px] rounded-full bg-pa-100 blur-3xl opacity-70 blob" />

//       <div className="container-safe relative py-16 sm:py-20">
//         {/* Visual por trás no MOBILE */}
//         <div className="pointer-events-none absolute inset-x-0 top-[-26px] -z-0 mx-auto block w-[92%] max-w-[520px] sm:top-[-34px] lg:hidden">
//           <div className="relative aspect-[4/3] w-full">
//             <div className="absolute inset-0 hero-image-mask">
//               <Image
//                 src="/photos/kaline-valerio.png"
//                 alt="Kaline e Valério — parceria Ponto Amigo"
//                 fill
//                 className="object-cover object-center opacity-[0.22]"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">

//           {/* Copy */}
//           <div className="animate-reveal">
//             <div className="inline-flex items-center gap-2 rounded-full border border-pa-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-pa-900 shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-pa-500" />
//               Parceria humana • Suporte próximo
//             </div>

//             <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
//               <span className="block">
//                 Cresça com a <span className="text-gradient">Ponto Amigo</span>.
//               </span>
//             </h1>

//             <p className="mt-4 text-slate-700 text-lg leading-relaxed">
//               Somos uma <span className="font-semibold text-slate-900">promotora de crédito</span> que conecta parceiros (CORBAN) a bancos e
//               instituições financeiras — com suporte próximo, processo claro e foco em segurança.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <a
//                 href="#cadastro"
//                 className="group shine inline-flex items-center gap-2 rounded-xl bg-pa-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
//               >
//                 Quero ser parceiro
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//               </a>
//               <a
//                 href="#quem-somos"
//                 className="inline-flex items-center gap-2 rounded-xl border border-pa-200/70 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-pa-900 hover:bg-pa-50"
//               >
//                 Entender como funciona
//               </a>
//             </div>

//             <div className="mt-10 grid gap-3 sm:grid-cols-3">
//               <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Garantia & segurança" />
//               <Badge icon={<Handshake className="h-4 w-4" />} text="Parceria de verdade" />
//               <Badge icon={<BadgeCheck className="h-4 w-4" />} text="Estrutura para escalar" />
//             </div>
//           </div>

//           {/* Visual no DESKTOP (estilo referência, sem divisão dura) */}
//           <div className="relative hidden lg:block lg:pl-10 reveal">
//             <div className="relative ml-auto w-full max-w-[650px] lg:translate-x-[240px]">
//               {/* Foto no desktop: aparece normal, com fade só no lado do texto (sem “bola”/borda arredondada) */}
//               <div className="relative aspect-[4/5] w-full">
//                 <div className="absolute inset-0 hero-image-mask">
//                   <Image
//                     src="/photos/kaline-valerio.png"
//                     alt="Kaline e Valério — parceria Ponto Amigo"
//                     fill
//                     className="object-cover object-[70%_center]"

//                     priority
//                   />

//                   {/* leve suavização/integração com o fundo */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(248,251,255,0.95)]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div className="flex items-center gap-2 rounded-2xl border border-pa-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-soft">
//       <span className="grid h-8 w-8 place-items-center rounded-xl bg-pa-50 text-pa-900">{icon}</span>
//       <span className="text-sm font-semibold text-pa-900">{text}</span>
//     </div>
//   );
// }











// "use client";

// import Image from "next/image";
// import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
// import { useRef } from "react";

// /**
//  * HERO
//  * - Mantém o texto/CTA e badges intactos
//  * - Desktop: imagem maior "invade" para o lado esquerdo (reduz o branco)
//  * - Fade APENAS nos 10% da ESQUERDA
//  * - Mobile: mantém imagem atrás do texto (como você gostou)
//  */
// export default function Hero() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden">
//       {/* background */}
//       <div className="absolute inset-0 bg-hero" />
//       <div className="pointer-events-none absolute -top-10 right-[-260px] h-[560px] w-[560px] rounded-full bg-pa-200 blur-3xl opacity-60 blob" />
//       <div className="pointer-events-none absolute -bottom-40 left-[-320px] h-[720px] w-[720px] rounded-full bg-pa-100 blur-3xl opacity-70 blob" />

//       <div className="container-safe relative py-16 sm:py-20">
//         {/* Visual por trás no MOBILE */}
//         <div className="pointer-events-none absolute inset-x-0 top-[-26px] -z-0 mx-auto block w-[92%] max-w-[520px] sm:top-[-34px] lg:hidden">
//           <div className="relative aspect-[4/3] w-full">
//             <div className="absolute inset-0 hero-image-mask">
//               <Image
//                 src="/photos/kaline-valerio.png"
//                 alt="Kaline e Valério — parceria Ponto Amigo"
//                 fill
//                 className="object-cover object-center opacity-[0.22]"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* IMPORTANTE: overflow visível no desktop pra imagem poder "invadir" para esquerda */}
//         <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1.10fr] lg:items-center lg:overflow-visible">
//           {/* Copy */}
//           <div className="animate-reveal">
//             <div className="inline-flex items-center gap-2 rounded-full border border-pa-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-pa-900 shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-pa-500" />
//               Parceria humana • Suporte próximo
//             </div>

//             <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
//               <span className="block">
//                 Cresça com a <span className="text-gradient">Ponto Amigo</span>.
//               </span>
//             </h1>

//             <p className="mt-4 text-slate-700 text-lg leading-relaxed">
//               Somos uma{" "}
//               <span className="font-semibold text-slate-900">promotora de crédito</span> que conecta parceiros (CORBAN) a bancos e
//               instituições financeiras — com suporte próximo, processo claro e foco em segurança.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <a
//                 href="#cadastro"
//                 className="group shine inline-flex items-center gap-2 rounded-xl bg-pa-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
//               >
//                 Quero ser parceiro
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//               </a>
//               <a
//                 href="#quem-somos"
//                 className="inline-flex items-center gap-2 rounded-xl border border-pa-200/70 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-pa-900 hover:bg-pa-50"
//               >
//                 Entender como funciona
//               </a>
//             </div>

//             <div className="mt-10 grid gap-5 sm:grid-cols-3">
//               <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Garantia & segurança" />
//               <Badge icon={<Handshake className="h-4 w-4" />} text="Parceria de verdade" />
//               <Badge icon={<BadgeCheck className="h-4 w-4" />} text="Estrutura para escalar" />
//             </div>
//           </div>

//           {/* Visual no DESKTOP */}
//           <div className="relative hidden lg:block lg:pl-15 reveal">
//             {/* 
//               - Aumenta horizontalmente sem mexer no "onde você posicionou":
//               - max-w-none + w grande permite invadir pro lado esquerdo (com overflow-visible)
//               - mantém seu translate-x do jeito que você acertou
//             */}
//             <div className="relative ml-auto w-[500px] max-w-none lg:translate-x-[240px]">
//               <div className="relative aspect-[4/5] w-full">
//                 <div className="absolute inset-0 hero-image-mask">
//                   <Image
//                     src="/photos/kaline-valerio.png"
//                     alt="Kaline e Valério — parceria Ponto Amigo"
//                     fill
//                     className="object-cover object-[70%_center]"
//                     priority
//                   />

//                   {/* Blend leve só na ESQUERDA (combina com o fundo e tira "corte") */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(248,251,255,0.95)] via-[rgba(248,251,255,0.35)] to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div className="flex items-center gap-2 rounded-2xl border border-pa-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-soft">
//       <span className="grid h-8 w-8 place-items-center rounded-xl bg-pa-50 text-pa-900">
//         {icon}
//       </span>
//       <span className="text-sm font-semibold text-pa-900">{text}</span>
//     </div>
//   );
// }




// "use client";

// import Image from "next/image";
// import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
// import { useRef } from "react";

// export default function Hero() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden">
//       {/* background */}
//       <div className="absolute inset-0 bg-hero" />
//       <div className="pointer-events-none absolute -top-8 right-[-260px] h-[520px] w-[520px] rounded-full bg-pa-200 blur-3xl opacity-60 blob" />
//       <div className="pointer-events-none absolute -bottom-36 left-[-320px] h-[680px] w-[680px] rounded-full bg-pa-100 blur-3xl opacity-70 blob" />

//       {/* HERO sem sobra */}
//       <div className="container-safe relative py-0">
//         {/* MOBILE image */}
//         <div className="pointer-events-none absolute inset-x-0 top-[-22px] -z-0 mx-auto block w-[92%] max-w-[520px] lg:hidden">
//           <div className="relative aspect-[4/3] w-full">
//             <div className="absolute inset-0 hero-image-mask">
//               <Image
//                 src="/photos/kaline-valerio.png"
//                 alt="Kaline e Valério — parceria Ponto Amigo"
//                 fill
//                 className="object-cover opacity-[0.22]"
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         {/* grid organizado */}
//         <div className="relative z-10 grid gap-6 lg:gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:overflow-visible">
//           {/* COPY */}
//           <div className="animate-reveal lg:pt-1">
//             <div className="inline-flex items-center gap-2 rounded-full border border-pa-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-pa-900 shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-pa-500" />
//               Parceria humana • Suporte próximo
//             </div>

//             {/* ⬇️ remove mt-10 e controla largura pra não esmagar */}
//             <h1 className="mt-2 max-w-[520px] text-[2.1rem] leading-[1.05] font-semibold tracking-tight sm:text-[2.55rem] lg:text-[2.7rem] lg:leading-[1.02]">
//               Cresça com a <span className="text-gradient">Ponto Amigo</span>.
//             </h1>

//             <p className="mt-2 max-w-[560px] text-slate-700 text-[0.98rem] leading-[1.5] lg:text-[1rem] lg:leading-[1.55]">
//               Somos uma{" "}
//               <span className="font-semibold text-slate-900">promotora de crédito</span> que conecta parceiros (CORBAN) a bancos e
//               instituições financeiras — com suporte próximo, processo claro e foco em segurança.
//             </p>

//             <div className="mt-3 flex flex-wrap gap-3">
//               <a
//                 href="#cadastro"
//                 className="group shine inline-flex items-center gap-2 rounded-xl bg-pa-900 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
//               >
//                 Quero ser parceiro
//                 <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
//               </a>
//               <a
//                 href="#quem-somos"
//                 className="inline-flex items-center gap-2 rounded-xl border border-pa-200/70 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold text-pa-900 hover:bg-pa-50"
//               >
//                 Entender como funciona
//               </a>
//             </div>

//             {/* badges: deixa quebrar bonito e não “espremido” */}
//             <div className="mt-5 grid gap-2 sm:grid-cols-15 gap-3">
//               <Badge icon={<ShieldCheck className="h-4 w-4" />} text="Garantia & segurança" />
//               <Badge icon={<Handshake className="h-4 w-4" />} text="Parceria de verdade" />
//               <Badge icon={<BadgeCheck className="h-4 w-4" />} text="Estrutura para escalar" />
//             </div>
//           </div>

//           {/* IMAGE DESKTOP */}
//           <div className="relative hidden lg:block lg:pl-6">
//             <div className="relative ml-auto w-[700px] max-w-none lg:translate-x-[240px]">
//               <div className="relative aspect-[4/3] w-full">
//                 <div className="absolute inset-0 hero-image-mask">
//                   <Image
//                     src="/photos/kaline-valerio.png"
//                     alt="Kaline e Valério — parceria Ponto Amigo"
//                     fill
//                     className="object-cover object-[70%_center]"
//                     priority
//                   />
//                   {/* fade ESQUERDA */}
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(248,251,255,0.95)] via-[rgba(248,251,255,0.3)] to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div className="flex items-center gap-2 rounded-2xl border border-pa-200/60 bg-white/70 backdrop-blur px-3 py-1.5 shadow-soft">
//       <span className="grid h-7 w-7 place-items-center rounded-lg bg-pa-50 text-pa-900">{icon}</span>
//       <span className="text-[0.9rem] font-semibold text-pa-900">{text}</span>
//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, Handshake, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute -top-8 right-[-260px] h-[520px] w-[520px] rounded-full bg-pa-200 blur-3xl opacity-60 blob" />
      <div className="pointer-events-none absolute -bottom-36 left-[-320px] h-[680px] w-[680px] rounded-full bg-pa-100 blur-3xl opacity-70 blob" />

      {/* HERO sem sobra */}
      <div className="container-safe relative py-0">
        {/* MOBILE image */}
        <div className="pointer-events-none absolute inset-x-0 top-[-22px] -z-0 mx-auto block w-[92%] max-w-[520px] lg:hidden">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 hero-image-mask">
              <Image
                src="/photos/kaline-valerio.png"
                alt="Kaline e Valério — parceria Ponto Amigo"
                fill
                className="object-cover opacity-[0.22]"
                priority
              />
            </div>
          </div>
        </div>

        {/* ✅ AQUI: dá mais espaço pro TEXTO no desktop */}
        <div className="relative z-1 grid gap-4 lg:gap-0 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:overflow-visible">
          {/* COPY */}
          <div className="animate-reveal mt-6 lg:mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-pa-500/70 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-pa-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-pa-500" />
              Parceria humana • Suporte próximo
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="block">
                Cresça com a <span className="text-gradient">Ponto Amigo</span>.
              </span>
            </h1>

            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Somos uma <span className="font-semibold text-slate-900">promotora de crédito</span> que conecta parceiros (CORBAN) a bancos e
              instituições financeiras — com suporte próximo, processo claro e foco em segurança.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cadastro"
                className="group shine inline-flex items-center gap-2 rounded-xl bg-pa-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
              >
                Quero ser parceiro
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#quem-somos"
                className="inline-flex items-center gap-2 rounded-xl border border-pa-200/70 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-pa-900 hover:bg-pa-50"
              >
                Entender como funciona
              </a>
            </div>

            {/*
                agora não espreme porque o texto ganhou largura */}
            <div className="mt-3 mb-3 sm:mb-3 grid gap-2 sm:grid-cols-2">
              <Badge icon={<ShieldCheck className="h-4 w-5" />} text="Garantia & segurança" />
              <Badge icon={<Handshake className="h-4 w-4" />} text="Parceria de verdade" />

            </div>
          </div>

          {/* IMAGE DESKTOP */}
          <div className="relative hidden lg:block lg:pl-6">
            <div className="relative ml-auto w-[700px] max-w-none lg:translate-x-[260px]">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 hero-image-mask">
                  <Image
                    src="/photos/kaline-valerio.png"
                    alt="Kaline e Valério — parceria Ponto Amigo"
                    fill
                    className="object-cover object-[80%_center]"
                    priority
                  />
                  {/* fade ESQUERDA */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(248,251,255,0.95)] via-[rgba(248,251,255,0.3)] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /grid */}
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-pa-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-soft">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-pa-50 text-pa-900">{icon}</span>
      <span className="text-sm font-semibold text-pa-900">{text}</span>
    </div>
  );
}
