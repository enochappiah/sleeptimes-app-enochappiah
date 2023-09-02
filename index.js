// TODO write the JavaScript that makes this application functional. 
// The HTML and CSS have been provided for you.
const clcBtn = document.getElementById("calc-btn");

//const refreshBtn = document.getElementById("refresh-btn");

const returnBtn = document.getElementById("return-btn");
const bedtimeHoursDiv = document.getElementById("bedtime-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

//clcBtn.onclick = calcWakeUpTimes;
//TODO review this
clcBtn.addEventListener("click", calcBedTimes);
//refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => {

  //TODO review this
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcBedTimes() {
  //extract desired wake up time from dropdown form  
  const wakeUpHour = document.getElementById("hour-dropdown").value;
  const wakeUpMinutes = document.getElementById("minute-dropdown").value;
  const wakeUpDay = document.getElementById("ampm-dropdown").value;
  
  //create new Date object for wakeuptime with accounted fall asleep time
  const wakeUpTime = new Date();
  wakeUpTime.setHours(wakeUpHour);
  wakeUpTime.setMinutes(wakeUpMinutes - 14);


  const goToBedTime = new Date(wakeUpTime);
  bedtimeHoursDiv.innerHTML = "";
  //code prints latest time first, figure out how to reverse the list
  for (let i = 1; i <= 6; i++) {
    goToBedTime.setMinutes(goToBedTime.getMinutes() - 90);
    const wakeUpTimeString = goToBedTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });

    //TODO review this
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    bedtimeHoursDiv.appendChild(cycleDiv);
  }

  //TODO review this
  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");

}