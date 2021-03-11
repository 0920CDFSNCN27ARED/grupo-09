window.addEventListener('load', function () {
  const form = document.querySelector('#registerForm');

  form.addEventListener('submit', function (event) {
    let errores = [];

    const ulErrors = document.querySelector('div.frontErrors ul');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    ulErrors.innerHTML = '';

    if (!validator.isLength(firstName.value, { min: 2, max: 40 })) {
      errores.push('El campo nombre tiene que tener al menos dos caracteres.');
    }
    if (!validator.isLength(lastName.value, { min: 2, max: 40 })) {
      errores.push(
        'El campo apellido tiene que tener al menos dos caracteres.'
      );
    }

    if (!validator.isEmail(email.value)) {
      errores.push('El mail no es una direccion valida.');
    }

    if (!validator.isLength(password.value, { min: 8, max: 40 })) {
      errores.push('La contraseña debe tener al menos 8 caracteres.');
    }
    if (errores.length > 0) {
      event.preventDefault();

      for (let i = 0; i < errores.length; i++) {
        ulErrors.innerHTML += '<li class="frontError">' + errores[i] + '</li>';
      }
    }
  });
});
