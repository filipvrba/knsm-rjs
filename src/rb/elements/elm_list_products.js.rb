import 'productsObj', '../../json/products.json'
import 'ElmListPages', './elm_list_pages'

export default class ElmListProducts < ElmListPages
  def initialize
    super
  end

  def max_length()
    return 30
  end

  def pages_count()
    (products_obj.products.length / max_length()).to_i
  end

  def init_subelm(current_page)
    template = """
<table class='table table-striped'>
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>Name</th>
      <th scope='col'>Price</th>
      <th scope='col'>Category</th>
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
      product = products_obj.products[i]

      if product
        location_product = "#{i}-product"
        trs << """
<tr onclick=\"window.location='##{location_product}'\">
  <th scope='row'>#{i}</th>
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