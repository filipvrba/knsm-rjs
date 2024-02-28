import productsObj from "../../json/products.json";
import ElmListPages from "./elm_list_pages";

export default class ElmListProducts extends ElmListPages {
  constructor() {
    super()
  };

  maxLength() {
    return 30
  };

  pagesCount() {
    return parseInt(productsObj.products.length / this.maxLength())
  };

  getTarget() {
    return "elm-list-products"
  };

  initSubelm(currentPage) {
    let template = `${`
<table class='table table-striped'>
  <thead>
    <tr>
      <th scope='col'></th>
      <th scope='col'>Produkt</th>
      <th scope='col'>Cena</th>
      <th scope='col'>Kategorie</th>
    </tr>
  </thead>
  <tbody>
    *
  </tbody>
</table>
    `}`;
    let trs = [];
    let currentEndId = currentPage * this.maxLength();

    for (let i = currentEndId; i < currentEndId + this.maxLength(); i++) {
      let product = productsObj.products[i];

      if (product) {
        let locationProduct = `${i}-product`;
        trs.push(`${`
<tr onclick="window.location='#${locationProduct}'">
  <th scope='row'>${i}</th>
  <td>${product.name}</td>
  <td>od ${product.variants[0][1]}</td>
  <td>${product.category[0]}</td>
</tr>
        `}`)
      }
    };

    return template.replace("*", trs.join("<br>"))
  }
}