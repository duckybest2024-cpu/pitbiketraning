// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu after clicking a link (mobile)
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Booking form (front-end demo handling)
const form = document.getElementById("bookingForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const parent = form.parent.value.trim();
    const email = form.email.value.trim();
    const age = Number(form.childAge.value);

    if (!parent || !email || !form.childAge.value) {
      note.textContent = "Будь ласка, вкажіть ім'я, пошту та вік дитини.";
      note.className = "form-note err";
      return;
    }
    if (age < 5 || age > 15) {
      note.textContent = "Наші програми — для райдерів віком від 5 до 15 років.";
      note.className = "form-note err";
      return;
    }

    note.textContent = `Дякуємо, ${parent.split(" ")[0]}! Заявку отримано — ми напишемо вам протягом одного робочого дня. 🏍️`;
    note.className = "form-note ok";
    form.reset();
  });
}
