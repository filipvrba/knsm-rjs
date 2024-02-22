export default class AHTMLElement extends HTMLElement {
  constructor() {
    super()
  };

  connectedCallback() {
    return document.title = this.title()
  };

  title() {
    return TITLE
  }
}