import { Brain, Users, Leaf, Shield } from 'lucide-react'
import { SignatureSweep } from './SignatureSweep'

const FEATURES = [
  {
    icon: Brain,
    title: 'Equipe Multidisciplinar',
    description:
      'Psicologia, psiquiatria e práticas holísticas integradas em uma abordagem coesa.',
  },
  {
    icon: Users,
    title: 'Protocolos Específicos',
    description:
      'Desenvolvidos para a faixa dos 40–90 anos — não adaptados de populações mais jovens.',
  },
  {
    icon: Leaf,
    title: 'Sensibilidade Cultural',
    description:
      'O Acolhimento português integrado na estrutura clínica como metodologia de cuidado.',
  },
  {
    icon: Shield,
    title: 'Continuidade de Cuidado',
    description:
      'A mesma equipe acompanha você durante toda a sua jornada. Sem rotatividade, sem recomeços.',
  },
] as const

export function Approach() {
  return (
    <section id="abordagem" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Nossa Abordagem
          </p>
          <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
            Rigor clínico com calor humano.
          </h2>
          <SignatureSweep className="w-32 text-signature-gold mb-6" />
          <p className="text-warm-gray text-lg leading-relaxed">
            O Aia ocupa um espaço único: clinicamente rigoroso E emocionalmente acolhedor,
            baseado em evidências E centrado na alma.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-warm-white border border-mist rounded-2xl p-8 hover:border-sand hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-champagne/40 flex items-center justify-center shrink-0 group-hover:bg-champagne/60 transition-colors duration-300">
                  <Icon size={22} className="text-antique-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-rich-black text-xl font-medium mb-2">
                    {title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
