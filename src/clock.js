const time = require('moment')

exports.changeTime = () => { 
    var LTS = time().format('LTS')
    console.log(time().format('LTS')) // log it !
    $("#clock").html(`${LTS}`)
} 