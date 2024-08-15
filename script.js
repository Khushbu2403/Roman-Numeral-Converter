const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  output.classList.remove("hidden");
  checkNumber(input.value);
});

function checkNumber(str) {
  if (input.value == "") {
    output.innerText = "Please enter a valid number";
    return;
  } else {
    let number = parseInt(str);
    if (number >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
    } else if (number < 1) {
      output.innerText = "Please enter a number greater than or equal to 1";
    } else {
      output.innerText = makeRoman(number);
    }
  }
}

function makeRoman(number) {
  let romanNumber = "";
  let count = 0;

  function convert(number) {
    count++;
    if (count == 1) {
      romanNumber = roman("I", "V", "X", number % 10) + romanNumber;
    } else if (count == 2) {
      romanNumber = roman("X", "L", "C", number % 10) + romanNumber;
    } else if (count == 3) {
      romanNumber = roman("C", "D", "M", number % 10) + romanNumber;
    } else if (count == 4) {
      romanNumber = roman("M", "", "", number % 10) + romanNumber;
    }
    if (number >= 10) {
      convert(Math.floor(number / 10));
    }
  }

  convert(number);
  return romanNumber;
}

function roman(str1, str2, str3, num) {
  switch (num) {
    case 0:
      return "";
    case 1:
      return str1;
    case 2:
      return str1.repeat(2);
    case 3:
      return str1.repeat(3);
    case 4:
      return str1 + str2;
    case 5:
      return str2;
    case 6:
      return str2 + str1;
    case 7:
      return str2 + str1.repeat(2);
    case 8:
      return str2 + str1.repeat(3);
    case 9:
      return str1 + str3;
  }
}
