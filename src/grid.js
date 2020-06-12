export default class Grid {
  constructor(el) {
    this.DOM = { el: el };
    this.gridItems = [];
    this.items = [...this.el.querySelectorAll(".grid__item")];
    this.items.forEach(item => this.gridItems.push(new GridItems(item)));

    this.showItems();
  }

  showItems() {
    gsap
      .timeline()
      .set(this.items, { scale: 0.7, opacity: 0 }, 0)
      .to(
        this.items,
        {
          duration: 2,
          ease: "Expo.easeOut",
          scale: 1,
          stagger: { amount: 0.6, grid: "auto", from: "center" }
        },
        0
      )
      .to(
        this.items,
        {
          duration: 3,
          ease: "Power1.easeOut",
          opacity: 0.4,
          stagger: { amount: 0.6, grid: "auto", from: "center" }
        },
        0
      );
  }
}

export class GridItem {
  constructor(el) {
    this.DOM = { el: el };
    this.move();
  }

  move() {
    let translationVals = { tx: 0, ty: 0 };

    const xstart = getRandomNumber(15, 60);
    const ystart = getRandomNumber(15, 60);

    const render = () => {
      translationVals.tx = lerp;
    };
  }
}
