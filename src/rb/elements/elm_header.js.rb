export default class ElmHeader < HTMLElement
  TITLE = "Konopná Semínka"
  
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
    <header>
        <div class='pricing-header p-3 pb-md-4 mx-auto text-center'>
          <a onclick='change_page(\"main\")'>
            <h1 class='display-4 fw-normal'>#{TITLE}</h1>
          </a>
        </div>
      </header>
    """

    self.innerHTML = template
  end
end