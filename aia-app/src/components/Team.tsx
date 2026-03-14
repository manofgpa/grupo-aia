import { SignatureSweep } from './SignatureSweep'

const TEAM_MEMBERS = [
  {
    name: 'Dra. Maria Helena',
    role: 'Psicóloga Clínica',
    specialty: 'Psicanálise e Envelhecimento',
  },
  {
    name: 'Dr. Carlos Andrade',
    role: 'Psiquiatra',
    specialty: 'Psicogeriatria',
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Neuropsicóloga',
    specialty: 'Avaliação Cognitiva',
  },
  {
    name: 'Dr. Fernando Lima',
    role: 'Psicólogo',
    specialty: 'Terapia Familiar Sistêmica',
  },
] as const

export function Team() {
  return (
    <section id="equipe" className="py-24 px-6 bg-champagne/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-signature-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Nossa Equipe
          </p>
          <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
            Quem acompanha você.
          </h2>
          <SignatureSweep className="w-40 text-signature-gold mx-auto mb-6" />
          <p className="text-warm-gray text-lg leading-relaxed max-w-2xl mx-auto">
            Uma equipe multidisciplinar que integra décadas de experiência clínica com
            profundo respeito pela pessoa inteira.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map(({ name, role, specialty }) => (
            <div
              key={name}
              className="bg-warm-white border border-mist rounded-2xl overflow-hidden hover:border-sand hover:shadow-lg transition-all duration-300 group"
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-champagne/60 to-blush-clay/20" />

              <div className="p-6">
                <h3 className="font-serif text-rich-black text-lg font-medium mb-1">
                  {name}
                </h3>
                <p className="text-antique-bronze text-sm font-medium mb-1">
                  {role}
                </p>
                <p className="text-stone text-sm">
                  {specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
