$(function () {
  gsap.registerPlugin(ScrollTrigger);
  //con01
  gsap.fromTo(
    "body",
    { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
    {
      "clip-path": "inset(0% 0% 0% 0% round 0%",
      ease: "none",
      duration: 2,
    }
  );
  gsap.fromTo(
    "#con01 .title h2",
    { y: "0px", opacity: 0 },
    {
      y: "-50px",
      opacity: 1,
      ease: "none",
      duration: 2,
    }
  );
  ScrollTrigger.matchMedia({
    "(min-width:1024px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con02",
            start: "0% 50%",
            end: "0% 50%",
            scrub: 2,
            markers: true,
          },
        })
        .fromTo(
          "#con02 .left",
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        )
        .fromTo(
          "#con02 .right",
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        );
    },

    "(max-width:950px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#con02",
            start: "0% 40%",
            end: "0% 40%",
            scrub: 2,
            markers: true,
          },
        })
        .fromTo(
          "#con02 .left",
          { x: "-80%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        )
        .fromTo(
          "#con02 .right",
          { x: "80%", opacity: 0 },
          { x: "0%", opacity: 1, ease: "none", duration: 5 },
          0
        );
    },
  });

  const content =
    "안녕하세요. 책임감과 성실함으로 디자인을 완성하는 웹디자이너 안미나 입니다. 보기 좋고 실용적인 웹사이트를 만들고 싶은 마음으로 웹디자이너가 되고싶습니다. 앞으로도 꾸준히 배우고 성장하면 저만의 색을 담은  웹디자이너를 해 나가고 싶습니다.";
  const text = document.querySelector(".text");
  let i = 0;

  function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0;
    }
  }
  setInterval(typing, 300);
});
