(function () {
  const navbar = document.querySelector('#navbar');
  const nameLink = document.querySelector('#nameLink');
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (userPrefersDark) {
      if (navbar) {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";
      }
      nameLink.classList.remove('link-dark');
      nameLink.className = "link-light";
    } else {
      if (navbar) {
      navbar.classList.remove('navbar-dark', 'bg-dark');
      navbar.className = "navbar navbar-expand-lg navbar-light bg-light sticky-top";
      }
      if (nameLink) {
        nameLink.classList.remove('link-light');
        nameLink.className = "link-dark";
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const changedColor = e.matches ? "dark" : "light";
      if (changedColor == "dark") {
        if (navbar) {
          navbar.classList.remove('navbar-light', 'bg-light');
          navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark sticky-top";
        }
        if (nameLink) {
          nameLink.classList.remove('link-dark');
          nameLink.className = "link-light";
        }
      } else {
        if (navbar) {
          navbar.classList.remove('navbar-dark', 'bg-dark');
          navbar.className = "navbar navbar-expand-lg navbar-light bg-light sticky-top"; 
        }
        if (nameLink) {
          nameLink.classList.remove('link-light');
          nameLink.className = "link-dark";
        }
      }
    });
  
})();
