export function carCardHtml(carname, path, price, discountedPrice, tags = ["car"], vehicleid = "") {
  let discount = Math.round(((price - discountedPrice) / price) * 100);
  let tagsHTML = tags.map((tag) => `<span class="tag">${tag}</span>`);
  let tagsHTMLString = tagsHTML.join("");
  return `<div class="col-md-3 col-sm-6">
  <div class="car-card position-relative">
    <span class="discount-badge">${discount}% OFF</span>
    <img src="${path}" alt="Book ${carname}" />
    <div class="car-name">${carname}</div>
    <div>
      <span class="price">₹${discountedPrice}</span>
      <span class="old-price">₹${price}</span>
    </div>

    <!-- Tags Section -->
    <div class="car-tags">
    ${tagsHTMLString}
    </div>

    <a class="book-btn btn btn-primary" href="Vehicle Details/VehicleDetails.html?vehicleid=${vehicleid}">View Details</a>

  </div>
</div>`;
}
