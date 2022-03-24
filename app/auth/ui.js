const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-status-sign-up').html('<p>Sign Up Successful!</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#auth-status-sign-up').html('<p>There was an error signing up.<br>Try again!</p>')
}
const onSignInSuccess = function(response) {
    $('#auth-status-sign-in').html('<p>Sign In Successful!</p>')
    $('form').trigger('reset')
    console.log(response)
    store.user = response.user
}

const onSignInFailure = function() {
    $('#auth-status-sign-in').html('<p>There was an error signing in.<br>Try again!</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure
}