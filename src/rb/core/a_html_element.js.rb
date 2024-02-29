export default class AHTMLElement < HTMLElement
  def initialize
    super

    @h_hash_change = lambda { enter_hash(location.hash.replace('#', '')) }
  end

  def connected_callback()
    document.title = title()
    window.add_event_listener('hashchange', @h_hash_change)

    init_elm()
  end

  def disconnected_callback()
    window.remove_event_listener('hashchange', @h_hash_change) 
  end
  
  def title()
    TITLE
  end

  def enter_hash(hash)
    if hash.match(/-product$/)
      index = hash.split('-')[0]
      change_page(:product, {index: index})
    elsif hash.index("products") > -1 or hash == ""
      change_page(:products)
    end
  end

  def init_elm()
    @h_hash_change.call
  end
end