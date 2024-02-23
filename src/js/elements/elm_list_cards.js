import productsObj from "../../json/products.json";

export default class ElmListCards extends HTMLElement {
  constructor() {
    super();
    this._maxLength = 10;
    this._pagesCount = parseInt(productsObj.products.length / this._maxLength);
    this._currentPage = 0;
    this.initElm()
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let lGridElements = (pageNumber) => {
      let colOne = [];
      let colTwo = [];
      let template = `${`
<div class='col-sm-6 mb-3 mb-sm-0'>
  *
</div>
<div class='col-sm-6'>
  **
</div>
      `}`;
      let currentEndId = pageNumber * this._maxLength;

      for (let i = currentEndId; i < currentEndId + this._maxLength; i++) {
        let isLeft = i % 2 === 0;

        if (isLeft) {
          colOne.push(`<elm-card id='${i}'></elm-card>`)
        } else {
          colTwo.push(`<elm-card id='${i}'></elm-card>`)
        }
      };

      return template.replace("*", colOne.join("<br>")).replace(
        "**",
        colTwo.join("<br>")
      )
    };

    let template = `${`\n<div class='row'>\n  ${lGridElements(this._currentPage)}\n</div>\n    `}`;
    return this.innerHTML = template
  }
}