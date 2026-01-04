function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
const endDate = new Date();
endDate.setHours(endDate.getHours() + 12);

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "انتهى العرض";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${hours}س : ${minutes}د : ${seconds}ث`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
