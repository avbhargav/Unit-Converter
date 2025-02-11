const textBoxEl = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");

const meterFeetEl = document.getElementById("meter-feet");
const litrGallEl = document.getElementById("litr-gall");
const kiloPoundsEl = document.getElementById("kilo-pounds");
// console.log(textBoxEl);
// console.log(textBoxEl.value);
// console.log(convertBtn);

convertBtn.addEventListener("click", function(){
    console.log(textBoxEl.value);
    const inputVal = textBoxEl.value;
    meterFeetEl.textContent = `${inputVal} meters = 65.616 feet | ${inputVal} feet = 6.096 meters`;
    litrGallEl.textContent = `${inputVal} liters = 5.284 gallons | ${inputVal} gallons = 75.708 liters`;
    kiloPoundsEl.textContent = `${inputVal} kilos = 44.092 pounds | ${inputVal} pounds = 9.072 kilos`;
});