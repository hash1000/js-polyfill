console.log("dfghjk");


const btn= document.querySelector(".increament_btn");
const btnPress = document.querySelector(".increament_passed");
const count = document.querySelector(".increament_count");


var pressedCount = 0;
var triggerCount = 0;

// const debounceCount =_.debounce(()=>{
//     count.innerHTML = ++triggerCount;
// }, 1000);
const thortallCount =_.throttle(()=>{
    count.innerHTML = ++triggerCount;
}, 1000);
btn.addEventListener("click",()=>{
    btnPress.innerHTML = ++pressedCount;
    // debounceCount();
    thortallCount();

});
