document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const toggleBtn = document.getElementById("theme-toggle");
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  // أنيميشن ظهور الأقسام
  function checkVisibility() {
    let windowHeight = window.innerHeight;
    elements.forEach(el => {
      let position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();

  // تبديل الثيم + أنيميشن دوران
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    toggleBtn.classList.add("animate");
    setTimeout(() => toggleBtn.classList.remove("animate"), 600);
  });

  // فتح القائمة
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // إغلاق القائمة بالزر الجديد
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // إغلاق القائمة عند الضغط على الخلفية
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
