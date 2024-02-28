export default class ElmListPages < HTMLElement
  def initialize
    super

    @h_elh_select = lambda { |d| select(d.detail.value)}

    @max_length  = 10
    @current_page = 0
    
    init_elm()
  end

  def connectedCallback()
    self.add_event_listener(ENVS[:eph_select], @h_elh_select)
  end

  def disconnectedCallback()
    self.remove_event_listener(ENVS[:eph_select], @h_elh_select)
  end

  def pages_count()
    return 0
  end

  def init_elm()
    template = """
<elm-pagination page='#{@current_page}' pages='#{pages_count()}' target='elm-list-cards'></elm-pagination>
<hr>
<div class='row row-cols-1 row-cols-sm-2 g-4'>
  #{init_subelm(@current_page)}
</div>
<hr>
<elm-pagination page='#{@current_page}' pages='#{pages_count()}' target='elm-list-cards'></elm-pagination>
    """

    self.innerHTML = template
  end

  def init_subelm(current_page)
    return nil
  end

  def select(value)
    @current_page = value
    init_elm()
  end
end