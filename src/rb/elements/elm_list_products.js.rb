import 'productsObj', '../../json/products.json'
import 'ElmListPagesFilter', './elm_list_pages_filter'

export default class ElmListProducts < ElmListPagesFilter
  def initialize
    super
  end

  def max_length()
    return 30
  end

  def get_products()
    result = []
    index = 0
    products_obj.products.each do |product|
      if product.name.downcase().match(/#{@filter_value}/)
        product[:index] = index 
        result << product
      end
      index += 1
    end
    return result
  end

  def pages_count()
    (get_products().length / max_length()).to_i
  end

  def get_target()
    return 'elm-list-products'
  end

  def init_subelm(current_page)
    template = """
<table class='table table-striped'>
  <thead>
    <tr>
      <th scope='col'></th>
      <th scope='col'>Produkt</th>
      <th scope='col'>Cena</th>
      <th scope='col'>Kategorie</th>
    </tr>
  </thead>
  <tbody>
    *
  </tbody>
</table>
    """
    trs = []
    current_end_id = current_page * max_length()
    (current_end_id...(current_end_id + max_length())).each do |i|
      product = get_products()[i]

      if product
        location_product = "#{product.index}-product"
        trs << """
<tr onclick=\"window.location='##{location_product}'\">
  <th scope='row'>#{product.index}</th>
  <td>#{product.name}</td>
  <td>od #{product.variants[0][1]}</td>
  <td>#{product.category[0]}</td>
</tr>
        """
      end
    end
    

    return template.sub('*', trs.join('<br>'))
  end
end