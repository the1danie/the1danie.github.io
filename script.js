const body = document.querySelector("body"),
      nav = document.querySelector("body"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      button = document.getElementById("themeButton"),
      container = document.querySelector(".container")

      modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        const currentTheme = container.getAttribute("data-bs-theme");
        if (currentTheme === "light") {
          container.setAttribute("data-bs-theme", "dark");
      } else {
          container.setAttribute("data-bs-theme", "light");
      }
      });

      searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
      });