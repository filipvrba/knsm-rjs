function getPage(name) {
  let page = "<elm-error code='404'></elm-error>";

  switch (name) {
  case "main":
    page = "<elm-main></elm-main>"
  };

  return page
};

window.getPage = getPage