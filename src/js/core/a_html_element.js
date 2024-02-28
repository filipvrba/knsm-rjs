export default class AHTMLElement extends HTMLElement {
  constructor() {
    super();
    this._hHashChange = () => this.enterHash(location.hash.replace("#", ""))
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
  };

  enterHash(hash) {
    let index;

    if (hash.match(/-product$/m)) {
      index = hash.split("-")[0];
      return changePage("product", {index})
    } else if (hash.indexOf("products") > -1) {
      return changePage("products")
    }
  }
}