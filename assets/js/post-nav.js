const masthead = document.querySelector(".masthead");
const postNav = document.getElementById("markdown-toc");
const links = [...postNav.querySelectorAll("a")];
const titles = links.map((link) =>
  document.getElementById(decodeURIComponent(link.href).split("#")[1])
);

console.log(links, titles);

const handleFixed = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      postNav.classList.add("fixed");
    } else {
      postNav.classList.remove("fixed");
    }
  });
};

const handleLinks = () => {
  // links.map(link=>link.classList.remove("active"));
  // titles.map((title) => console.log(title.getBoundingClientRect()));
};

// const handleScroll = () => {
//   let aboveHeaderUrl; // 화면 바로 위쪽에 위치한 header
//   const currentOffsetY = window.pageYOffset;
//   const headerElements = document.querySelectorAll(".anchor-header");
//   for (const elem of headerElements) {
//     const { top } = elem.getBoundingClientRect();
//     const elemTop = top + currentOffsetY;
//     const isLast = elem === headerElements[headerElements.length - 1];
//     if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
//       // 기억해둔 aboveHeaderUrl이 있다면 바로 위 header와 현재 element 사이에 화면이 스크롤 되어 있다.
//       aboveHeaderUrl &&
//         setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
//       // 기억해둔 aboveHeaderUrl이 없다면 첫번째 header다.
//       // 이때는 어떤 header도 active 하지 않은 상태다.
//       !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
//       break;
//     } else {
//       // 마지막 header면 다음 element가 없기 때문에 현재 header를 active header라 간주한다.
//       isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
//       !isLast && (aboveHeaderUrl = elem.href);
//     }
//   }
// };

const init = () => {
  const mastheadObserver = new IntersectionObserver(handleFixed);
  mastheadObserver.observe(masthead);

  handleLinks();
  window.addEventListener("scroll", handleLinks);
};

init();
