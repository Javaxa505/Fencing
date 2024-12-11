fetch('https://localhost:7248/api/FanceProjectControler').then(res => res.json())
.then(data => console.log(data))



const toaster = document.getElementsByClassName('toaster')[0]
const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission

    const formData = {
        Address: document.querySelector('#name').value,
        Email: document.querySelector('#email').value,
        PhoneNumber: document.querySelector('#phone').value,
        Desciption: document.querySelector('#description').value
    };

    fetch('https://localhost:7248/api/FanceProjectControler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order submitted successfully:', data);
    })
    .catch(error => {
        console.error('Error submitting order:', error);
    });
});

GentleForm(form, function (event) {
  event.preventDefault()
  
  if (this.isValid()) addToast('success', 'Yay, the form is valid!')
  else addToast('error', 'Oops, the form is invalid.')
})

function addToast (type, message) {
  const toast = document.createElement('div')

  toast.classList.add('toast')
  toast.classList.add('toast--' + type)
  toast.innerHTML = message

  toaster.appendChild(toast)

  toast.addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return

    if (toast.classList.contains('toast--show')) {
      setTimeout(function () {
        toast.classList.remove('toast--show')
      }, 3000)
    } else {
      toaster.removeChild(toast)
    }
  }, false)

  setTimeout(() => toast.classList.add('toast--show'), 100)
}
