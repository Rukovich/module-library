class menuCard {
  constructor(img, alt, subtitle, descr, parentSelector) {
    this.img = img;
    this.alt = alt;
    this.subtitle = subtitle;
    this.descr = descr;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("div");

    element.innerHTML = `
      <div class="card">
        <div class="card__content">
          <img class="card__img"
            src=${this.img}
            alt=${this.alt}>
          <div class="card__subtitle">${this.subtitle}</div>
          <div class="card__descr">${this.descr}</div>
        </div>
      </div>
    `;
    this.parent.append(element);
  }
}

new menuCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
).render();

new menuCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
).render();

new menuCard(
  "https://loremflickr.com/320/240",
  "pics",
  "subtitle",
  "descr",
  ".card-block"
).render();
