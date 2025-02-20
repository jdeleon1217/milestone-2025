document.addEventListener("DOMContentLoaded", function () {
  function filterSelection(c) {
    let gridItems = document.querySelectorAll(".grid-item");
    let carousel = document.querySelector(".carousel-container");

    if (c === "all") {
      gridItems.forEach(item => item.classList.add("show"));
    } else {
      gridItems.forEach(item => {
        item.classList.remove("show");
        if (item.classList.contains(c)) {
          item.classList.add("show");
        }
      });
    }

    // Hide carousel only if no items are visible
    let visibleItems = document.querySelectorAll(".grid-item.show");
    carousel.style.display = visibleItems.length > 0 ? "block" : "none";
  }

  let btnContainer = document.getElementById("button-filter");
  let btns = btnContainer.querySelectorAll(".btn-data");

  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      btns.forEach(b => b.classList.remove("active")); // Remove active from all buttons
      this.classList.add("active"); // Set active only on clicked button

      filterSelection(this.getAttribute("data-category"));
    });
  });

  filterSelection("all"); // Default to showing all items
});

