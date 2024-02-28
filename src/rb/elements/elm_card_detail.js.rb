import 'AHTMLElement', '../core/a_html_element'

export default class ElmCardDetail < AHTMLElement
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
    """

    self.innerHTML = template
  end
end