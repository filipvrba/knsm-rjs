import 'productsObj', '../../json/products.json'

export default class ElmCard < HTMLElement
  def initialize
    super

    @id = self.get_attribute('id')
    @values = products_obj.products[@id]
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
  <div class='card'>
    <img src='#{image_url()}' class='card-img-top fix-img' alt='Náhled produktu'>
    <div class='card-body'>
      <h5 class='card-title'>#{name()}</h5>
      <p class='card-text'>#{description()}</p>
      <p class='card-text'><small class='text-muted'>#{category()}</small></p>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>#{price()}</li>
      <li class='list-group-item'>#{availability()}</li>
    </ul>
    <div class='card-body'>
      <a href='#' class='card-link btn btn-primary'>Zobrazit produkt</a>
    </div>
  </div>
    """

    self.innerHTML = template
  end

  def image_url()
    @values.image
  end

  def name()
    @values.name
  end

  def description()
    @values.description
  end

  def price()
    "Cena: " + @values.variants[0][1]
  end

  def availability()
    "Dostupnost: " + @values.variants[0][2]
  end

  def category()
    @values.category.join(' - ')
  end
end







