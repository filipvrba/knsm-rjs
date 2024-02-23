import productsObj from "../../json/products.json";

export default class ElmCard extends HTMLElement {
  constructor() {
    super();
    this._id = this.getAttribute("id");
    this._values = productsObj.products[this._id];
    this.initElm()
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`
  <div class='card'>
    <img src='${this.imageUrl()}' class='card-img-top fix-img' alt='Náhled produktu'>
    <div class='card-body'>
      <h5 class='card-title'>${this.name()}</h5>
      <p class='card-text'>${this.description()}</p>
      <p class='card-text'><small class='text-muted'>${this.category()}</small></p>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>${this.price()}</li>
      <li class='list-group-item'>${this.availability()}</li>
    </ul>
    <div class='card-body'>
      <a href='#' class='card-link btn btn-primary'>Zobrazit produkt</a>
    </div>
  </div>
    `}`;
    return this.innerHTML = template
  };

  imageUrl() {
    return this._values.image === "http://www.konopneseminka.cz" ? "no_image.jpg" : this._values.image
  };

  name() {
    return this._values.name
  };

  description() {
    return this._values.description
  };

  price() {
    return "Cena: " + this._values.variants[0][1]
  };

  availability() {
    return "Dostupnost: " + this._values.variants[0][2]
  };

  category() {
    return this._values.category.join(" - ")
  }
}