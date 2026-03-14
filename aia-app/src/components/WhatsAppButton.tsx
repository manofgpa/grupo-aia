const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 motion-safe:animate-bounce-once cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 2.003A13.89 13.89 0 0 0 2.1 15.9a13.82 13.82 0 0 0 1.886 6.965L2 30l7.343-1.926A13.9 13.9 0 0 0 16.004 30 13.998 13.998 0 1 0 2.1 15.9M16 27.8a11.7 11.7 0 0 1-5.956-1.628l-.427-.254-4.43 1.162 1.182-4.318-.278-.443A11.74 11.74 0 0 1 4.3 15.9 11.71 11.71 0 1 1 16 27.8m6.424-8.773c-.352-.176-2.084-1.028-2.407-1.146-.324-.117-.559-.176-.794.176s-.911 1.146-1.117 1.382-.411.264-.764.088a9.6 9.6 0 0 1-2.837-1.75 10.6 10.6 0 0 1-1.962-2.443c-.206-.352-.022-.543.155-.718.159-.158.352-.411.529-.617s.235-.352.352-.588.059-.44-.03-.617-.793-1.91-1.088-2.614c-.286-.687-.578-.594-.794-.605l-.676-.012a1.3 1.3 0 0 0-.94.44 3.95 3.95 0 0 0-1.235 2.937c0 1.734 1.264 3.41 1.44 3.645s2.487 3.798 6.028 5.327c.842.363 1.5.58 2.013.743.846.269 1.616.231 2.224.14.679-.101 2.084-.852 2.378-1.675s.294-1.528.206-1.675-.323-.235-.676-.411" />
      </svg>
    </a>
  )
}
