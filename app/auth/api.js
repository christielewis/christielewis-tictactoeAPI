const store = require('../store.js')
const config = require('../config.js')

const signUp = function(data) {
    console.log(store)
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data
    })
}

const signIn = function(data) {
    console.log(store)
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data
    })
}

// const changePW = function(data) {
//     console.log(store)
//     return $.ajax({
//         method: 'PATCH',
//         url: 'https://tic-tac-toe-api-production.herokuapp.com/change-pw',
//         headers: {
//             Authorization: 'Bearer ' + store.user.token
//         },
//         data
//     })
// }

const signOut = function() {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    signUp,
    signIn,
    signOut
}