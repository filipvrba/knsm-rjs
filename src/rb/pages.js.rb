def get_page(name, options = {})
  page = "<elm-error code='404'></elm-error>"
  case name
  when :main
    page = "<elm-ahtml></elm-ahtml>"
  when :products
    page = "<elm-main></elm-main>"
  when :card_detail
    page = "<elm-card-detail></elm-card-detail>"
  when :product
    page = "<elm-product index=#{options[:index]}></elm-product>"
  end
  return page
end
window.get_page = get_page

def change_page(name, options = {})
  document.querySelector('#app').innerHTML = get_page(name, options)
end
window.change_page = change_page