export function cardHTML(carname, path, price, discountedPrice) {
  let discount = ((price - discountedPrice) / price) * 100;

  return `<div class="col-md-3 col-sm-6">
          <div class="car-card position-relative">
            <span class="discount-badge">${discount}% OFF</span>
            <img src="${path}" alt="Book ${carname}" />
            <div class="car-name">${carname}</div>
            <div>
              <span class="price">₹${discountedPrice}</span>
              <span class="old-price">₹${price}</span>
            </div>
            <button class="book-btn">Book Now</button>
          </div>
        </div>`;
}
