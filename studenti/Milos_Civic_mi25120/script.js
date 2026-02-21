
/* ==========================
   Portfolio & Case Studies — Modern Luxury
   - Header shrink + progress bar
   - Reveal on scroll (stagger)
   - Active nav
   - Footer expands near bottom
   ========================== */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ----- Header shrink + progress bar ----- */
const header = document.getElementById("site-header");
const progressBar = document.getElementById("scroll-bar");

function updateScrollUI() {
  const y = window.scrollY || 0;

  if (header) header.classList.toggle("scrolled", y > 18);

  if (progressBar) {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? (y / scrollHeight) : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  }
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

/* ----- Reveal on scroll (stagger in groups) ----- */
const revealItems = document.querySelectorAll(".reveal");

function makeVisible(el, delay = 0) {
  if (prefersReducedMotion) {
    el.classList.add("is-visible");
    return;
  }
  setTimeout(() => el.classList.add("is-visible"), delay);
}

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // If element is a reveal-group: stagger children (.reveal) inside it
        if (entry.target.classList.contains("reveal-group")) {
          const children = entry.target.querySelectorAll(".reveal");
          children.forEach((child, i) => makeVisible(child, i * 80));
          entry.target.classList.add("is-visible");
        } else {
          makeVisible(entry.target, 0);
        }

        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "-30px" }
  );

  revealItems.forEach((el) => io.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

/* ----- Active nav link ----- */
const navLinks = document.querySelectorAll(".nav-link");
const currentPath = location.pathname.split("/").pop() || "index.html";
navLinks.forEach((a) => {
  if (a.getAttribute("href") === currentPath) {
    a.classList.add("active");
    a.setAttribute("aria-current", "page");
  }
});

/* ----- Footer expands near bottom ----- */
const footerSentinel = document.getElementById("footer-sentinel");
if (footerSentinel && "IntersectionObserver" in window) {
  const fo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        document.body.classList.toggle("at-bottom", e.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );
  fo.observe(footerSentinel);
}

/* ----- Contact form demo feedback (optional but classy) ----- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    if (!btn) return;

    const original = btn.textContent;
    btn.textContent = "✓ Poslato (demo)";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      contactForm.reset();
    }, 1500);
  });
}
