// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-pw-form').on('submit', authEvents.onChangePW)
  $('#sign-out-form').on('submit', authEvents.onSignOut)

  $('#game-grid').on('click', gameEvents.selectedSq)
  
  $('#sq-0').on('click', gameEvents.mark)
  $('#sq-1').on('click', gameEvents.mark)
  $('#sq-2').on('click', gameEvents.mark)
  $('#sq-3').on('click', gameEvents.mark)
  $('#sq-4').on('click', gameEvents.mark)
  $('#sq-5').on('click', gameEvents.mark)
  $('#sq-6').on('click', gameEvents.mark)
  $('#sq-7').on('click', gameEvents.mark)
  $('#sq-8').on('click', gameEvents.mark)
})
