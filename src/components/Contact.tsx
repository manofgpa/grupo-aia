import { GoldRule } from './GoldRule'

const WHATSAPP_URL =
  'https://wa.me/5521972774227?text=Olá! Gostaria de agendar uma consulta.'

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-5 w-5 fill-current"
      aria-hidden="true"
    >
      <path d="M16.004 2.003A13.89 13.89 0 0 0 2.1 15.9a13.82 13.82 0 0 0 1.886 6.965L2 30l7.343-1.926A13.9 13.9 0 0 0 16.004 30 13.998 13.998 0 1 0 2.1 15.9M16 27.8a11.7 11.7 0 0 1-5.956-1.628l-.427-.254-4.43 1.162 1.182-4.318-.278-.443A11.74 11.74 0 0 1 4.3 15.9 11.71 11.71 0 1 1 16 27.8m6.424-8.773c-.352-.176-2.084-1.028-2.407-1.146-.324-.117-.559-.176-.794.176s-.911 1.146-1.117 1.382-.411.264-.764.088a9.6 9.6 0 0 1-2.837-1.75 10.6 10.6 0 0 1-1.962-2.443c-.206-.352-.022-.543.155-.718.159-.158.352-.411.529-.617s.235-.352.352-.588.059-.44-.03-.617-.793-1.91-1.088-2.614c-.286-.687-.578-.594-.794-.605l-.676-.012a1.3 1.3 0 0 0-.94.44 3.95 3.95 0 0 0-1.235 2.937c0 1.734 1.264 3.41 1.44 3.645s2.487 3.798 6.028 5.327c.842.363 1.5.58 2.013.743.846.269 1.616.231 2.224.14.679-.101 2.084-.852 2.378-1.675s.294-1.528.206-1.675-.323-.235-.676-.411" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
          Dar o primeiro passo já é um ato de coragem.
        </h2>

        <div className="flex justify-center mb-12">
          <GoldRule width="8rem" />
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-espresso hover:bg-rich-black text-warm-white font-medium tracking-wide px-10 py-4 rounded-full transition-colors duration-200 cursor-pointer"
        >
          <WhatsAppIcon />
          <span>Iniciar Conversa</span>
        </a>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-stone">
          <a
            href="mailto:adm@grupaiapsicologia.com.br"
            className="group flex items-center gap-2.5 hover:text-signature-gold transition-colors duration-200 cursor-pointer"
          >
            <EmailIcon />
            <span className="text-sm tracking-wide">adm@grupaiapsicologia.com.br</span>
          </a>

          <span className="hidden sm:block w-px h-5 bg-sand" aria-hidden="true" />

          <a
            href="https://www.instagram.com/grupo_aia_psi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 hover:text-signature-gold transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon />
            <span className="text-sm tracking-wide">@grupo_aia_psi</span>
          </a>
        </div>
      </div>
    </section>
  )
}
