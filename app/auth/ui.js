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

const onChangePWSuccess = function() {
    $('#auth-status-change-pw').html('<p>Password Successfully Changed!</p>')
    $('form').trigger('reset')
}

const onChangePWFailure = function() {
    $('#auth-status-change-pw').html('<p>Error.<br>Try again!</p>')
}

const onSignOutSuccess = function() {
    $('#auth-status-sign-out').html('<p>Signed Out Successfully !</p>')
    $('form').trigger('reset')
    store.user = null
}

const onSignOutFailure = function() {
    $('#auth-status-sign-out').html('<p>Error.<br>Try again!</p>')
}


module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePWSuccess,
    onChangePWFailure,
    onSignOutSuccess,
    onSignOutFailure
}