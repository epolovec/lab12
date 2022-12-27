function submitForm() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const romanNumeral = document.getElementById('roman-numeral').value;
    
    const user = {
      name: name,
      lastName: lastName,
      romanNumeral: romanNumeral
    };
    
    console.log(user);
}

const form = document.getElementById('user-form');
form.addEventListener('submit', submitForm);