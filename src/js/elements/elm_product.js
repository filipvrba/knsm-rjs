import AHTMLElement from "../core/a_html_element";
import productsObj from "../../json/products.json";

export default class ElmProduct extends AHTMLElement {
  constructor() {
    super();
    this._index = parseInt(this.getAttribute("index"));
    this._values = productsObj.products[this._index];
    this.initElm()
  };

  title() {
    return `${this.name()} | ${TITLE}`
  };

  initElm() {
    let template = `${`
<div class='container py-5'>
  <elm-header></elm-header>
    <main>
      <div class='row'>
        <div class='col-md-6'>
          <img src='${this.imageUrl()}' class='img-fluid fix-img' alt='Obrázek produktu'>
        </div>
        <div class='col-md-6'>
          <h2 class='mt-3'>${this.name()}</h2>
          <p>${this.category()}</p>
        </div>
      </div>
      <div class='row mt-3'>
        <div class='col-md-12'>
          <br>
          ${this.variants()}
          <br>
          ${this.description()}
        </div>
      </div>
    </main>
  <elm-footer></elm-footer>
</div>
    `}`;
    return this.innerHTML = template
  };

  name() {
    return this._values.name
  };

  description() {
    if (this._values.description) {
      return `${`\n      <h3>Popis</h3>\n      <p>${this._values.description.replaceAll(
        "\r\n",
        "<br>"
      )}</p>\n      `}`
    } else {
      return ""
    }
  };

  price() {
    return "Cena: " + this._values.variants[0][1]
  };

  availability() {
    return "Dostupnost: " + this._values.variants[0][2]
  };

  category() {
    return this._values.category.join(" - ")
  };

  imageUrl() {
    return this._values.image === "http://www.konopneseminka.cz" ? "no_image.jpg" : "/imgs/" + this._values.image.split("/")[this._values.image.split("/").length - 1]
  };

  variants() {
    let template = `${`
<h3>Balení</h3>
<table class='table'>
  <tbody>
    *
  </tbody>
</table>
    `}`;
    let trs = [];

    for (let variant of this._values.variants) {
      trs.push(`${`
<tr>
  <td>${variant[0]}</td>
  <td style='text-align: center;'>${variant[1]}</td>
  <td style='text-align: right;'>${variant[2]}</td>
</tr>
      `}`)
    };

    return template.replace("*", trs.join(""))
  }
}