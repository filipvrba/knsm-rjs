import "../css/bootstrap.min.css";
import "../css/style.css";
import "./elements";
import "./pages";
import tick from "./core/tick";
const TITLE = document.title;
window.TITLE = TITLE;

const ENVS = {
  ephSelect: "eph_select",
  fiInput: "fi_input",
  tick: "tick"
};

window.ENVS = ENVS;
tick();
changePage("main")