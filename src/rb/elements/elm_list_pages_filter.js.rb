import 'ElmListPages', './elm_list_pages'

export default class ElmListPagesFilter < ElmListPages
  def initialize
    super

    @h_fi_input = lambda { |d| filter(d.detail.value) }

    @filter_value = get_filter_value()
  end

  def get_filter_value()
    value = localStorage.get_item("filter_value")
    unless value
      return ""
    else
      return value
    end
  end

  def connectedCallback()
    super
    self.add_event_listener(ENVS[:fi_input], @h_fi_input)
  end

  def disconnectedCallback()
    super
    self.remove_event_listener(ENVS[:fi_input], @h_fi_input)
  end

  def get_target()
    "elm-list-pages-filter"
  end

  def get_template()
    """
    <elm-filter-tick value='#{@filter_value}' target='#{get_target()}'></elm-filter-tick>
    <br>
    #{super}
    """
  end

  def filter(value)
    @filter_value = value
    localStorage.set_item("filter_value", @filter_value);

    event = new CustomEvent(ENVS[:eph_select], {
      detail: {
        value: 0
      }
    })
    document.querySelector(get_target()).dispatch_event(event)
  end
end






