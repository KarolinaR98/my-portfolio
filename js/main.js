//force scroll top position on reload

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

//nav

const collapsible = document.querySelector(".collapsible");

collapsible.addEventListener("click", () => {
  collapsible.classList.toggle("collapsible-expanded");
});

//animations

const reveal = () => {
  const revealsUp = document.querySelectorAll(".reveal-up");
  const revealsLeft = document.querySelectorAll(".reveal-left");
  const revealsRight = document.querySelectorAll(".reveal-right");

  for (let i = 0; i < revealsUp.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealsUp[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      revealsUp[i].classList.add("active-up");
    }
  }

  for (let i = 0; i < revealsLeft.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealsLeft[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      revealsLeft[i].classList.add("active-left");
    }
  }

  for (let i = 0; i < revealsRight.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = revealsRight[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      revealsRight[i].classList.add("active-right");
    }
  }
};

window.addEventListener("scroll", reveal);
