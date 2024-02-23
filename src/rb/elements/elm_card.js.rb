export default class ElmCard < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
<div class='container mt-5'>
  <div class='card'>
    <img src='https://via.placeholder.com/300' class='card-img-top' alt='Náhled produktu'>
    <div class='card-body'>
      <h5 class='card-title'>Název produktu</h5>
      <p class='card-text'>Popis produktu zde. Můžete uvést další informace o produktu a jeho vlastnostech.</p>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>Cena: 100 Kč</li>
      <li class='list-group-item'>Dostupnost: Skladem</li>
    </ul>
    <div class='card-body'>
      <a href='#' class='card-link btn btn-primary'>Koupit</a>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end
end