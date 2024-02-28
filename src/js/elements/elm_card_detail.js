import AHTMLElement from "../core/a_html_element";

export default class ElmCardDetail extends AHTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`\n    `}`;
    return this.innerHTML = template
  }
}