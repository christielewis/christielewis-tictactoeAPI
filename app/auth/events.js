const authApi = require('./api.js');
const authUi = require('./ui.js');
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function(e) {
    e.preventDefault();
    // console.log('yerrrrr');

    const form = e.target;
    const data = getFormFields(form);
    console.log(data);

    if(data.credentials.password !== data.credentials.password_confirmation) {
        $('#auth-status').html('<p>Passwords entered do not match.<br>Try again!</p>');
    } else {
        authApi
            .signUp(data)
            .then(() => authUi.onSignUpSuccess())
            .catch(() => authUi.onSignUpFailure())
    }
}

module.exports = {
    onSignUp
}