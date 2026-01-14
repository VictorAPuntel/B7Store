const bottomBtn = document.querySelector('.site-footer__bottom-btn')

bottomBtn.addEventListener('click', () => {
  if (bottomBtn) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
})
