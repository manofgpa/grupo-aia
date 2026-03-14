import { useScrollReveal } from '../hooks/useScrollReveal'

const TEAM_MEMBERS = [
  {
    name: 'Andrea Guedes Mano',
    role: 'Psicóloga Clínica',
    specialty: 'Terapia Clínica Sistêmica',
    image: '/andrea.jpg',
  },
  {
    name: 'Luciana Takagi',
    role: 'Psicóloga Clínica',
    specialty: 'Terapia Clínica Sistêmica',
    image: '/luciana.jpg',
  },
] as const

function Member({
  name,
  role,
  specialty,
  image,
}: (typeof TEAM_MEMBERS)[number]) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row items-start gap-5 mb-12 last:mb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover shrink-0"
      />
      <p className="text-warm-gray text-lg leading-relaxed">
        <strong className="text-deep-charcoal">{name}</strong>, {role}, dedica-se à {specialty}.
      </p>
    </div>
  )
}

export function Team() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-10">
          Quem acompanha você.
        </h2>

        {TEAM_MEMBERS.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}
