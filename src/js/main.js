import "../css/bootstrap.min.css";
import "../css/style.css";
import "./elements";
import "./pages";
const TITLE = document.title;
window.TITLE = TITLE;
document.querySelector("#app").innerHTML = getPage("main")