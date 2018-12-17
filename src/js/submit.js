export default function handlePasswordSubmit (e) {
  e.preventDefault()

  var form = document.getElementById('protected')
  var url = form.action + '.json'
  var usernameField = document.getElementById('username')
  var passwordField = document.getElementById('password')
  var usernameText = usernameField.value
  var passwordText = passwordField.value

  var xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.send({
    username: usernameText,
    password: passwordText
  })

  form.classList.remove('try-again')

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Check if password is a match: if no, insert
        // error message text into .message div
        // If yes, insert success message
        // into .message div and redirect after 4000ms

        // passwordField.disabled = true
        // form.classList.remove('error', 'try-again')
        // form.classList.add('success')
        // setTimeout(function () {
        //   // redirect
        // }, 3000)
        // console.log('OK ' + xhr.responseText)

        //
        // form.classList.add('error')
        // void form.offsetWidth // This is needed to reset the CSS animations
        // form.classList.add('try-again')
        // setTimeout(function () {
        //   // Clear input field when the shake animation starts shakin'
        //   passwordField.value = ''
        // }, 250)
        // console.log('Request failed.  Returned status of ' + xhr.status)
      } else {
        console.log('Something went wrong. Please try again.')
      }
    }
  }
}
