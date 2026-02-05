import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="/#cadastro"
        className="group inline-flex items-center gap-2 rounded-full bg-pa-900 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-pa-800"
      >
        <MessageCircle className="h-4 w-4" />
        Cadastro
        <span className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity">→</span>
      </a>

      <a
        href="https://www.pontoamigo.com/ondeestamos"
        className="inline-flex items-center gap-2 rounded-full border border-pa-200 bg-white px-4 py-3 text-sm font-semibold text-pa-900 shadow-sm hover:bg-pa-50"
        title="Ver contatos e localização"
      >
        <PhoneCall className="h-4 w-4" />
        Contato
      </a>
    </div>
  );
}
