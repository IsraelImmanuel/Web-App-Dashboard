const alertBanner = document.getElementById("alert");

alertBanner.innerHTML

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = 'none'

  }
});
