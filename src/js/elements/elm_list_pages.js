export default class ElmListPages extends HTMLElement {
  constructor() {
    super();
    this._hElhSelect = d => this.select(d.detail.value);
    this._currentPage = localStorage.getItem("current_page")
  };

  connectedCallback() {
    this.addEventListener(ENVS.ephSelect, this._hElhSelect);
    return this.initElm()
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

  getTemplate() {
    return `${`
<div id='pages_subelm' class='row row-cols-1 row-cols-sm-2 g-4'>
  ${this.initSubelm(this._currentPage)}
</div>
<hr>
<div id='pages_pagination'>
  ${this.getElmPagination()}
</div>
    `}`
  };

  initElm() {
    return this.innerHTML = this.getTemplate()
  };

  initSubelm(currentPage) {
    return null
  };

  getElmPagination() {
    return `<elm-pagination page='${this._currentPage}' pages='${this.pagesCount()}' target='${this.getTarget()}'></elm-pagination>`
  };

  select(value) {
    this._currentPage = value;
    localStorage.setItem("current_page", this._currentPage);
    document.getElementById("pages_pagination").innerHTML = this.getElmPagination();
    return document.getElementById("pages_subelm").innerHTML = this.initSubelm(this._currentPage)
  }
}