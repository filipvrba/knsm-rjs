import AHTMLElement from "../core/a_html_element";

export default class ElmMain extends AHTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  initElm() {
    let template = `${`
    <div class='container py-5'>
      <elm-header></elm-header>
        <main>
          <elm-list-products></elm-list-products>
        </main>
      <elm-footer></elm-footer>
    </div>
    `}`;
    return this.innerHTML = template
  }
}