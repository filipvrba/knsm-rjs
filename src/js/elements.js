import AHTMLElement from "./core/a_html_element";
window.customElements.define("elm-ahtml", AHTMLElement);
import ElmMain from "./elements/elm_main";
window.customElements.define("elm-main", ElmMain);
import ElmHeader from "./elements/elm_header";
window.customElements.define("elm-header", ElmHeader);
import ElmFooter from "./elements/elm_footer";
window.customElements.define("elm-footer", ElmFooter);
import ElmError from "./elements/elm_error";
window.customElements.define("elm-error", ElmError);
import ElmCard from "./elements/elm_card";
window.customElements.define("elm-card", ElmCard);
import ElmListCards from "./elements/elm_list_cards";
window.customElements.define("elm-list-cards", ElmListCards);
import ElmPagination from "./elements/elm_pagination";
window.customElements.define("elm-pagination", ElmPagination);
import ElmCardDetail from "./elements/elm_card_detail";
window.customElements.define("elm-card-detail", ElmCardDetail);
import ElmListPages from "./elements/elm_list_pages";
window.customElements.define("elm-list-pages", ElmListPages);
import ElmListProducts from "./elements/elm_list_products";
window.customElements.define("elm-list-products", ElmListProducts);
import ElmProduct from "./elements/elm_product";
window.customElements.define("elm-product", ElmProduct);
import ElmFilter from "./elements/elm_filter";
window.customElements.define("elm-filter", ElmFilter);
import ElmListPagesFilter from "./elements/elm_list_pages_filter";

window.customElements.define(
  "elm-list-pages-filter",
  ElmListPagesFilter
);

import ElmFilterTick from "./elements/elm_filter_tick";
window.customElements.define("elm-filter-tick", ElmFilterTick)