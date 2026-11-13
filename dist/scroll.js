const portrait = document.querySelector(".portrait");

if (portrait && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;

    portrait.classList.add("is-arriving");
    observer.disconnect();
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.04,
  });

  observer.observe(portrait);
}
