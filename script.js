const buttonA = document.getElementById('buttonA');
const responseA = document.getElementById('responseA');


  function AcresDisp {
  const sqFeet = window.prompt('Enter property area')
 
  const acres = sqFeet*.00002296
  responseA.innerHTML('Your house is ' + acres + 'acres')
  }

 buttonA.addEventListener('mousedown',AcresDisp);
