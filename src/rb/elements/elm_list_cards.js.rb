import 'productsObj', '../../json/products.json'
import 'ElmListPages', './elm_list_pages'

export default class ElmListCards < ElmListPages
  def initialize
    super
  end

  def pages_count()
    (products_obj.products.length / @max_length).to_i
  end

  def init_subelm(current_page)
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

    current_end_id = current_page * @max_length
    (current_end_id...(current_end_id + @max_length)).each do |i|
      is_left = i % 2 == 0
      if is_left
        col_one << "<elm-card id='#{i}'></elm-card>"
      else
        col_two << "<elm-card id='#{i}'></elm-card>"
      end
    end

    return template.sub('*', col_one.join('<br>'))
           .sub('**', col_two.join('<br>'))
  end
end















