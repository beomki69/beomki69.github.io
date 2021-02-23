const header = document.querySelector(".masthead");
const postNav = document.getElementById("markdown-toc");

const handleObserver = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      postNav.classList.add("fixed");
    } else {
      postNav.classList.remove("fixed");
    }
  });
};

const observer = new IntersectionObserver(handleObserver);
observer.observe(header);

// function handleNav() {
//   console.log(window.scrollY);
// }

// function init() {
//   window.addEventListener("scroll", handleNav);
// }

// init();
