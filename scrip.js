function calculateBMI() {
  const heightCm = parseFloat(document.getElementById("height").value);
  const weight   = parseFloat(document.getElementById("weight").value);

  const resultDiv  = document.getElementById("result");
  const categoryDiv = document.getElementById("category");

  // maydonlar to'ldirilganligini tekshirish
  if (isNaN(heightCm) || isNaN(weight) || heightCm <= 0 || weight <= 0) {
    resultDiv.textContent = "Iltimos, to'g'ri qiymatlar kiriting";
    resultDiv.style.background = "#ffebee";
    categoryDiv.textContent = "";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  resultDiv.textContent = bmiRounded;
  resultDiv.style.background = "#f1f8e9";

  let category = "";
  let color = "";

  if      (bmi < 18.5)  { category = "Kam vazn (underweight)";      color = "#ffb74d"; }
  else if (bmi < 25)    { category = "Normal vazn";                 color = "#66bb6a"; }
  else if (bmi < 30)    { category = "Ortiqcha vazn (overweight)";  color = "#ffa726"; }
  else if (bmi < 35)    { category = "1-darajali semizlik";         color = "#ff7043"; }
  else if (bmi < 40)    { category = "2-darajali semizlik";         color = "#f4511e"; }
  else                  { category = "3-darajali semizlik";         color = "#d32f2f"; }

  categoryDiv.innerHTML = `Vazn holati: <strong style="color:${color}">${category}</strong>`;
}



let bt=document.getElementById("bt")

Object.assign(bt.style,{
  width:"140px",
  height:"40px",
  display:"flex",
  aliganItems:"center",
  marginLeft:"10%",
})




let cl=document.querySelector(".calculator")

Object.assign(cl.style,{
  // width:"490px",
})