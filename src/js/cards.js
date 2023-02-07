function addCard(img, alt, subtitle, descr, parentSelector) {
  const element = document.createElement("div");
  const parent = document.querySelector(parentSelector);

  element.innerHTML = `
    <div class="card">
      <div class="card__content">
        <img class="card__img"
          src=${img}
          alt=${alt}>
        <div class="card__subtitle">${subtitle}</div>
        <div class="card__descr">${descr}</div>
      </div>
    </div>
  `;
  parent.append(element);
}

addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
);
addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
);
addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
);

// tabs
addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "1-й таб",
  "descr",
  `#tab-1`
);

addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "2-й таб",
  "descr",
  `#tab-2`
);

addCard(
  "https://loremflickr.com/320/240",
  "pics",
  "3-й таб",
  "descr",
  `#tab-3`
);
