document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    // get the values of the input fields
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('last-name').value;
    var romanNumeral1 = document.getElementById('roman-numeral1').value;
    var romanNumeral2 = document.getElementById('roman-numeral2').value;

    const user = {
      name: name,
      lastName: lastName,
      romanNumeral1: romanNumeral1,
      romanNumeral2: romanNumeral2
    };

    // log the values to the console
    console.log(user);

    const romanToNumber = {
      'I': 1,
      'V': 5,
      'X': 10,
    };
  
    function convertingRomanNumeral(romanNumeral) {
      const romanNumerals = romanNumeral.split('');
      let result = 0;
  
      for (let i = 0; i < romanNumerals.length; i++) {
        if (romanNumerals[i] != 'I' && romanNumerals[i] != 'V' && romanNumerals[i] != 'X') {
          alert('Klaidingai įvestas skaimuo, banykite vėl')
          result = 0;
          break;
        }
        else {
          const currentNumeral = romanToNumber[romanNumerals[i]];
          const nextNumeral = romanToNumber[romanNumerals[i + 1]];
          if (currentNumeral < nextNumeral) {
            result -= currentNumeral;
          } else {
            result += currentNumeral;
          }
        }
      }
  
      return result;
    }

    const num1 = convertingRomanNumeral(romanNumeral1);
    const num2 = convertingRomanNumeral(romanNumeral2);
    
    if (num1 > 0 && num2 > 0) {
      document.write(`Vartotojo vardas: ${user.name}</p>`);
      document.write(`Vartotojo pavardė: ${user.lastName}</p>`);
      document.write(`Vartotojo pasirinktas pirmas romėniškas skaičius: ${user.romanNumeral1}</p>`);
      document.write(`Vartotojo pasirinktas antras romėniškas skaičius: ${user.romanNumeral2}</p>`);
      if (num1 + num2 <= 7)
        document.write(`Sudėti romėniški skaitmenys atvaizuoti arabiškais skaimenimis: <span style="color: red;">${num1 + num2}</span></p>`);
      else if (num1 + num2 > 7 && num1 + num2 <= 14)
        document.write(`Sudėti romėniški skaitmenys atvaizuoti arabiškais skaimenimis: <span style="color: orange;">${num1 + num2}</span></p>`);
      else document.write(`Sudėti romėniški skaitmenys atvaizuoti arabiškais skaimenimis: <span style="color: green;">${num1 + num2}</span></p>`);
    }
  });
});