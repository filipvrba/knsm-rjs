import 'productsObj', '../../json/products.json'

export default class ElmListCards < HTMLElement
  def initialize
    super

    @max_length  = 10
    @pages_count = (products_obj.products.length / @max_length).to_i
    @current_page = 0
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    l_grid_elements = lambda do |page_number|
      col_one = []
      col_two = []
      template = """
<div class='col-sm-6 mb-3 mb-sm-0'>
  *
</div>
<div class='col-sm-6'>
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
<div class='row'>
  #{l_grid_elements(@current_page)}
</div>
    """

    self.innerHTML = template
  end
end















