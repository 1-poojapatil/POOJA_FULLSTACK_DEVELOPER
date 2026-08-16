/* ========================================
   MOBILE MENU
======================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {

  const open =
    navLinks.classList.toggle("open");

  menuBtn.setAttribute(
    "aria-expanded",
    String(open)
  );

});


/* ========================================
   CLOSE MOBILE MENU
======================================== */

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


/* ========================================
   CURRENT YEAR
======================================== */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
  document.querySelectorAll(".reveal");

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  observer.observe(element);

});


/* ========================================
   STAGGER CARDS
======================================== */

document
  .querySelectorAll(
    ".skill-card, .project, .timeline-item"
  )
  .forEach((element, index) => {

    element.style.transitionDelay =
      `${(index % 4) * 70}ms`;

  });


/* ========================================
   ACTIVE NAV LINK
======================================== */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        const id =
          entry.target.getAttribute("id");

        navItems.forEach((link) => {

          link.classList.remove(
            "active"
          );

          if (
            link.getAttribute("href") ===
            `#${id}`
          ) {

            link.classList.add(
              "active"
            );

          }

        });

      });

    },
    {
      threshold: 0.35
    }
  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});