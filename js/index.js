$(function () {
  //con01
  gsap.fromTo(
    "#con01",
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
});
