const store = require("../store")

const createGame = function(data) {
    console.log(store)
    console.log(data)
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
        data: data,
        header: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateGame = function(data, id) {
    console.log(store)
    console.log(data)
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + id,
        data: data,
        header: {
            Authorization: 'Bearer ' + store.user.token
        },
    })
}
// const updateGame = function(index, value, gameStatus) {
//     console.log(store)
//     return $.ajax({
//         method: 'POST',
//         url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.games._id,
//         header: {
//             Authorization: 'Bearer ' + store.user.token
//         },
//         data: {
//             "game": {
//                 "cell": {
//                     "index": index,
//                     "value": value
//                 },
//                 "over": gameStatus
//             }
//         }
//     })
// }


module.exports = {
    createGame,
    updateGame
}