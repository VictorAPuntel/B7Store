let banners = document.querySelectorAll('.site-banner__area-link')
let counters = document.querySelectorAll('.area-counter__item')
let currentBanner = 0
let bannerInterval

counters.forEach((counter, key) => {
  counter.addEventListener('click', () => {
    currentBanner = key
    showBanner(key)
    restartBannerTimer()
  })
})

restartBannerTimer()

function showBanner(n) {
  for (let banner of banners) {
    banner.classList.remove('active-link')
  }

  for (let counter of counters) {
    counter.classList.remove('active-item')
  }

  banners[n].classList.add('active-link')
  counters[n].classList.add('active-item')
}

function restartBannerTimer() {
  clearInterval(bannerInterval)
  bannerInterval = setInterval(nextBanner, 2000)
}

function nextBanner() {
  if (currentBanner + 1 >= banners.length) {
    currentBanner = 0
  } else {
    currentBanner++
  }

  showBanner(currentBanner)
}
