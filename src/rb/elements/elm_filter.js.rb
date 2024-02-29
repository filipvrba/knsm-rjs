export default class ElmFilter < HTMLElement
  def initialize
    super

    @h_fi_input = lambda { fi_input(@floating_input.value) }
    
    @target = self.get_attribute('target')
    @value = self.get_attribute('value')
    
    init_elm()

    @floating_input = document.get_element_by_id('floatingInput')
  end

  def connectedCallback()
    @floating_input.add_event_listener('input', @h_fi_input)
  end

  def disconnectedCallback()
    @floating_input.remove_event_listener('input', @h_fi_input)
  end

  def init_elm()
    template = """
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
          <input type='text' class='form-control' id='floatingInput' placeholder='value' value='#{@value}'>
          <label for='floatingInput'>Value</label>
        </div>
      </div>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end

  def fi_input(value)
    event = new CustomEvent(ENVS[:fi_input], {
      detail: {
        value: value
      }
    })

    document.querySelector(@target).dispatch_event(event)
  end
end















