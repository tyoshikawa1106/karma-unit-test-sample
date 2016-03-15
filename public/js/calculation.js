var Calculation = (function() {
  'use strict';

  function Calculation() {

  }
  
  // 足し算
  Calculation.add = function(prmNum1, prmNum2) {
      var num1 = prmNum1 ? prmNum1 : 0;
      var num2 = prmNum2 ? prmNum2 : 0;
      return num1 + num2;
  }

  // 引き算
  Calculation.subtraction = function(prmNum1, prmNum2) {
      var num1 = prmNum1 ? prmNum1 : 0;
      var num2 = prmNum2 ? prmNum2 : 0;
      return num1 - num2;
  }

  return Calculation;
})();