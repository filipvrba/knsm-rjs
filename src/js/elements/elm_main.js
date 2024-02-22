import AHTMLElement from "../core/a_html_element";

export default class ElmMain extends AHTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  connectedCallback() {
    return super.connectedCallback()
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`
    <div class='container py-5'>
      <elm-header></elm-header>
        <main>
          
        </main>
      <elm-footer></elm-footer>
    </div>
    `}`;
    return this.innerHTML = template
  }
}