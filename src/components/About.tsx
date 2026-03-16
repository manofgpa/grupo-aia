import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

export function About() {
  const heading = useScrollReveal()
  const p1 = useScrollReveal()
  const p2 = useScrollReveal()
  const p3 = useScrollReveal()

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2
          ref={heading.ref}
          className={`font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6 transition-all duration-700 ${
            heading.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Você não está quebrada. E não precisa passar por isso sozinha.
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
            O Grupo Aia nasceu de uma escuta atenta a uma dor que muitos carregam em silêncio:
            a compulsão. Seja por compras, por comida ou por outros comportamentos que parecem
            fugir do controle — sabemos que por trás de cada impulso existe uma história que
            merece ser ouvida.
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
            Através de grupos terapêuticos online, criamos espaços de conscientização e troca de
            experiências. Não oferecemos fórmulas prontas nem julgamentos — oferecemos presença,
            escuta e o poder de saber que você não está sozinho. A palavra que nos guia é
            Acolhimento — receber alguém com calor, dizer &ldquo;você pertence aqui.&rdquo;
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
            Quando alguém chega ao Aia, não se torna um paciente. Torna-se uma pessoa
            acompanhada — com respeito à sua história, ao seu tempo e à sua singularidade.
          </p>
        </div>
      </div>
    </section>
  )
}
