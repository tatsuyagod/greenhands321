// フェードインアニメーション
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      sec.classList.add("visible");
    }
  });
});

// ボタンのクリックアニメーション
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 400);
  });
});
window.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.slide');
if (!slides.length) return;
let idx = 0;
slides.forEach((s, i) => {
s.style.opacity = i === 0 ? '1' : '0';
s.style.transition = 'opacity 1.2s ease-in-out';
});
setInterval(() => {
slides[idx].style.opacity = '0';
idx = (idx + 1) % slides.length;
slides[idx].style.opacity = '1';
}, 4000);
});