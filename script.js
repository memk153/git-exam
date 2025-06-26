document.addEventListener("DOMContentLoaded", () => {
  // --- MENU BURGER ---
  const burger = document.createElement("button");
  burger.classList.add("burger");
  burger.innerHTML = "☰"; // icône simple burger
  const nav = document.querySelector("nav");
  nav.prepend(burger);

  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
  });

  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("nav-open");
    });
  });

  // --- CARROUSEL D'IMAGES ---
  const carousel = document.getElementById("carousel");
  if (carousel) {
    const images = carousel.querySelectorAll("img");
    let current = 0;

    images.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
    });

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "‹";
    prevBtn.classList.add("carousel-btn", "prev");

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "›";
    nextBtn.classList.add("carousel-btn", "next");

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    prevBtn.addEventListener("click", () => {
      images[current].style.display = "none";
      current = (current - 1 + images.length) % images.length;
      images[current].style.display = "block";
    });

    nextBtn.addEventListener("click", () => {
      images[current].style.display = "none";
      current = (current + 1) % images.length;
      images[current].style.display = "block";
    });
  }

  // --- EFFET DE SCROLL ANIMÉ (fade-in) ---
  const faders = document.querySelectorAll(".fade-in");

  function handleScroll() {
    const windowBottom = window.innerHeight + window.scrollY;

    faders.forEach(el => {
      const elementTop = el.offsetTop + el.offsetHeight / 3;
      if (windowBottom > elementTop) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // au chargement

  // --- VALIDATION FORMULAIRE SIMPLE ---
  const form = document.getElementById("contactForm");
  if (form) {
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name.length < 2) {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer un nom valide (au moins 2 caractères).";
        return;
      }

      if (!validateEmail(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez entrer une adresse email valide.";
        return;
      }

      if (message.length < 10) {
        formMessage.style.color = "red";
        formMessage.textContent = "Votre message doit contenir au moins 10 caractères.";
        return;
      }

      formMessage.style.color = "green";
      formMessage.textContent = "Merci pour votre message, nous vous répondrons bientôt.";

      form.reset();
    });

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }
});