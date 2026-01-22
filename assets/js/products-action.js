let infoButtons = document.querySelectorAll('.product-info__actions-btn')
let infoShow = ''
let infoArea = document.querySelector('.product-info__sort-area')
let filters = document.querySelector('.product-layout__filters')
const isDesktop = window.matchMedia('(min-width: 1024px)')

infoButtons.forEach((item) => {
  item.addEventListener('click', () => {
    let name = item.getAttribute('data-name')
    if (name === infoShow) {
      infoShow = ''
    } else {
      infoShow = name
    }
    renderInfo()
  })
})

function renderInfo() {
  infoArea.style.display = 'none'
  filters.style.display = 'none'

  if (infoShow === 'sort') {
    infoArea.style.display = 'block'
  }

  if (infoShow === 'filter') {
    filters.style.display = 'block'
  }
}

function resetRenderInfo(e) {
  if (e.matches) {
    infoArea.style.display = 'block'
    filters.style.display = 'block'
  } else {
    infoShow = ''
    renderInfo()
  }
}

isDesktop.addEventListener('change', resetRenderInfo)
resetRenderInfo(isDesktop)
