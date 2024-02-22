import '../css/bootstrap.min.css'
import '../css/style.css'

import './elements'
import './pages'

TITLE = document.title
window.TITLE = TITLE

document.querySelector('#app').innerHTML = get_page(:main)
