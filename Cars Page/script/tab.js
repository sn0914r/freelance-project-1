import { carCardHtml } from "./html.js";

class Tab {
  constructor() {
    this.sortOrder = "none";
    console.log("Tab started");
    this.initializeTabBtns();
    // Show all vehicles by default on page load
    this.filterVehicles("all", "");
  }

  initializeTabBtns() {
    const btns = document.querySelectorAll(".tab-btn");
    const searchInput = document.querySelector("input");
    const sortSelect = document.getElementById("sortPrice");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((tab) => tab.classList.remove("active"));
        btn.classList.add("active");
        const filterType = btn.getAttribute("data-filter");
        this.filterVehicles(filterType, searchInput.value, this.sortOrder);
      });
    });

    searchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-filter');
      this.filterVehicles(activeTab, e.target.value, this.sortOrder);
    });

    sortSelect.addEventListener('change', (e) => {
      this.sortOrder = e.target.value;
      const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-filter');
      this.filterVehicles(activeTab, searchInput.value, this.sortOrder);
    });
  }

  filterVehicles(type, query, sortOrder = "none") {
    let arr;
    if (type === "all") {
      arr = CARSDATA.concat(BIKESDATA);
    } else if (type === "cars") {
      arr = CARSDATA;
    } else {
      arr = BIKESDATA;
    }

    let filteredElements = arr.filter((vehicle) => {
      return vehicle.name.toLowerCase().includes(query.toLowerCase());
    });

    // Sort by discounted price if needed
    if (sortOrder === "asc") {
      filteredElements.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOrder === "desc") {
      filteredElements.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }

    // Generate HTML and insert into #vehicleGrid
    const vehicleGrid = document.getElementById("vehicleGrid");
    if (filteredElements.length === 0) {
      vehicleGrid.innerHTML = `<div class='col-12 text-center py-4'><span class='text-muted'>No vehicles found.</span></div>`;
    } else {
      vehicleGrid.innerHTML = filteredElements
        .map((vehicle) =>
          carCardHtml(
            vehicle.name,
            vehicle.path,
            vehicle.price,
            vehicle.discountedPrice,
            vehicle.keys,
            vehicle.vehicleid
          )
        )
        .join("");
    }
  }
}

const tab = new Tab();
