const gameEvents = require('./events.js')

// const onMark = function(sq) {
//     let num = 0
//     let turn = false
//     if(num % 2 === 0 && turn) {
//         sq.innerText = "X";
//         turn = false
//     } else {
//         sq.innerText = "O"
//         turn = true
//     }
//     num++
// }


let sq0 = $('#sq-0').text();
let sq1 = $('#sq-1').text();
let sq2 = $('#sq-2').text();
let sq3 = $('#sq-3').text();
let sq4 = $('#sq-4').text();
let sq5 = $('#sq-5').text();
let sq6 = $('#sq-6').text();
let sq7 = $('#sq-7').text();
let sq8 = $('#sq-8').text();
const onWin = function() {
    if($('#sq-0').text() !== "" && $('#sq-0').text() === $('#sq-1').text() && $('#sq-0').text() === $('#sq-2').text()) {
        $('.game-status').text(`${$('#sq-0').text()} is the winner!`)
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if($('#sq-0').text() !== "" && $('#sq-0').text() === $('#sq-1').text() && $('#sq-0').text() === $('#sq-2').text()) {
        $('.game-status').html(`</h5>${sq0} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq0 !== "" && sq0 === sq4 && sq0 === sq8) {
        $('.game-status').text(`${sq0} is the winner!`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq1 !== "" && sq1 === sq4 && sq1 === sq7) {
        $('#game-status').html(`</h5>${sq1} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq2 !== "" && sq2 === sq5 && sq2 === sq8) {
        $('#game-status').html(`</h5>${sq2} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq2 !== "" && sq2 === sq4 && sq2 === sq6) {
        $('#game-status').html(`</h5>${sq2} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq3 !== "" && sq3 === sq4 && sq3 === sq5) {
        $('#game-status').html(`</h5>${sq3} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
        return;
    } else if(sq6 !== "" && sq6 === sq7 && sq6 === sq8) {
        $('#game-status').html(`</h5>${sq6} is the winner!</h5>`) // append to document
        $('#game-grid').off('click', gameEvents.selectedSq)
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
        $('#game-status').html(`<h5>It's a draw.</h5>`)
        return;
    }
}

module.exports = {
    // onMark,
    onWin,
    onDraw
}