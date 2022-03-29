const store = require('../store.js')
const gameEvents = require('./events.js')
// create an array to store moves then iterate through it to see if game is over or not

// let store.game.over = false

const onWin = function() {
    let sq0 = $('#sq-0').text();
    let sq1 = $('#sq-1').text();
    let sq2 = $('#sq-2').text();
    let sq3 = $('#sq-3').text();
    let sq4 = $('#sq-4').text();
    let sq5 = $('#sq-5').text();
    let sq6 = $('#sq-6').text();
    let sq7 = $('#sq-7').text();
    let sq8 = $('#sq-8').text();

    if(sq0 !== "" && sq0 === sq1 && sq0 === sq2) {
        $('.game-status').text(`${sq0} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq0 !== "" && sq0 === sq3 && sq0 === sq6) {
        $('.game-status').text(`${sq0} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq0 !== "" && sq0 === sq4 && sq0 === sq8) {
        $('.game-status').text(`${sq0} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq1 !== "" && sq1 === sq4 && sq1 === sq7) {
        $('.game-status').text(`${sq1} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq2 !== "" && sq2 === sq5 && sq2 === sq8) {
        $('.game-status').text(`${sq2} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq2 !== "" && sq2 === sq4 && sq2 === sq6) {
        $('.game-status').text(`${sq2} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq3 !== "" && sq3 === sq4 && sq3 === sq5) {
        $('.game-status').text(`${sq3} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    } else if(sq6 !== "" && sq6 === sq7 && sq6 === sq8) {
        $('.game-status').text(`${sq6} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        store.game.over = true;
        return;
    }
}

const onDraw = function() {
    let sq0 = $('#sq-0').text();
    let sq1 = $('#sq-1').text();
    let sq2 = $('#sq-2').text();
    let sq3 = $('#sq-3').text();
    let sq4 = $('#sq-4').text();
    let sq5 = $('#sq-5').text();
    let sq6 = $('#sq-6').text();
    let sq7 = $('#sq-7').text();
    let sq8 = $('#sq-8').text();
    
    if(sq0 !== "" && sq1 !== "" && sq2 !== "" && sq3 !== "" && sq4 !== "" && sq5 !== "" && sq6 !== "" && sq7 !== "" && sq8 !== "") {
        $('.game-status').text(`Its a draw!`)
        store.game.over = true;
        return;
    }
}

// const onNewGame = function() {
//     $('#sq-0').text('')
//     $('#sq-1').text('')
//     $('#sq-2').text('')
//     $('#sq-3').text('')
//     $('#sq-4').text('')
//     $('#sq-5').text('')
//     $('#sq-6').text('')
//     $('#sq-7').text('')
//     $('#sq-8').text('')

//     $('.game-status').text('')
//     $('#game-grid').on('click', gameEvents.selectedSq)
// }

const onNewGameSuccess = function(response) {
    console.log(response)
    store.game = response.game
}

const onUpdateSuccess = function(response) {
    console.log(response)
    store.game = response.game
}


module.exports = {
    onWin,
    onDraw,
    // onNewGame,
    onNewGameSuccess,
    onUpdateSuccess
}