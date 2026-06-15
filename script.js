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
      note.textContent = "Please fill in name, email and your child's age.";
      note.className = "form-note err";
      return;
    }
    if (age < 5 || age > 15) {
      note.textContent = "Our programs are for riders aged 5 to 15.";
      note.className = "form-note err";
      return;
    }

    note.textContent = `Thanks ${parent.split(" ")[0]}! Your request is in — we'll email you within one business day. 🏍️`;
    note.className = "form-note ok";
    form.reset();
  });
}
