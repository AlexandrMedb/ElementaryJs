"use strict";

let fitlerPopup = document.querySelector(".filterPopup");
let fitlerLabel = document.querySelector(".filterLabel");
let filterIcon = document.querySelector(".filterIcon");

fitlerLabel.addEventListener("click", function () {
  fitlerPopup.classList.toggle("hidden");
  fitlerLabel.classList.toggle("filterLabelPink");
  filterIcon.classList.toggle("filterIconPink");

  if (filterIcon.getAttribute("src") === "images/filter.svg") {
    filterIcon.setAttribute("src", "images/filterHover.svg");
  } else {
    filterIcon.setAttribute("src", "images/filter.svg");
  }
});

let filterHeaders = document.querySelectorAll(".filterCategoryHeader");
filterHeaders.forEach(function (header) {
  header.addEventListener("click", function (event) {
    event.target.nextElementSibling.classList.toggle("hidden");
  });
});

let filterSizes = document.querySelector(".filterSizes");
let filterSizeWrap = document.querySelector(".filterSizeWrap");
filterSizeWrap.addEventListener("click", function () {
  filterSizes.classList.toggle("hidden");
});

const Cart = {
  Ammount: 0,
  totalCost: 0,
  content: [],
};

class Product {
  constructor(featuredId, featuredName, featuredPrice) {
    this.featuredId = featuredId;
    this.featuredName = featuredName;
    this.featuredPrice = featuredPrice;
    this.Ammount = 0;
  }
  render() {
    return `<div>id: ${this.featuredId}, name: ${this.featuredName}, price:${
      this.featuredPrice
    }, Total: ${this.featuredPrice * this.Ammount} `;
  }
}

let featuredName = document.querySelectorAll(".featuredName");
let featuredPrice = document.querySelectorAll(".featuredPrice");

document.querySelectorAll(".featuredImgDark button").forEach((item, i) => {
  //   console.log(item);
  item.addEventListener("click", () => {
    let price = +featuredPrice[i].innerHTML.slice(1);
    let contentIndex = Cart.content.findIndex((item) => {
      return item.featuredId == i;
    });
    if (contentIndex == -1) {
      let feature = new Product(i, featuredName[i].innerHTML, price);
      feature.Ammount = 1;
      Cart.content.push(feature);
      Cart.Ammount++;
      Cart.totalCost += price;
    } else {
      Cart.content[contentIndex].Ammount++;
      Cart.totalCost += price;
      Cart.Ammount++;
    }
    document.querySelector(".cartList").innerHTML = `

    <div class="total">${Cart.Ammount} товаров на сумму ${Cart.totalCost}</div>
    
    `;

    Cart.content.forEach((item) => {
      document
        .querySelector(".total")
        .insertAdjacentHTML("beforebegin", item.render());

      document.querySelector(".cartIconWrap span").innerHTML = Cart.Ammount;
    });
  });
});

document.querySelector(".cartIconWrap").insertAdjacentHTML(
  "afterend",
  `<div class="cartList ">
<div class="total">${Cart.Ammount} товаров  на сумму ${Cart.totalCost}</div>
</div>
`
);

document.querySelector(".cartIconWrap").addEventListener("click", () => {
  document.querySelector(".cartList").classList.toggle("show");
});
