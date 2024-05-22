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

function adjustTable() {
  var table = document.getElementById("myTable");
  var windowWidth = window.innerWidth;

  if (windowWidth <= 800) {
      hideColumn(table, 3); // Скрываем "Город"
      hideColumn(table, 4); // Скрываем "Профессия"
  } else {
      showColumn(table, 3); // Показываем "Город"
      showColumn(table, 4); // Показываем "Профессия"
  }
}

function hideColumn(table, colIndex) {
  for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[colIndex - 1].style.display = "none";
  }
}

function showColumn(table, colIndex) {
  for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[colIndex - 1].style.display = "";
  }
}

window.onresize = adjustTable;
window.onload = adjustTable;