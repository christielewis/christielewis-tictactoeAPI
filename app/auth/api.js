const store = require('../store.js')

const signUp = function (data) {
    console.log(store)
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-production.herokuapp.com/sign-up',
        data
    })
}

module.exports = {
    signUp
}