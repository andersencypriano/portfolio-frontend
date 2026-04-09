export default function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Pequeno atraso para garantir que o Drawer começou a fechar e destravou o scroll do body
        setTimeout(() => {
          const offset = 81;
          const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetTop,
            behavior: "smooth",
          });
        }, 50);
      }
    }
  }
