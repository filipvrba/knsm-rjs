import 'AHTMLElement', '../core/a_html_element'

export default class ElmError < AHTMLElement
  def initialize
    super

    @code = self.get_attribute('code')
    
    init_elm()
  end

  def title()
    "#{@code} | " + TITLE
  end

  def init_elm()
    template =  """
    <div class='container py-5'>
      <main>
        <div class='container row text-center align-items-center'>
          <h1>#{@code}</h1>
          <p class='lead'>#{get_message(@code)}</p>
        </div>
      </main>
    </div>
    """

    self.innerHTML = template
  end

  def get_message(code)
    case code
    when '404'
      return 'page not found'
    end
  end
end