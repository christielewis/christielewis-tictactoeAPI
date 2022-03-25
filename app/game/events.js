// const { FALSE } = require('node-sass')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

const selectedSq = function(e) {
    e.preventDefault()

    let targetSq = e.target
    if(targetSq.className !== "box" || targetSq.innerText !== "") {
        return
    }
    mark(targetSq)
    // console.log('selectedSq')
    // gameUi.onMark(targetSq)
    gameUi.onWin()
    gameUi.onDraw()
}

// let turn = true
let num = 0
const mark = function(sq) {
    if(num % 2 === 0) {
        sq.innerText = "X"
    } else {
        sq.innerText = "O"
    }
    num++
    // console.log(num)
    gameUi.onWin()
    gameUi.onDraw()
}

module.exports = {
    mark,
    selectedSq
}