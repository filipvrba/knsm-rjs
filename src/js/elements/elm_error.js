import AHTMLElement from "../core/a_html_element";

export default class ElmError extends AHTMLElement {
  constructor() {
    super();
    this._code = this.getAttribute("code");
    this.initElm()
  };

  title() {
    return `${this._code} | ` + TITLE
  };

  initElm() {
    let template = `${`
    <div class='container py-5'>
      <main>
        <div class='container row text-center align-items-center'>
          <h1>${this._code}</h1>
          <p class='lead'>${this.getMessage(this._code)}</p>
        </div>
      </main>
    </div>
    `}`;
    return this.innerHTML = template
  };

  getMessage(code) {
    switch (code) {
    case "404":
      return "page not found"
    }
  }
}