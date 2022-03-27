const authApi = require('./api.js')
const authUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function(e) {
    e.preventDefault()
    // console.log('yerrrrr');

    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    // $('#sign-up').hide()
    // $('#sign-in').show()
    // $('#sign-out').hide()
    // $('#games').hide()

    if(data.credentials.password !== data.credentials.password_confirmation) {
        $('#auth-status-sign-up').html('<p>Passwords entered do not match.<br>Try again!</p>');
    } else {
        authApi.signUp(data)
            .then(() => authUi.onSignUpSuccess())
            .catch(() => authUi.onSignUpFailure())
    }
}

const onSignIn = function(e) {
    e.preventDefault()

    const form = e.target
    const data = getFormFields(form)
    console.log(data)

    // $('#sign-up').hide()
    // $('#sign-in').hide()
    // $('#sign-out').show()
    // $('#games').show()
    
    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        .catch(() => authUi.onSignInFailure())
}

// const onChangePW = function(e) {
//     e.preventDefault()

//     const form = e.target
//     const data = getFormFields(form)

//     authApi
//         .signIn(data)
//         .then((response) => authUi.onChangePWSuccess(response))
//         .catch(() => authUi.onChangePWFailure())
// }

const onSignOut = function() {

    // $('#sign-up').show()
    // $('#sign-in').show()
    // $('#sign-out').hide()
    // $('#games').hide()

    authApi
        .signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut
    // onChangePW,
}