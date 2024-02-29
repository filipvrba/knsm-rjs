export default class AHTMLElement extends HTMLElement {
  constructor() {
    super();
    this._hHashChange = () => this.enterHash(location.hash.replace("#", ""))
  };

  connectedCallback() {
    document.title = this.title();
    window.addEventListener("hashchange", this._hHashChange);
    return this.initElm()
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
    } else if (hash.indexOf("products") > -1 || hash === "") {
      return changePage("products")
    }
  };

  initElm() {
    return this._hHashChange()
  }
}