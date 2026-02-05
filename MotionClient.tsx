'use client';

import { useEffect } from 'react';

function clamp(n: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, n));
}

/**
 * MotionClient (V8):
 * - reveal: adiciona .in em elementos .reveal quando entram na viewport
 * - form: efeito "imagem se formando" no scroll (clip-path + blur diminuindo)
 * Sem libs externas e sem parallax (evita aquele efeito grande/feio).
 */
export default function MotionClient() {
  useEffect(() => {
    // Reveal
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('in');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));

    // Forming images
    const formEls = Array.from(document.querySelectorAll<HTMLElement>('[data-form]'));
    let raf = 0;

    const tick = () => {
      const vh = window.innerHeight || 800;

      for (const el of formEls) {
        const rect = el.getBoundingClientRect();

        // Start forming a bit before it fully enters
        const start = vh * 0.88;
        const end = vh * 0.18;

        const p = clamp((start - rect.top) / (start - end)); // 0..1
        const topInset = (1 - p) * 100; // %
        const blur = (1 - p) * 14; // px

        el.style.setProperty('--revealTop', `${topInset.toFixed(2)}%`);
        el.style.setProperty('--revealBlur', `${blur.toFixed(2)}px`);
        el.style.setProperty('--revealOpacity', `${(0.35 + p * 0.65).toFixed(3)}`);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
