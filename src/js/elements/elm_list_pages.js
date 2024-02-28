export default class ElmListPages extends HTMLElement {
  constructor() {
    super();
    this._hElhSelect = d => this.select(d.detail.value);
    this._currentPage = localStorage.getItem("current_page");
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

  getTarget() {
    return "elm-list-pages"
  };

  initElm() {
    let template = `${`
<div class='row row-cols-1 row-cols-sm-2 g-4'>
  ${this.initSubelm(this._currentPage)}
</div>
<hr>
<elm-pagination page='${this._currentPage}' pages='${this.pagesCount()}' target='${this.getTarget()}'></elm-pagination>
    `}`;
    return this.innerHTML = template
  };

  initSubelm(currentPage) {
    return null
  };

  select(value) {
    this._currentPage = value;
    localStorage.setItem("current_page", this._currentPage);
    return this.initElm()
  }
}