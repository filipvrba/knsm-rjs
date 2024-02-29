export default class ElmFilter extends HTMLElement {
  constructor() {
    super();
    this._hFiInput = () => this.fiInput(this._floatingInput.value);
    this._target = this.getAttribute("target");
    this._value = this.getAttribute("value");
    this.initElm();
    this._floatingInput = document.getElementById("floatingInput")
  };

  connectedCallback() {
    return this._floatingInput.addEventListener("input", this._hFiInput)
  };

  disconnectedCallback() {
    return this._floatingInput.removeEventListener(
      "input",
      this._hFiInput
    )
  };

  initElm() {
    let template = `${`
<div class='accordion' id='accordionFilter'>
  <div class='accordion-item'>
    <h2 class='accordion-header'>
      <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFilter' aria-expanded='false' aria-controls='collapseFilter'>
        Filter
      </button>
    </h2>
    <div id='collapseFilter' class='accordion-collapse collapse' data-bs-parent='#accordionFilter'>
      <div class='accordion-body'>
        <div class='form-floating mb-3'>
          <input type='text' class='form-control' id='floatingInput' placeholder='value' value='${this._value}'>
          <label for='floatingInput'>Value</label>
        </div>
      </div>
    </div>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  };

  fiInput(value) {
    let event = new CustomEvent(ENVS.fiInput, {detail: {value}});
    return document.querySelector(this._target).dispatchEvent(event)
  }
}