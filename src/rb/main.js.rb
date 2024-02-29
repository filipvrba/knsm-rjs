import '../css/bootstrap.min.css'
import '../css/style.css'

import './elements'
import './pages'

TITLE = document.title
window.TITLE = TITLE

ENVS = {
  eph_select: "eph_select",
  fi_input: "fi_input",
}
window.ENVS = ENVS

change_page(:main)
