export default class ElmFilter < HTMLElement
  def initialize
    super

    @h_fi_input = lambda { fi_input(@floating_input.value) }
    
    @target = self.get_attribute('target')
    @value = self.get_attribute('value')
    
    init_elm()

    @floating_input = document.get_element_by_id('floatingInput')

    badges(@floating_input.value != "")
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

        <span id='filter-badges' class='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'>
          <span class='visually-hidden'>New alerts</span>
        </span>
        
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
    badges(value != "")
    event = new CustomEvent(ENVS[:fi_input], {
      detail: {
        value: value
      }
    })

    document.querySelector(@target).dispatch_event(event)
  end

  def badges(is_active)
    filter_budges = document.get_element_by_id('filter-badges')

    unless is_active
      filter_budges.class_list.add('visually-hidden')
    else
      filter_budges.class_list.remove('visually-hidden')
    end
  end
end















