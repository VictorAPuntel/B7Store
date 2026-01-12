const menuBurguer = document.querySelector('.site-header__menu-toggle')
const menuMobile = document.querySelector('.site-header__mobile-menu')

if (menuBurguer && menuMobile) {
  menuBurguer.addEventListener('click', () => {
    const isOpen = menuMobile.classList.toggle('is-open')
    menuBurguer.classList.toggle('is-active')
    menuBurguer.setAttribute('aria-expanded', String(isOpen))
    menuBurguer.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu')
  })

  const isDesktop = window.matchMedia('(min-width: 1024px)')

  function resetMobileMenu(e) {
    if (e.matches) {
      menuMobile.classList.remove('is-open')
      menuBurguer.classList.remove('is-active')
      menuBurguer.setAttribute('aria-expanded', 'false')
      menuBurguer.setAttribute('aria-label', 'Open Menu')
    }
  }

  isDesktop.addEventListener('change', resetMobileMenu)
  resetMobileMenu(isDesktop)
}
