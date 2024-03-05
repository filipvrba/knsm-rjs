import productsObj from "../../json/products.json";
import ElmListPagesFilter from "./elm_list_pages_filter";

export default class ElmListProducts extends ElmListPagesFilter {
  constructor() {
    super()
  };

  maxLength() {
    return 30
  };

  getProducts() {
    let result = [];
    let index = 0;

    for (let product of productsObj.products) {
      if (product.name.toLowerCase().match(new RegExp(this._filterValue)) || product.category.join(" ").toLowerCase().match(new RegExp(this._filterValue))) {
        product.index = index;
        result.push(product)
      };

      index++
    };

    return result
  };

  pagesCount() {
    return parseInt(this.getProducts().length / this.maxLength())
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
      let product = this.getProducts()[i];

      if (product) {
        let locationProduct = `${product.index}-product`;
        trs.push(`${`
<tr onclick="window.location='#${locationProduct}'">
  <th scope='row'>${product.index}</th>
  <td>${product.name}</td>
  <td>od ${product.variants[0][1]}</td>
  <td>${product.category[0]}</td>
</tr>
        `}`)
      }
    };

    return template.replace("*", trs.join(""))
  }
}