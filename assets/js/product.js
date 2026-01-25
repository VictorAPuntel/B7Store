let descriptionHeader = document.querySelector('.product-description__header')
let descriptionBody = document.querySelector('.product-description__body')

if (descriptionHeader && descriptionBody) {
  descriptionHeader.addEventListener('click', () => {
    const isHidden = getComputedStyle(descriptionBody).display === 'none'
    descriptionBody.style.display = isHidden ? 'block' : 'none'
  })
}
