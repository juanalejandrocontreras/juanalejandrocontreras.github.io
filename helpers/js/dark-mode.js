(function () {
  const navbar = document.querySelector('#navbar');
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (userPrefersDark) {
      navbar.classList.remove('navbar-light', 'bg-light');
      navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";
    } else {
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.className = "navbar navbar-expand-lg navbar-light bg-light sticky-top";
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const changedColor = e.matches ? "dark" : "light";
      if (changedColor == "dark") {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";
      } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.className = "navbar navbar-expand-lg navbar-light bg-light sticky-top";
      }
    });
  
})();
