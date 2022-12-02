document.getElementById("storeStartTime").addEventListener("click", storeStartTime);
document.getElementById("storeTimeSpent").addEventListener("click", storeTimeSpent);
document.getElementById("clearTimes").addEventListener("click", clearTimes);


function storeStartTime(e) {
    e.preventDefault();
    const date = new Date();

    window.localStorage.setItem("startTime", date);
}

function storeTimeSpent(e) {
    e.preventDefault();
    const startTime = Date.parse(window.localStorage.getItem("startTime"));
    const endTime = new Date();

    console.log("startTimeInMilliseconds: " + startTime);
    console.log("endTimeInMilliseconds: " + endTime.getTime());
    console.log("endTime: " + endTime);


    const timeSpent = (endTime.getTime() - startTime)/(1000 * 60);

    window.localStorage.setItem("timeSpent", timeSpent);
}

function clearTimes(e) {
    e.preventDefault();
    window.localStorage.removeItem("startTime");
    window.localStorage.removeItem("timeSpent");
}