import { useScrollReveal } from '../hooks/useScrollReveal'
import { GoldRule } from './GoldRule'

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
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-48 h-60 md:w-56 md:h-72 mb-6 overflow-hidden rounded-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="font-serif text-rich-black text-2xl font-normal mb-1">
        {name}
      </h3>

      <p className="text-stone text-sm tracking-wide uppercase mb-2">
        {role}
      </p>

      <p className="text-warm-gray text-base">
        {specialty}
      </p>
    </div>
  )
}

export function Team() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-rich-black text-4xl md:text-5xl font-normal mb-6">
          Quem acompanha você.
        </h2>

        <GoldRule className="mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-10">
          {TEAM_MEMBERS.map((member) => (
            <Member key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
