export default class AHTMLElement < HTMLElement
  def initialize
    super
  end

  def connectedCallback()
    document.title = title()
  end
  
  def title()
    TITLE
  end
end