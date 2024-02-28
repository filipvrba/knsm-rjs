import productsObj from "../../json/products.json";
import ElmListPages from "./elm_list_pages";

export default class ElmListCards extends ElmListPages {
  constructor() {
    super()
  };

  pagesCount() {
    return parseInt(productsObj.products.length / this._maxLength)
  };

  initSubelm(currentPage) {
    let colOne = [];
    let colTwo = [];
    let template = `${`
<div class='col'>
  *
</div>
<div class='col'>
  **
</div>
    `}`;
    let currentEndId = currentPage * this._maxLength;

    for (let i = currentEndId; i < currentEndId + this._maxLength; i++) {
      let isLeft = i % 2 === 0;

      if (isLeft) {
        colOne.push(`<elm-card id='${i}'></elm-card>`)
      } else {
        colTwo.push(`<elm-card id='${i}'></elm-card>`)
      }
    };

    return template.replace("*", colOne.join("<br>")).replace(
      "**",
      colTwo.join("<br>")
    )
  }
}