'use client'

export default function MainMenu () {
  function handleClick (event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);

    if (targetId) {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }
    }
  }
  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <ul className="flex gap-2.5">
        <li className="flex items-center justify-center">
          <a href="#experiencia" onClick={handleClick} className="text-bg">Experiência</a>
        </li>
        <li className="flex items-center justify-center">
          <a href="#projetos" onClick={handleClick} className="text-bg">Projetos</a>
        </li>
        <li className="flex items-center justify-center">
          <a href="#tecnologias" onClick={handleClick} className="text-bg">Tecnologias</a>
        </li>
      </ul>
    </div>
  )
}