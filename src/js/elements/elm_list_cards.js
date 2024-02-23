import productsObj from "../../json/products.json";

export default class ElmListCards extends HTMLElement {
  constructor() {
    super();
    this._hElhSelect = d => this.select(d.detail.value);
    this._maxLength = 10;
    this._pagesCount = parseInt(productsObj.products.length / this._maxLength);
    this._currentPage = 0;
    this.initElm()
  };

  connectedCallback() {
    return this.addEventListener(ENVS.ephSelect, this._hElhSelect)
  };

  disconnectedCallback() {
    return this.removeEventListener(ENVS.ephSelect, this._hElhSelect)
  };

  initElm() {
    let lGridElements = (pageNumber) => {
      let colOne = [];
      let colTwo = [];
      let template = `${`
<div class='col'>
  *
</div>
<div class='col'>
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

    let template = `${`
<elm-pagination page='${this._currentPage}' pages='${this._pagesCount}' target='elm-list-cards'></elm-pagination>
<hr>
<div class='row row-cols-1 row-cols-sm-2 g-4'>
  ${lGridElements(this._currentPage)}
</div>
<hr>
<elm-pagination page='${this._currentPage}' pages='${this._pagesCount}' target='elm-list-cards'></elm-pagination>
    `}`;
    return this.innerHTML = template
  };

  select(value) {
    this._currentPage = value;
    return this.initElm()
  }
}