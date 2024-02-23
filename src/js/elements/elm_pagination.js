export default class ElmPagination extends HTMLElement {
  constructor() {
    super();
    this._page = this.getAttribute("page");
    this._pages = this.getAttribute("pages");
    this._target = this.getAttribute("target");
    this._uniq = Math.random().toString(16).slice(2);
    this.initElm();
    window.paginationChange = this.paginationChange.bind(this);
    window.paginationPrevious = this.paginationPrevious.bind(this);
    window.paginationNext = this.paginationNext.bind(this)
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let lSelect = () => {
      let result = "";

      for (let i = 0; i <= this._pages; i++) {
        if (i === parseInt(this._page)) {
          result += `<option value='${i}' selected>${i}</option>\n`
        } else {
          result += `<option value='${i}'>${i}</option>\n`
        }
      };

      return result
    };

    let template = `${`
    <div>
      <nav aria-label='Standard pagination' class='d-flex justify-content-center'>
        <ul class='pagination'>
          <li class='page-item list-inline-item'>
          <button type='button' class='btn btn-light' onclick='paginationPrevious("${this._uniq}")'>Previous</button>
          </li>
          <li class='page-item list-inline-item'>
            <select class='form-select' id='pagination-select-${this._uniq}' onchange='paginationChange("${this._uniq}")'>
              ${lSelect()}
            </select>
          </li>
          <li class='page-item list-inline-item'>
            <button type='button' class='btn btn-light' onclick='paginationNext("${this._uniq}")'>Next</button>
          </li>
        </ul>
      </nav>
    </div>
    `}`;
    return this.innerHTML = template
  };

  paginationChange(uniq) {
    let paginationSelect = document.getElementById(`pagination-select-${uniq}`);
    let event = new CustomEvent(ENVS.ephSelect, {detail: {value: parseInt(paginationSelect.value)}});
    return document.querySelector(this._target).dispatchEvent(event)
  };

  paginationPrevious(uniq) {
    let paginationSelect = document.getElementById(`pagination-select-${uniq}`);
    let value = parseInt(paginationSelect.value) - 1;

    if (value > -1) {
      paginationSelect.value = value;
      return paginationSelect.onchange()
    }
  };

  paginationNext(uniq) {
    let paginationSelect = document.getElementById(`pagination-select-${uniq}`);
    let value = parseInt(paginationSelect.value) + 1;

    if (value < paginationSelect.length) {
      paginationSelect.value = value;
      return paginationSelect.onchange()
    }
  }
}