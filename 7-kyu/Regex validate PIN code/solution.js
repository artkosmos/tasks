/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string,
return true, else return false.*/

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (pin[i] < "0" || pin[i] > "9") {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(validatePIN('1234'))
console.log(validatePIN('123 '))