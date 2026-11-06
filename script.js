const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.style.opacity = "1";
      entry.target.style.transform = "none";
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section, .timeline article, .skill-grid > div, .contact").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(16px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  reveal.observe(item);
});
