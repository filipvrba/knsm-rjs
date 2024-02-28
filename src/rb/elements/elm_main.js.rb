import 'AHTMLElement', '../core/a_html_element'

export default class ElmMain < AHTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connectedCallback()
    super
  end

  def disconnectedCallback()
  end

  def init_elm()
    template = """
    <div class='container py-5'>
      <elm-header></elm-header>
        <main>
          <elm-list-products></elm-list-products>
        </main>
      <elm-footer></elm-footer>
    </div>
    """

    self.innerHTML = template
  end
end