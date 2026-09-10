// =====================================================
// Rama Gayathri.G — Portfolio JavaScript
// =====================================================


// =====================================================
// FOOTER YEAR
// =====================================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// THEME TOGGLE
// =====================================================

const body = document.body;

const themeToggle =
  document.getElementById("themeToggle");

const iconMoon =
  document.getElementById("iconMoon");

const iconSun =
  document.getElementById("iconSun");


function applyTheme(theme) {

  body.setAttribute(
    "data-theme",
    theme
  );

  if (iconMoon) {

    iconMoon.style.display =
      theme === "dark"
        ? "block"
        : "none";
  }

  if (iconSun) {

    iconSun.style.display =
      theme === "light"
        ? "block"
        : "none";
  }

  localStorage.setItem(
    "portfolio-theme",
    theme
  );
}


const savedTheme =
  localStorage.getItem(
    "portfolio-theme"
  ) ||
  (
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light"
  );


applyTheme(savedTheme);


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      const current =
        body.getAttribute(
          "data-theme"
        );

      applyTheme(
        current === "dark"
          ? "light"
          : "dark"
      );

    }
  );

}


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle =
  document.getElementById("menuToggle");

const tabs =
  document.getElementById("tabs");


if (menuToggle && tabs) {

  menuToggle.addEventListener(
    "click",
    () => {

      const open =
        tabs.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    }
  );


  tabs
    .querySelectorAll(".tab")
    .forEach((tab) => {

      tab.addEventListener(
        "click",
        () => {

          tabs.classList.remove(
            "open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          tabs
            .querySelectorAll(".tab")
            .forEach((t) => {

              t.classList.remove(
                "active"
              );

            });

          tab.classList.add(
            "active"
          );

        }
      );

    });

}


// =====================================================
// ACTIVE SECTION WHILE SCROLLING
// =====================================================

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const tabLinks =
  document.querySelectorAll(
    ".tab"
  );


const navObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            const id =
              entry.target.getAttribute(
                "id"
              );

            tabLinks.forEach(
              (link) => {

                link.classList.toggle(
                  "active",
                  link.getAttribute(
                    "href"
                  ) === `#${id}`
                );

              }
            );

          }

        }
      );

    },

    {
      rootMargin:
        "-40% 0px -50% 0px"
    }

  );


sections.forEach(
  (section) => {

    navObserver.observe(
      section
    );

  }
);


// =====================================================
// HERO TYPING EFFECT
// =====================================================

const typedLine =
  document.getElementById(
    "typedLine"
  );

const typedText =
  "Rama Gayathri.G — Developer";

let charIndex = 0;


function typeChar() {

  if (
    typedLine &&
    charIndex <= typedText.length
  ) {

    typedLine.textContent =
      typedText.slice(
        0,
        charIndex
      );

    charIndex++;

    setTimeout(
      typeChar,
      45
    );

  }

}


typeChar();


// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================

const revealTargets =
  document.querySelectorAll(
    ".section-title, " +
    ".about-text, " +
    ".about-stats, " +
    ".skill-card, " +
    ".project-card, " +
    ".cert-card, " +
    ".timeline-item, " +
    ".contact-grid"
  );


revealTargets.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

  }
);


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "in-view"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.15
    }

  );


revealTargets.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);


// =====================================================
// ANIMATE SKILL BARS
// =====================================================

const skillBars =
  document.querySelectorAll(
    ".skill-bar"
  );


const skillObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "animate"
            );

            skillObserver.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.4
    }

  );


skillBars.forEach(
  (bar) => {

    skillObserver.observe(
      bar
    );

  }
);


// =====================================================
// PROJECT FILTERING
// =====================================================

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );

const filterEmpty =
  document.getElementById(
    "filterEmpty"
  );


filterButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        filterButtons.forEach(
          (btn) => {

            btn.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        const filter =
          button.dataset.filter;

        let visibleCount = 0;


        projectCards.forEach(
          (card) => {

            const tags =
              card.dataset.tags
                .split(" ");


            const show =
              filter === "all" ||
              tags.includes(filter);


            card.classList.toggle(
              "hidden",
              !show
            );


            if (show) {

              visibleCount++;

            }

          }
        );


        if (filterEmpty) {

          filterEmpty.hidden =
            visibleCount !== 0;

        }

      }
    );

  }
);


// =====================================================
// CONTACT FORM
// =====================================================
//
// The form uses mailto:
// ramagayathri862@gmail.com
//
// No backend is required.
// When the visitor clicks Send Message,
// their default email application opens.
// =====================================================

const contactForm =
  document.getElementById(
    "contactForm"
  );

const formStatus =
  document.getElementById(
    "formStatus"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      const email =
        document
          .getElementById("email")
          .value
          .trim();


      const message =
        document
          .getElementById("message")
          .value
          .trim();


      const subject =
        encodeURIComponent(
          `Portfolio contact from ${name}`
        );


      const bodyText =
        encodeURIComponent(
          `${message}\n\nFrom: ${name}\nEmail: ${email}`
        );


      if (formStatus) {

        formStatus.textContent =
          "Opening your email client…";

      }


      window.location.href =
        `mailto:ramagayathri862@gmail.com` +
        `?subject=${subject}` +
        `&body=${bodyText}`;

    }
  );

}