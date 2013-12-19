document.querySelector("#convert").onclick=conversion;

function conversion() {
 var input = document.getElementById("given_temp").value;
 temp = parseFloat(input);
 var celTemp = (temp-32)*(5/9);
 if(!isNaN(celTemp)){
  document.getElementById("converted").textContent=celTemp.toFixed(2)+" degrees Celsius.";
  }else{
  document.getElementById("converted").textContent=input+" could not possibly be a temperature. Use a number.";
  };
}
