import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      colors: {
        // Paleta azul inspirada no logo da Ponto Amigo (navy + azul + ciano)
        pa: {
          50: "#bae2f3",
          100: "#c6e8f7",
          200: "#CDEBF7",
          300: "#A6DCF0",
          400: "#6FC7E7",
          500: "#48A8D0",
          600: "#3D789B",
          700: "#315E82",
          800: "#214A74",
          900: "#194167"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.10)"
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } }
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
