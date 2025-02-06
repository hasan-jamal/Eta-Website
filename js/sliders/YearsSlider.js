document.addEventListener("DOMContentLoaded", function () {
  const years = document.querySelectorAll(".Dates .year");
  const contents = document.querySelectorAll(".data-contents .content");
  const dots = document.querySelectorAll(".dots-sliderDatesEta div");
  let autoPlayInterval;

  function setActive(year) {
    years.forEach((y) => y.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    year.classList.add("active");

    const targetDate = year.getAttribute("date-target");

    const activeContent = document.querySelector(
      `.content[date-content="${targetDate}"]`
    );
    const activeDot = document.querySelector(
      `.dots-sliderDatesEta div[date="${targetDate}"]`
    );

    if (activeContent) activeContent.classList.add("active");
    if (activeDot) activeDot.classList.add("active");
  }

  function nextYear() {
    const activeYear = document.querySelector(".Dates .year.active");
    let nextYear = activeYear.nextElementSibling;

    if (!nextYear) {
      nextYear = years[0];
    }

    setActive(nextYear);
  }

  function startAutoPlay(interval = 2000) {
    autoPlayInterval = setInterval(nextYear, interval);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  years.forEach((year) => {
    year.addEventListener("click", function () {
      stopAutoPlay();
      setActive(year);
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      stopAutoPlay();
      const targetDate = dot.getAttribute("date");
      const correspondingYear = document.querySelector(
        `.Dates .year[date-target="${targetDate}"]`
      );
      if (correspondingYear) setActive(correspondingYear);
    });
  });

  const defaultActiveYear = document.querySelector(".Dates .year.active");
  if (defaultActiveYear) setActive(defaultActiveYear);

  startAutoPlay();

  const sliderContainer = document.querySelector(".sliderDatesEta");
  sliderContainer.addEventListener("mouseenter", stopAutoPlay);
  sliderContainer.addEventListener("mouseleave", () => startAutoPlay());
});
