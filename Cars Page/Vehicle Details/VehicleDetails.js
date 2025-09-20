function changeImage(thumbnail) {
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });

  thumbnail.classList.add("active");

  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt;
}

// Get vehicleid from URL
function getVehicleIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("vehicleid");
}

// Find vehicle by id
function getVehicleData(vehicleid) {
  if (typeof CARSDATA === "undefined") return null;
  return CARSDATA.concat(BIKESDATA).find((car) => car.vehicleid === vehicleid);
}

function renderVehicleDetails() {
  const vehicleid = getVehicleIdFromUrl();
  const vehicle = getVehicleData(vehicleid);
  if (!vehicle) {
    document.querySelector(".vehicle-info").innerHTML =
      '<h2 class="text-danger">Vehicle not found</h2>';
    return;
  }

  // Main image
  const mainImage = document.getElementById("mainImage");
  if (vehicle.images && vehicle.images.length > 0) {
    mainImage.src = `../assets/${vehicle.images[0]}`;
    mainImage.alt = `${vehicle.name} 1`;
  } else {
    mainImage.src = vehicle.path;
    mainImage.alt = vehicle.name;
  }

  // Thumbnails
  const thumbnailContainer = document.querySelector(".thumbnail-container");
  if (vehicle.images && vehicle.images.length > 0) {
    thumbnailContainer.innerHTML = vehicle.images
      .map(
        (img, idx) =>
          `<img src="../assets/${img}" alt="${vehicle.name} ${
            idx + 1
          }" class="thumbnail${
            idx === 0 ? " active" : ""
          }" onclick="changeImage(this)">`
      )
      .join("");
  }

  // Vehicle info
  document.querySelector(".vehicle-title").textContent = vehicle.name;
  document.querySelector(
    ".car-type"
  ).innerHTML = `<i class="fas fa-car me-2"></i>${vehicle.keys.join(", ")}`;
  document.querySelector(".original-price").textContent = `₹${vehicle.price}`;
  document.querySelector(
    ".discounted-price"
  ).textContent = `₹${vehicle.discountedPrice}`;

  // Vehicle features
  const featuresSection = document.querySelectorAll(".details-section")[1];
  if (featuresSection) {
    const featuresParagraph = featuresSection.querySelector("p");
    if (featuresParagraph) {
      featuresParagraph.textContent = vehicle.features() || "";
    }
  }

  // Rental details
  const detailValues = document.querySelectorAll(
    ".details-section .detail-value"
  );
  if (detailValues.length >= 3) {
    detailValues[0].textContent = `₹${vehicle.discountedPrice}`;
    detailValues[1].textContent = `₹${vehicle.pricePerHr || 299}`;
    detailValues[2].textContent = vehicle.kilometerLimit || "Unlimited";
    console.log(vehicle);
  }
}

// Wait for DOM and CARSDATA
window.addEventListener("DOMContentLoaded", function () {
  if (typeof CARSDATA === "undefined") {
    const script = document.createElement("script");
    script.src = "../script/carsData.js";
    script.onload = renderVehicleDetails;
    document.body.appendChild(script);
  } else {
    renderVehicleDetails();
  }

  // WhatsApp redirect for Book Now button
  const btn = document.querySelector(".book-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      const vehicleid = getVehicleIdFromUrl();
      const vehicle = getVehicleData(vehicleid);
      if (!vehicle) return;
      const message = `I would like to book\n\nVehicle: ${
        vehicle.name
      }\nType: ${vehicle.keys.join(", ")}\nPrice: ₹${vehicle.discountedPrice}`;
      const encodedMsg = encodeURIComponent(message);
      // Replace with your WhatsApp number
      const whatsappNumber = "919573340113";
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMsg}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});
