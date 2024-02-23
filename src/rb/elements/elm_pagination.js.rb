export default class ElmPagination < HTMLElement
  def initialize
    super

    @page = self.get_attribute('page')
    @pages = self.get_attribute('pages')
    @target = self.get_attribute('target')
    @uniq = Math.random().to_s(16).slice(2)
    
    init_elm()

    window.pagination_change = pagination_change
    window.pagination_previous = pagination_previous
    window.pagination_next = pagination_next
  end

  def connectedCallback()
  end

  def disconnectedCallback()
  end

  def init_elm()
    l_select = lambda do
      result = ""
      (0..@pages).each do |i|
        if i == @page.to_i
          result += "<option value='#{i}' selected>#{i}</option>\n"
        else
          result += "<option value='#{i}'>#{i}</option>\n"
          end
      end
      return result
    end
    
    template = """
    <div>
      <nav aria-label='Standard pagination' class='d-flex justify-content-center'>
        <ul class='pagination'>
          <li class='page-item list-inline-item'>
          <button type='button' class='btn btn-light' onclick='paginationPrevious(\"#{@uniq}\")'>Previous</button>
          </li>
          <li class='page-item list-inline-item'>
            <select class='form-select' id='pagination-select-#{@uniq}' onchange='paginationChange(\"#{@uniq}\")'>
              #{l_select()}
            </select>
          </li>
          <li class='page-item list-inline-item'>
            <button type='button' class='btn btn-light' onclick='paginationNext(\"#{@uniq}\")'>Next</button>
          </li>
        </ul>
      </nav>
    </div>
    """

    self.innerHTML = template
  end

  def pagination_change(uniq)
    pagination_select = document.get_element_by_id("pagination-select-#{uniq}")
    event = new CustomEvent(ENVS[:eph_select], {
      detail: {
        value: parse_int(pagination_select.value)
      }
    })

    document.querySelector(@target).dispatch_event(event)
  end

  def pagination_previous(uniq)
    pagination_select = document.get_element_by_id("pagination-select-#{uniq}")
    value = parseInt(pagination_select.value) - 1
    if value > -1
      pagination_select.value = value
      pagination_select.onchange()
    end
  end

  def pagination_next(uniq)
    pagination_select = document.get_element_by_id("pagination-select-#{uniq}")
    value = parseInt(pagination_select.value) + 1
    if value < pagination_select.length
      pagination_select.value = value
      pagination_select.onchange()
    end
  end
end












