const store = require("../store")
const config = require('../config.js')

const createGame = function() {
    console.log(store)
    // console.log(data)
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/games',
        // url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
        data: {
        },
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

// const updateGame = function(data, id) {
//     console.log(store)
//     console.log(data)
//     return $.ajax({
//         method: 'POST',
//         url: config.apiUrl + '/games/' + id,
//         // url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + id,
//         data: data,
//         headers: {
//             Authorization: 'Bearer ' + store.user.token
//         },
//     })
// }
const updateGame = function(index, value, gameStatus) {
    console.log(store)
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/games/' + store.game._id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data: {
            "game": {
                "cell": {
                    "index": index,
                    "value": value
                },
                "over": gameStatus
            }
        }
    })
}


module.exports = {
    createGame,
    updateGame
}