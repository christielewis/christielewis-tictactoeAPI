// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('#welcome-sign-up').on('click', authEvents.welcomeSignUp)
  // $('#welcome-sign-in').on('click', authEvents.welcomeSignUp)

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // $('#change-pw-form').on('submit', authEvents.onChangePW)

  $('#game-grid').on('click', gameEvents.selectedSq)
  $('.new-game').on('click', gameEvents.onNewGame)

})
