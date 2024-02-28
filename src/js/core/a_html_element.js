export default class AHTMLElement extends HTMLElement {
  constructor() {
    super();
    this._hHashChange = () => enterHash()
  };

  connectedCallback() {
    document.title = this.title();
    return window.addEventListener("hashchange", this._hHashChange)
  };

  disconnectedCallback() {
    return window.removeEventListener("hashchange", this._hHashChange)
  };

  title() {
    return TITLE
  }
}