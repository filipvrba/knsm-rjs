import '../css/bootstrap.min.css'
import '../css/style.css'

import './elements'
import './pages'
import 'tick', './core/tick'

TITLE = document.title
window.TITLE = TITLE

ENVS = {
  eph_select: "eph_select",
  fi_input: "fi_input",
  tick: "tick",
}
window.ENVS = ENVS

tick()
change_page(:main)
