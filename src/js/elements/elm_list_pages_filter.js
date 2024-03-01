import ElmListPages from "./elm_list_pages";

export default class ElmListPagesFilter extends ElmListPages {
  constructor() {
    super();
    this._hFiInput = d => this.filter(d.detail.value);
    this._filterValue = this.getFilterValue()
  };

  getFilterValue() {
    let value = localStorage.getItem("filter_value");

    if (value) {
      return value
    } else {
      return ""
    }
  };

  connectedCallback() {
    super.connectedCallback();
    return this.addEventListener(ENVS.fiInput, this._hFiInput)
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    return this.removeEventListener(ENVS.fiInput, this._hFiInput)
  };

  getTarget() {
    return "elm-list-pages-filter"
  };

  getTemplate() {
    return `${`
    <elm-filter-tick value='${this._filterValue}' target='${this.getTarget()}'></elm-filter-tick>
    <br>
    ${super.getTemplate()}
    `}`
  };

  filter(value) {
    this._filterValue = value;
    localStorage.setItem("filter_value", this._filterValue);
    let event = new CustomEvent(ENVS.ephSelect, {detail: {value: 0}});
    return document.querySelector(this.getTarget()).dispatchEvent(event)
  }
}