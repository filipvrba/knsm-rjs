export default class AHTMLElement < HTMLElement
  def initialize
    super

    @h_hash_change = lambda { enter_hash() }
  end

  def connectedCallback()
    document.title = title()
    window.add_event_listener('hashchange', @h_hash_change) 
  end

   def disconnectedCallback()
    window.remove_event_listener('hashchange', @h_hash_change) 
  end
  
  def title()
    TITLE
  end
end