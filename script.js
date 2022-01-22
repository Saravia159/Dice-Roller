 let d4 = {
    sides: 4,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  function printNumberOne(numberOne) {
    let placeholderOne = document.getElementById('placeholder-d4');
    placeholderOne.innerHTML = numberOne;
  }
  
  let buttonOne = document.getElementById('button-d4');
  
  buttonOne.onclick = function() {
    let resultOne = d4.roll();
    printNumberOne(resultOne);
  };



let d6 = {
    sides: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberTwo(numberTwo) {
    let placeholderTwo = document.getElementById('placeholder-d6');
    placeholderTwo.innerHTML = numberTwo;
  }
  
  let buttonTwo = document.getElementById('button-d6');
  
  buttonTwo.onclick = function() {
    let resultTwo = d6.roll();
    printNumberTwo(resultTwo);
  };



let d8 = {
    sides: 8,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberThree(numberThree) {
    let placeholderThree = document.getElementById('placeholder-d8');
    placeholderThree.innerHTML = numberThree;
  }
  
  let buttonThree = document.getElementById('button-d8');
  
  buttonThree.onclick = function() {
    let resultThree = d8.roll();
    printNumberThree(resultThree);
  };



  let d10 = {
    sides: 10,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberFour(numberFour) {
    let placeholderFour = document.getElementById('placeholder-d10');
    placeholderFour.innerHTML = numberFour;
  }
  
  let buttonFour = document.getElementById('button-d10');
  
  buttonFour.onclick = function() {
    let resultFour = d10.roll();
    printNumberFour(resultFour);
  };



  let d12 = {
    sides: 12,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberFive(numberFive) {
    let placeholderFive = document.getElementById('placeholder-d12');
    placeholderFive.innerHTML = numberFive;
  }
  
  let buttonFive = document.getElementById('button-d12');
  
  buttonFive.onclick = function() {
    let resultFive = d12.roll();
    printNumberFive(resultFive);
  };



  let d20 = {
    sides: 20,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberSix(numberSix) {
    let placeholderSix = document.getElementById('placeholder-d20');
    placeholderSix.innerHTML = numberSix;
  }
  
  let buttonSix = document.getElementById('button-d20');
  
  buttonSix.onclick = function() {
    let resultSix = d20.roll();
    printNumberSix(resultSix);
  };


  let d100 = {
    sides: 100,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

    function printNumberSeven(numberSeven) {
    let placeholderSeven = document.getElementById('placeholder-d100');
    placeholderSeven.innerHTML = numberSeven;
  }
  
  let buttonSeven = document.getElementById('button-d100');
  
  buttonSeven.onclick = function() {
    let resultSeven = d100.roll();
    printNumberSeven(resultSeven);
  };