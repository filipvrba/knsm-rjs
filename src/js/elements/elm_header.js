export default class ElmHeader extends HTMLElement {
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
    let template = `${`
    <header>
      <div class='pricing-header p-3 pb-md-4 mx-auto text-center'>
        <a href='#products'>
          <h1 class='display-4 fw-normal'>${ElmHeader.TITLE}</h1>
        </a>
      </div>
    </header>
    `}`;
    return this.innerHTML = template
  }
};

ElmHeader.TITLE = "Konopná Semínka"