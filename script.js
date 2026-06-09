const buttonA = document.getElementById('buttonA');
const responseA = document.getElementById('responseA');


  function AcresDisp() {
  const sqFeet = window.prompt('Enter property area');
  const acres = sqFeet*.00002296;
  let AcresResp = ' Your propery is ' + sqFeet + 'and ';
  if (acres < 1) { AcresResp += 'the acres is ' + acres + 'which is not enough for a typical suburban home.'}
  else if(acres >= 1 && acres <= 3) { AcresResp += 'the acres is ' + acres + 'which is enough for a small yet generous suburban home.'}
  else if (acres > 3 && acres <= 5) { AcresResp += 'the acres is ' + acres + 'which is enough for a large suburban home with a spacious yard.'}
  else if (acres > 5 && acres <= 10) { AcresResp += 'the acres is ' + acres + 'which is enough for a small farm or a large estate.'}
  else if (acres > 10 && acres <= 20) { AcresResp += 'the acres is ' + acres + 'which is enough for a medium-sized farm or a large estate with plenty of land.'}
  else if (acres > 20) { AcresResp += 'the acres is ' + acres + 'which is enough for a large farm.'}
  else { AcresResp += 'the number is not valid to calculate acres.'}
  responseA.innerHTML = AcresResp;
  }

 buttonA.addEventListener('mousedown',AcresDisp);
