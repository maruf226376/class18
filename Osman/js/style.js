
function oddEvenCheck(num){
  if (num % 2 == 0){
    document.write(num +'Even Number'+'<br>')
  }
 else if (num % 2 == 1){
    document.write(num +'Odd Number'+'<br>')
  }
  else {
    document.write(num +'Invalid Number'+'<br>')
  }
}

oddEvenCheck(8896986)


function printOddEven(num){
  for (var num = 1; num<=100; num++)
  if (num % 2 == 0){
    document.write(num +'Even Number'+'<br>')
  }
 else if (num % 2 == 1){
    document.write(num +'Odd Number'+'<br>')
  }
  else {
    document.write(num +'Invalid Number'+'<br>')
  }
}

function testInput(){
  var inputValue = document.getElementById('inputField').value;

  if (inputValue.length > 20){
  document.getElementById('validation_text').innerHTML = 'Name must be 0-20'}

  else {
    document.getElementById('validation_text').innerHTML = ''}
}



var day = document.getElementById('day')

for (var i = 1; i<=31; i++){

  var dayOption = document.createElement('option')
  
  var dayOptionText = document.createTextNode(i)

  dayOption.appendChild(dayOptionText)
  day.appendChild(dayOption)
}


var year = document.getElementById('year')

for (var i = 1950; i<=2030; i++){

  var yearOption = document.createElement('option')
    
  var yearOptionText = document.createTextNode(i)
  
  yearOption.appendChild(yearOptionText)
  year.appendChild(yearOption)
  
}
  

window.onload = function() {
  document.getElementById("months").innerHTML = getMonth(12);   
  };
  
  for(var month=0; month < 12; month++)
  {
  
  document.getElementById("months").innerHTML = document.getElementById("months").innerHTML + "<br/>" + month + getMonth(month); 
  }
  
  function getMonth(month) {
      var monthName;
      if (month == 12) {
          monthName = "December";
      }
      return monthName;
  }







