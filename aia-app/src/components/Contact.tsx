import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { SignatureSweep } from './SignatureSweep'

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.'

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Info */}
          <div>
            <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
              Você é bem-vinda aqui.
            </h2>
            <SignatureSweep className="w-32 text-signature-gold mb-8" />
            <p className="text-warm-gray text-lg leading-relaxed mb-10">
              O primeiro passo é simples: uma conversa. Sem compromisso, sem pressa.
              Estamos aqui para ouvir.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-champagne/40 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-antique-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-deep-charcoal font-medium text-sm">Endereço</p>
                  <p className="text-warm-gray">Rua Exemplo, 123 — São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-champagne/40 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-antique-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-deep-charcoal font-medium text-sm">Telefone / WhatsApp</p>
                  <p className="text-warm-gray">+55 (11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-champagne/40 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-antique-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-deep-charcoal font-medium text-sm">Horário</p>
                  <p className="text-warm-gray">Segunda a Sexta — 8h às 20h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — WhatsApp CTA */}
          <div className="bg-warm-white border border-mist rounded-2xl p-8 md:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6">
              <MessageCircle size={32} className="text-[#25D366]" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-rich-black text-2xl font-medium mb-4">
              Fale Conosco pelo WhatsApp
            </h3>
            <p className="text-warm-gray text-base leading-relaxed mb-8 max-w-sm">
              Agende sua primeira conversa de forma rápida e prática.
              Responderemos o mais breve possível.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M16.004 2.003A13.89 13.89 0 0 0 2.1 15.9a13.82 13.82 0 0 0 1.886 6.965L2 30l7.343-1.926A13.9 13.9 0 0 0 16.004 30 13.998 13.998 0 1 0 2.1 15.9M16 27.8a11.7 11.7 0 0 1-5.956-1.628l-.427-.254-4.43 1.162 1.182-4.318-.278-.443A11.74 11.74 0 0 1 4.3 15.9 11.71 11.71 0 1 1 16 27.8m6.424-8.773c-.352-.176-2.084-1.028-2.407-1.146-.324-.117-.559-.176-.794.176s-.911 1.146-1.117 1.382-.411.264-.764.088a9.6 9.6 0 0 1-2.837-1.75 10.6 10.6 0 0 1-1.962-2.443c-.206-.352-.022-.543.155-.718.159-.158.352-.411.529-.617s.235-.352.352-.588.059-.44-.03-.617-.793-1.91-1.088-2.614c-.286-.687-.578-.594-.794-.605l-.676-.012a1.3 1.3 0 0 0-.94.44 3.95 3.95 0 0 0-1.235 2.937c0 1.734 1.264 3.41 1.44 3.645s2.487 3.798 6.028 5.327c.842.363 1.5.58 2.013.743.846.269 1.616.231 2.224.14.679-.101 2.084-.852 2.378-1.675s.294-1.528.206-1.675-.323-.235-.676-.411" />
              </svg>
              Iniciar Conversa
            </a>
            <p className="text-stone text-xs mt-4">
              Atendimento de segunda a sexta, das 8h às 20h.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
