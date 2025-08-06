const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height <= 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else{
    const bmi = (weight / ((height*height)/10000));

//  1 way
    // if(bmi <= 18.6){
    //   results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are underweight`
    // } else if (bmi >= 18.6 && bmi <= 24.9){
    //   results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are normal weight`
    // } else if (bmi >= 24.9){
    //   results.innerHTML = `Your BMI is ${bmi.toFixed(2)} and you are overweight`
    // }

// 2 way
let message  = `Your BMI is ${bmi.toFixed(2)} an you are `;

if(bmi <= 18.6){
  message += 'underweight'
} else if (bmi >= 18.6 && bmi <= 24.9){
  message += 'normal weight'
} else if (bmi >= 24.9){
  message += 'overweight'
}

results.innerHTML = message;

  }

})

