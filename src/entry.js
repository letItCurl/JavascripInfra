import 'bootstrap'
//import $ from 'jquery' // jquery is presente everywhere !
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import './style.css'
import clock from './clock'

import './img/background.jpg'

console.log('hello there')
$("#clock").text("SHOW TIME")
setInterval(clock.changeTime, 1000);