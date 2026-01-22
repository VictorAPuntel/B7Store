let filterHeader = document.querySelectorAll('.filter-header')
let filterIcon = document.querySelector('.filter-icon')

filterHeader.forEach((item) => {
  item.addEventListener('click', () => {
    let body = item.closest('.filter').querySelector('.filter-body')
    if (body.style.display === 'none') {
      body.style.display = 'block'
      filterIcon.classList.remove('icon-active')
    } else {
      body.style.display = 'none'
      filterIcon.classList.add('icon-active')
    }
  })
})
