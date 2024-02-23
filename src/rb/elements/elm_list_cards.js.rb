import 'productsObj', '../../json/products.json'

export default class ElmListCards < HTMLElement
  def initialize
    super

    @h_elh_select = lambda { |d| select(d.detail.value)}

    @max_length  = 10
    @pages_count = (products_obj.products.length / @max_length).to_i
    @current_page = 0
    
    init_elm()
  end

  def connectedCallback()
    self.add_event_listener(ENVS[:eph_select], @h_elh_select)
  end

  def disconnectedCallback()
    self.remove_event_listener(ENVS[:eph_select], @h_elh_select)
  end

  def init_elm()
    l_grid_elements = lambda do |page_number|
      col_one = []
      col_two = []
      template = """
<div class='col'>
  *
</div>
<div class='col'>
  **
</div>
      """

      current_end_id = page_number * @max_length
      (current_end_id...(current_end_id + @max_length)).each do |i|
        is_left = i % 2 == 0
        if is_left
          col_one << "<elm-card id='#{i}'></elm-card>"
        else
          col_two << "<elm-card id='#{i}'></elm-card>"
        end
      end

      template.sub('*', col_one.join('<br>'))
        .sub('**', col_two.join('<br>'))
    end
    
    template = """
<elm-pagination page='#{@current_page}' pages='#{@pages_count}' target='elm-list-cards'></elm-pagination>
<hr>
<div class='row row-cols-1 row-cols-sm-2 g-4'>
  #{l_grid_elements(@current_page)}
</div>
<hr>
<elm-pagination page='#{@current_page}' pages='#{@pages_count}' target='elm-list-cards'></elm-pagination>
    """

    self.innerHTML = template
  end

  def select(value)
    @current_page = value
    init_elm()
  end
end















