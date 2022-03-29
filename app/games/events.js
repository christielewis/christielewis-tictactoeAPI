// const { FALSE } = require('node-sass')
const getFormFields = require('../../lib/get-form-fields.js')
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
    } else {
        sq.innerText = "O"
    }
    num++
    
    gameUi.onWin()
    gameUi.onDraw()
}

const onUpdateGame = function(e) {
    e.preventDefault()
    
    const form = e.target
    const data = getFormFields(form)

    gameApi
        .updateGame(data, data.game._id)
        .then((response) => gameUi.onUpdateSuccess(response))
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

    gameApi
        .createGame(data)
        .then((response) => gameUi.onNewGameSuccess(response))
        // .then((response) => {store.game = response.game})
}

module.exports = {
    mark,
    selectedSq,
    onNewGame,
    onUpdateGame
}