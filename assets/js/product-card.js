// Favorite button toggle (Event Delegation)
// - We listen for clicks on the whole document (1 listener only)
// - When the click happens, we check if it came from a ".product-item__fav" button
// - If yes, we toggle the heart icon (line <-> fill)

document.addEventListener('click', (e) => {
  // e.target is the element that was actually clicked (could be the <img>)
  // closest() walks up the DOM tree to find the nearest ancestor that matches the selector
  const btn = e.target.closest('.product-item__fav')

  // If the click was not inside a favorite button, do nothing
  if (!btn) return

  // Safety: prevent default behavior (useful if this ends up inside a form, etc.)
  e.preventDefault()

  // Get the <img> inside the clicked favorite button
  const img = btn.querySelector('img')

  // If somehow the button has no image, do nothing
  if (!img) return

  // Paths for the two states (empty heart vs filled heart)
  const line = 'assets/img/ui/heart-3-line.png'
  const fill = 'assets/img/ui/heart-3-fill.png'

  // IMPORTANT:
  // - getAttribute('src') returns the exact value written in the HTML (relative path)
  // - img.src returns an absolute URL (e.g., http://localhost:5500/...), which can break comparisons
  const current = img.getAttribute('src')

  // Toggle:
  // If current is the "line" icon, switch to "fill"
  // Otherwise, switch back to "line"
  img.setAttribute('src', current === line ? fill : line)
})
