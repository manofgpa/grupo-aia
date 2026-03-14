export function Footer() {
  return (
    <footer className="bg-rich-black py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-stone text-xs mb-2">
          &copy; {new Date().getFullYear()} Grupo Aia. Todos os direitos reservados.
        </p>
        <p className="font-serif text-champagne italic text-sm">
          Guardiães da Alma.
        </p>
      </div>
    </footer>
  )
}
