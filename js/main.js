/* JointNexa — jointnexa-us.vercel.app
   Two jobs only: the mobile menu panel, and the sticky order bar.
   The hero's entrance is written in CSS keyframes on transform and
   opacity, so nothing here runs an animation loop and nothing competes
   for main-thread time once the page has painted. */
(function () {
  "use strict";

  /* ---- mobile menu ------------------------------------------------- */
  var btn = document.querySelector(".nav-btn");
  var panel = document.getElementById("nav-panel");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    /* Tapping any link closes the panel, so an in-page jump does not
       leave the menu covering the section it jumped to. */
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- sticky order bar -------------------------------------------- */
  var dock = document.querySelector(".dock");
  if (!dock || !("IntersectionObserver" in window)) return;

  var pastHero = false;
  var inPrices = false;
  function sync() { dock.classList.toggle("on", pastHero && !inPrices); }

  /* Observe the hero section rather than the buttons inside it. On a
     narrow screen the hero card stacks tall enough that its buttons
     begin below the fold, and watching those would raise the bar over
     the headline before the reader has scrolled anywhere. */
  var hero = document.querySelector(".frame");
  if (hero) {
    new IntersectionObserver(function (entries) {
      pastHero = !entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(hero);
  }

  /* Hide it again across the price stack, where three order buttons are
     already on screen and a fourth floating one is just noise. */
  var prices = document.getElementById("prices");
  if (prices) {
    new IntersectionObserver(function (entries) {
      inPrices = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(prices);
  }
})();
