export default function handlePasswordSubmit (e) {
  e.preventDefault()

  var form = this
  var data = new FormData(form)
  var url = form.action + '.json'
  var passwordField = form.querySelector('#password')
  var message = form.querySelector('.message')

  var xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  xhr.send(data)

  xhr.onload = function () {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText)
      console.log(json)
      if (json.success === false) {
        message.innerHTML = json.message
        form.classList.add('error')
        form.classList.remove('try-again')
        void form.offsetWidth // This is needed to reset the CSS animations
        form.classList.add('try-again')
        setTimeout(function () {
          // Clear input field when the shake animation starts shakin'
          passwordField.value = ''
        }, 250)
      } else if (json.success === true) {
        message.innerHTML = json.message
        passwordField.disabled = true
        form.classList.remove('error', 'try-again')
        form.classList.add('success')
        setTimeout(function () {
          window.location.reload()
        }, 3000)
      }
    } else {
      console.log('Something went wrong. Please try again.')
    }
  }
}
