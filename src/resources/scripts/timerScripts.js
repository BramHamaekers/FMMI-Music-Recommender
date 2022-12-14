export function storeStartTime() {
    const date = new Date();

    window.localStorage.setItem("startTime", date);
}

export function storeTimeSpent() {
    const startTime = Date.parse(window.localStorage.getItem("startTime"));
    const endTime = new Date();

    console.log("startTimeInMilliseconds: " + startTime);
    console.log("endTimeInMilliseconds: " + endTime.getTime());
    console.log("endTime: " + endTime);


    const timeSpent = (endTime.getTime() - startTime)/(1000 * 60);

    window.localStorage.setItem("timeSpent", timeSpent);
}

export function clearTimes() {
    window.localStorage.removeItem("startTime");
    window.localStorage.removeItem("timeSpent");
}