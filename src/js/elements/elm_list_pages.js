export default class ElmListPages extends HTMLElement {
  constructor() {
    super();
    this._hElhSelect = d => this.select(d.detail.value);
    this._maxLength = 10;
    this._currentPage = 0;
    this.initElm()
  };

  connectedCallback() {
    return this.addEventListener(ENVS.ephSelect, this._hElhSelect)
  };

  disconnectedCallback() {
    return this.removeEventListener(ENVS.ephSelect, this._hElhSelect)
  };

  pagesCount() {
    return 0
  };

  initElm() {
    let template = `${`
<elm-pagination page='${this._currentPage}' pages='${this.pagesCount()}' target='elm-list-cards'></elm-pagination>
<hr>
<div class='row row-cols-1 row-cols-sm-2 g-4'>
  ${this.initSubelm(this._currentPage)}
</div>
<hr>
<elm-pagination page='${this._currentPage}' pages='${this.pagesCount()}' target='elm-list-cards'></elm-pagination>
    `}`;
    return this.innerHTML = template
  };

  initSubelm(currentPage) {
    return null
  };

  select(value) {
    this._currentPage = value;
    return this.initElm()
  }
}