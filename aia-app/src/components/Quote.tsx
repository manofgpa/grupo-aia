import { SignatureSweep } from './SignatureSweep'

export function Quote() {
  return (
    <section className="py-24 px-6 bg-rich-black relative overflow-hidden">
      {/* Background sweep */}
      <SignatureSweep className="absolute top-12 -right-20 w-[500px] text-signature-gold opacity-[0.05]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-serif text-signature-gold/20 text-[120px] leading-none select-none block -mb-16">
          &ldquo;
        </span>
        <blockquote className="font-serif text-warm-white text-2xl md:text-4xl font-normal italic leading-relaxed mb-8">
          Quando alguém entra pela porta do Aia, não se torna um paciente.
          Torna-se uma pessoa sendo acompanhada.
        </blockquote>
        <SignatureSweep className="w-24 text-signature-gold mx-auto mb-6" />
        <p className="text-champagne text-sm tracking-wider uppercase">
          A Promessa do Grupo Aia
        </p>
      </div>
    </section>
  )
}
