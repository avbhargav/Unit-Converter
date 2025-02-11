const textBoxEl = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");

const meterFeetEl = document.getElementById("meter-feet");
const litrGallEl = document.getElementById("litr-gall");
const kiloPoundsEl = document.getElementById("kilo-pounds");

convertBtn.addEventListener("click", function(){
    console.log(textBoxEl.value);
    const inputVal = Number(textBoxEl.value);
    meterFeetEl.textContent = `${inputVal} meters = ${(inputVal * 3.28084).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / 3.28084).toFixed(3)} meters`;
    litrGallEl.textContent = `${inputVal} liters = ${(inputVal * 0.264172).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / 0.264172).toFixed(3)} liters`;
    kiloPoundsEl.textContent = `${inputVal} kilos = ${(inputVal * 2.20462).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / 2.20462).toFixed(3)} kilos`;
});