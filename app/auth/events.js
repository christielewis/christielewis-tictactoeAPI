const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function(e) {
    e.preventDefault()
    // console.log('yerrrrr');

    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    if(data.credentials.password !== data.credentials.password_confirmation) {
        $('#auth-status-sign-up').html('<p>Passwords entered do not match.<br>Try again!</p>');
    } else {
        authApi
            .signUp(data)
            .then(() => authUi.onSignUpSuccess())
            .catch(() => authUi.onSignUpFailure())
    }
}

const onSignIn = function(e) {
    e.preventDefault()

    const form = e.target
    const data = getFormFields(form)

    authApi
        .signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

module.exports = {
    onSignUp,
    onSignIn
}