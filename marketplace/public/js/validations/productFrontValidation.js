window.addEventListener('load', function () {
  const form = document.querySelector('#productForm');
  console.log(form);

  form.addEventListener('submit', function (event) {
    console.log('submit');
    let errores = [];

    const ulErrors = document.querySelector('div.frontErrors ul');
    const productName = document.querySelector('#productName');
    const productDescription = document.querySelector('#productDescription');

    ulErrors.innerHTML = '';
    console.log(productDescription);
    console.log(productDescription.value);

    if (!validator.isLength(productName.value, { min: 5, max: 40 })) {
      errores.push('El nombre debe tener al menos 5 caracteres.');
    }
    if (!validator.isLength(productDescription.value, { min: 20, max: 300 })) {
      errores.push('La descripcion debe tener al menos 20 caracteres.');
    }

    if (errores.length > 0) {
      event.preventDefault();

      for (let i = 0; i < errores.length; i++) {
        ulErrors.innerHTML += '<li class="frontError">' + errores[i] + '</li>';
      }
    }
  });
});
