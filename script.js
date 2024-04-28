// Add functionality to collapse sections when clicked
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.addEventListener('click', function() {
        this.classList.toggle('collapsed');
      });
    });
  });
  