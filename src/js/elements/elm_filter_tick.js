import ElmFilter from "./elm_filter";

export default class ElmFilterTick extends ElmFilter {
  constructor() {
    super();

    this._hFiInput = () => {
      return this.fiInputTick()
    };

    this._hTick = d => this.tick(d.detail.value);
    this._hSend = null;
    this._time = 0.0;
    this._isActive = false
  };

  connectedCallback() {
    super.connectedCallback();
    return window.addEventListener(ENVS.tick, this._hTick)
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    return window.removeEventListener(ENVS.tick, this._hTick)
  };

  fiInput() {
    return super.fiInput(this._floatingInput.value)
  };

  tick(dt) {
    if (!this._isActive) return;

    if (this._time >= ElmFilterTick.RESPONSE_TIME) {
      if (this._hSend === null) {
        this._hSend = (() => {
          this._isActive = false;
          return this.fiInput()
        })()
      };

      return
    };

    return this._time += dt
  };

  fiInputTick() {
    this._hSend = null;
    this._time = 0.0;
    this._isActive = true;
    return this._isActive
  }
};

ElmFilterTick.RESPONSE_TIME = 0.2