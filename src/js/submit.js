export default function handlePasswordSubmit (e) {
  e.preventDefault()

  var form = document.getElementById('protected')
  var name = document.getElementById('username').value
  var pass = document.getElementById('password').value

  if (form.classList.contains('try-again')) {
    form.classList.remove('try-again')
  }

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open('POST', window.location.href, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({
    username: name,
    password: pass
  }))

  if (xhr.status === 200) {
    document.getElementById('password').disabled = true
    if (form.classList.contains('error')) {
      form.classList.remove('error')
    }
    if (form.classList.contains('try-again')) {
      form.classList.remove('try-again')
    }
    if (!form.classList.contains('success')) {
      form.classList.add('success')
    }
    setTimeout(function () {
      // redirect
    }, 3000)
    console.log('OK ' + xhr.responseText)
  } else if (xhr.status !== 200) {
    if (!form.classList.contains('error')) {
      form.classList.add('error')
    }
    void form.offsetWidth // This is needed to reset the CSS animations
    form.classList.add('try-again')
    setTimeout(function () {
      // Clear input field when the shake animation starts shakin'
      document.getElementById('password').value = ''
    }, 200)
    console.log('Request failed.  Returned status of ' + xhr.status)
  }
}
