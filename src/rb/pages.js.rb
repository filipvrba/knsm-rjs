def get_page(name)
  page = "<elm-error code='404'></elm-error>"
  case name
  when :main
    page = "<elm-main></elm-main>"
  when :card_detail
    page = "<elm-card-detail></elm-card-detail>"
  end
  return page
end
window.get_page = get_page