const buttonA = document.getElementById('buttonA');
const responseA = document.getElementById('responseA');

//Acres of house
  function AcresDisp() {
  const sqFeet = window.prompt('Enter property area in square feet:');
  const acres = sqFeet*.00002296;
  let AcresResp = ' Your propery is ' + sqFeet + ' SF and ';
  if (acres < 1) { AcresResp += 'the acres is ' + acres + 'acres which is not enough for a typical suburban home.'}
  else if(acres >= 1 && acres <= 3) { AcresResp += 'the acres is ' + acres + ' acres which is enough for a small yet generous suburban home.'}
  else if (acres > 3 && acres <= 5) { AcresResp += 'the acres is ' + acres + ' acres which is enough for a large suburban home with a spacious yard.'}
  else if (acres > 5 && acres <= 10) { AcresResp += 'the acres is ' + acres + ' acres which is enough for a small farm or a large estate.'}
  else if (acres > 10 && acres <= 20) { AcresResp += 'the acres is ' + acres + ' acres which is enough for a medium-sized farm or a large estate with plenty of land.'}
  else if (acres > 20) { AcresResp += 'the acres is ' + acres + ' acres which is enough for a large farm.'}
  else { AcresResp += 'the number is not valid to calculate acres.'}
  responseA.innerHTML = AcresResp;
  }

 buttonA.addEventListener('mousedown',AcresDisp);

 //Future cost of house
  const buttonD = document.getElementById('buttonD');
  const responseD = document.getElementById('responseD');

  function FutCost() {
  const preCost = window.prompt('Enter cost of house when purchased');
  const t = window.prompt('Enter how many years since purchase of house');
  const r = .04;
  let answerCost = "The cost of your house after "+t+" years is ";
   if (preCost > 0 && fuCost > 0) {
   answerCost += preCost*(1+r)^t;
   }
   else {
   answerCost += "Please enter a valid input";
   }
   responseD.innerHTML=answerCost;
   }

   buttonD.addEventListener('mousedown',FutCost);