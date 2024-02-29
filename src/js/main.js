import "../css/bootstrap.min.css";
import "../css/style.css";
import "./elements";
import "./pages";
const TITLE = document.title;
window.TITLE = TITLE;
const ENVS = {ephSelect: "eph_select"};
window.ENVS = ENVS;
changePage("main")