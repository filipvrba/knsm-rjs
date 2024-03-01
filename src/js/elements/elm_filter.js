export default class ElmFilter extends HTMLElement {
  constructor() {
    super();
    this._hFiInput = () => this.fiInput(this._floatingInput.value);
    this._target = this.getAttribute("target");
    this._value = this.getAttribute("value");
    this.initElm();
    this._floatingInput = document.getElementById("floatingInput");
    this.badges(this._floatingInput.value !== "")
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

        <span id='filter-badges' class='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'>
          <span class='visually-hidden'>New alerts</span>
        </span>
        
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
    this.badges(value !== "");
    let event = new CustomEvent(ENVS.fiInput, {detail: {value}});
    return document.querySelector(this._target).dispatchEvent(event)
  };

  badges(isActive) {
    let filterBudges = document.getElementById("filter-badges");
    return isActive ? filterBudges.classList.remove("visually-hidden") : filterBudges.classList.add("visually-hidden")
  }
}