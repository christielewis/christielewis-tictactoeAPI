const store = require('../store.js')

const onSignUpSuccess = function() {
    $('#auth-status-sign-up').html('<p>Sign Up Successful!</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function() {
    $('#auth-status-sign-up').html('<p>There was an error signing up.<br>Try again!</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure
}