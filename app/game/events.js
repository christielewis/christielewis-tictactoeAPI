const { FALSE } = require('node-sass')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

const mark = function(sq) {
    let num = 0
    // let turn = true

    // if(turn) {
    //     sq.innerText = "X"
    //     turn = false
    // } else {
    //     sq.innerText = "O"
    //     turn = true
    // }

    if(num % 2 === 0) {
        sq.innerText = "X";
    } else {
        sq.innerText = "O"
    }
    num++
    gameUi.onWin()
    gameUi.onDraw()
}

const selectedSq = function(e) {
    e.preventDefault()

    let targetSq = e.target
    if(targetSq.className !== "box" || targetSq.innerText !== "") {
        return
    }
    mark(targetSq)
}

module.exports = {
    mark,
    selectedSq
}