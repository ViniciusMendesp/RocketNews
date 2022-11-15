const form = document.getElementById('form')
const email = document.getElementById('email')
const button = document.querySelector("button")

const emails = []

button.onclick = function() {
  emails.push(email.value)
  console.log(emails)
}

form.addEventListener('submit', function(e) {
    alert(email.value)

    e.preventDefault()
})
