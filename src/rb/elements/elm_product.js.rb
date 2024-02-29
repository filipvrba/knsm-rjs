import 'AHTMLElement', '../core/a_html_element'
import 'productsObj', '../../json/products.json'

export default class ElmProduct < AHTMLElement
  def initialize
    super

    @index = self.get_attribute('index').to_i
    @values = products_obj.products[@index]
  end

  def title()
    "#{name()} | #{TITLE}"
  end

  def init_elm()
    template = """
<div class='container py-5'>
  <elm-header></elm-header>
    <main>
      <div class='row'>
        <div class='col-md-6'>
          <img src='#{image_url()}' class='img-fluid fix-img' alt='Obrázek produktu'>
        </div>
        <div class='col-md-6'>
          <h2 class='mt-3'>#{name()}</h2>
          <p>#{category()}</p>
        </div>
      </div>
      <div class='row mt-3'>
        <div class='col-md-12'>
          <br>
          #{variants()}
          <br>
          #{description()}
        </div>
      </div>
    </main>
  <elm-footer></elm-footer>
</div>
    """

    self.innerHTML = template
  end

  def name()
    @values.name
  end

  def description()
    if @values.description
      return """
      <h3>Popis</h3>
      <p>#{@values.description.gsub("\r\n", "<br>")}</p>
      """
    else
      return ""
    end
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

  def image_url()
    unless @values.image == "http://www.konopneseminka.cz"
      "/imgs/" + @values.image.split('/').last
    else
      "no_image.jpg"
    end
  end

  def variants()
    template = """
<h3>Balení</h3>
<table class='table'>
  <tbody>
    *
  </tbody>
</table>
    """
    trs = []
    @values.variants.each do |variant|
      trs << """
<tr>
  <td>#{variant[0]}</td>
  <td style='text-align: center;'>#{variant[1]}</td>
  <td style='text-align: right;'>#{variant[2]}</td>
</tr>
      """
    end

    return template.sub('*', trs.join(''))
  end
end













