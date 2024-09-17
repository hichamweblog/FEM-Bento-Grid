import '../css/index.css';
window.addEventListener('DOMContentLoaded', (event) => {
  // Select all the sections you want to animate
  const sections = document.querySelectorAll(
    '.section1, .section2, .section3, .section4, .section5, .section6, .section7, .section8'
  );

  // Add the animate class to trigger the fade-in animation
  sections.forEach((section) => {
    section.classList.add('animate');
  });
});
