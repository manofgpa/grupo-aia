import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

export function About() {
  const p1 = useScrollReveal()
  const p2 = useScrollReveal()
  const p3 = useScrollReveal()

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
          A guardiã da alma não conserta o que está quebrado.
        </h2>

        <GoldRule className="mb-10" />

        <div
          ref={p1.ref}
          className={`transition-all duration-700 ${
            p1.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-warm-gray text-lg leading-relaxed mb-6">
            Ela ilumina o que sempre esteve inteiro. O Grupo Aia nasceu de uma crença radical:
            saúde psicológica após os 40 não é sobre administrar o declínio — é sobre integração.
          </p>
        </div>

        <div
          ref={p2.ref}
          className={`transition-all duration-700 ${
            p2.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-warm-gray text-lg leading-relaxed mb-6">
            Sobre tecer uma vida inteira de experiências em algo completo. A palavra portuguesa
            &ldquo;Acolhimento&rdquo; não tem tradução perfeita — significa receber alguém com
            calor, fazer com que se sinta acolhido, dizer &ldquo;você pertence aqui.&rdquo;
          </p>
        </div>

        <div
          ref={p3.ref}
          className={`transition-all duration-700 ${
            p3.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-warm-gray text-lg leading-relaxed">
            Quando alguém entra pela porta do Aia, não se torna um paciente. Torna-se uma pessoa
            sendo acompanhada. A alma é honrada. A integração é o método. O acolhimento é a experiência.
          </p>
        </div>
      </div>
    </section>
  )
}
