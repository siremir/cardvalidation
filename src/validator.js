const validator = {
  isValid: function (number) {
    let creditNumber = number;
    if (creditNumber !== "") {
      creditNumber = Array.from(creditNumber);
      creditNumber.reverse();
      for (let i = 0; i < creditNumber.length; i++) {
        if (i % 2 !== 0) {
          creditNumber[i] = creditNumber[i] * 2;
          creditNumber[i] = creditNumber[i].toString();
          if (creditNumber[i] >= 10) {
            creditNumber[i] = parseInt(creditNumber[i][0]) + parseInt(creditNumber[i][1]);
          } else creditNumber[i] = parseInt(creditNumber[i]);
        } else creditNumber[i] = parseInt(creditNumber[i]);
      }
      creditNumber = creditNumber.reduce((a, b) => {
        return a + b
      });
      if (creditNumber % 10 === 0) {
        return true;
      } else return false;
    }
  },
  maskify: function (number) {
    let creditNumber = number;
    if (creditNumber.length > 4) {
      creditNumber = "#".repeat(creditNumber.length - 4) + creditNumber.slice(-4);
    }
    return creditNumber;
  },
  franquicia: function (number) {
    if (number[0] === "4") {
      return "./images/visa.png";
    } else if (number[0] === "3") {
      return "./images/amex.png";
    } else if (number[0] === "5") {
      return "./images/master.png";
    } else return "./images/diners.png";
  }
};

export default validator;
