// const { FALSE } = require('node-sass')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

const selectedSq = function(e) {
    e.preventDefault()

    let targetSq = e.target
    if(targetSq.className !== "sq" || targetSq.innerText !== "") {
        return
    }
    mark(targetSq)
}

let num = 0
const mark = function(sq) {
    if(num % 2 === 0) {
        sq.innerText = "X"
        // if(num === 0) {
        //     sq.innerText = "X"
        // }
    } else {
        sq.innerText = "O"
    }
    num++
    
    gameUi.onWin()
    gameUi.onDraw()
}

const onNewGame = function() {

    num = 0

    $('#sq-0').text('')
    $('#sq-1').text('')
    $('#sq-2').text('')
    $('#sq-3').text('')
    $('#sq-4').text('')
    $('#sq-5').text('')
    $('#sq-6').text('')
    $('#sq-7').text('')
    $('#sq-8').text('')

    $('.game-status').text('')
    $('#game-grid').on('click', selectedSq)
}

module.exports = {
    mark,
    selectedSq,
    onNewGame
}