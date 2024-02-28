function getPage(name, options={}) {
  let page = "<elm-error code='404'></elm-error>";

  switch (name) {
  case "products":
    page = "<elm-main></elm-main>";
    break;

  case "cardDetail":
    page = "<elm-card-detail></elm-card-detail>";
    break;

  case "product":
    page = `<elm-product index=${options.index}></elm-product>`
  };

  return page
};

window.getPage = getPage;

function changePage(name, options={}) {
  return document.querySelector("#app").innerHTML = getPage(
    name,
    options
  )
};

window.changePage = changePage