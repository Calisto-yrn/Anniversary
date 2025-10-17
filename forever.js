document.addEventListener("DOMContentLoaded", () => {
    console.log("Forever page loaded");
    const startDate = new Date("October 18, 2020 00:00:00");

    const yearsEL = document.getElementById("years");
    const monthsEL = document.getElementById("months");
    const daysEL = document.getElementById("days");
    const hoursEL = document.getElementById("hours");
    const minutesEL = document.getElementById("minutes");
    const secondsEL = document.getElementById("seconds");

    function updateTimer() { const now = new Date();

        //calculate total diff
        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        if (seconds < 0) {seconds += 60; minutes--;}
        if (minutes < 0) {minutes += 60; hours--;}
        if (hours < 0) {hours += 24; days--;}

        if (days < 0) {const prevMonth = new Date(now.getFullYear(),
        now.getMonth(), 0); days += prevMonth.getDate();months--;}
        if (months < 0) {months += 12; years--;}


         //update the dom
        yearsEL.textContent = years;
        monthsEL.textContent = months;
        daysEL.textContent = days;
        hoursEL.textContent = hours;
        minutesEL.textContent = minutes;
        secondsEL.textContent = seconds;
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    setTimeout(() => {
        document.getElementById("final-message").classList.add("show");
    },4000);
});