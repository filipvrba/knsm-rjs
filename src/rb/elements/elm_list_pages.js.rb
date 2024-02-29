export default class ElmListPages < HTMLElement
  def initialize
    super

    @h_elh_select = lambda { |d| select(d.detail.value)}

    @current_page = localStorage.getItem("current_page")
  end

  def connectedCallback()
    self.add_event_listener(ENVS[:eph_select], @h_elh_select)

    init_elm()
  end

  def disconnectedCallback()
    self.remove_event_listener(ENVS[:eph_select], @h_elh_select)
  end

  def pages_count()
    return 0
  end

  def get_target()
    return 'elm-list-pages'
  end

  def get_template()
    """
<div id='pages_subelm' class='row row-cols-1 row-cols-sm-2 g-4'>
  #{init_subelm(@current_page)}
</div>
<hr>
<div id='pages_pagination'>
  #{get_elm_pagination()}
</div>
    """
  end
  
  def init_elm()
    self.innerHTML = get_template()
  end

  def init_subelm(current_page)
    return nil
  end

  def get_elm_pagination()
    "<elm-pagination page='#{@current_page}' pages='#{pages_count()}' target='#{get_target()}'></elm-pagination>"
  end
  
  def select(value)
    @current_page = value
    localStorage.set_item("current_page", @current_page);
    
    document.get_element_by_id('pages_pagination').innerHTML = get_elm_pagination()
    document.get_element_by_id('pages_subelm').innerHTML = init_subelm(@current_page)
  end

end