import { cardHTML } from "./cards.js";

class DOM {
  constructor() {
    console.log("hi");
    this.initializeFooter();
    this.initializeCarCards();
  }

  initializeFooter() {
    const address = document.getElementById("footer-address");
    const phone = document.getElementById("footer-telephone");
    const mail = document.getElementById("footer-gmail");
    const socialMedia = document.getElementById("social-media-container");

    let media = [];
    for (let [x, y] of Object.entries(DATA.socialMedia)) {
      media.push(
        `<a href=${y} class="btn btn-outline-warning"><i class="bi bi-${x}"></i></a>`
      );
    }

    address.append(` ${DATA.address}`);
    phone.append(` ${DATA.phone}`);
    mail.append(` ${DATA.mail}`);
    socialMedia.innerHTML = media.join("");
  }

  initializeCarCards() {
    const container = document.querySelector("#car-cards-container");

    const cars = Object.entries(DATA.cars);
    
    let carsHTMLElements=[];
    for (let car of cars) {
      carsHTMLElements.push(
        cardHTML(car[0], car[1]["path"], car[1]["price"], car[1]["discount"])
      )
    }

    container.innerHTML = carsHTMLElements.join("")
  }
}

const dom = new DOM();
