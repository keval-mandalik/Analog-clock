    setInterval(() => {

        let dhour = document.getElementById("dhour");
        let dminute = document.getElementById("dminute");
        let dsecond = document.getElementById("dsecond");

        date = new Date();
        hourTime = date.getHours();
        minuteTime = date.getMinutes();
        secondTime = date.getSeconds();
        
        dhour.innerHTML = hourTime;
        dminute.innerHTML = minuteTime;
        dsecond.innerHTML = secondTime;

        hourRotation = 30*hourTime + minuteTime/2;
        minuteRotation = 6*minuteTime + secondTime/10;
        secondRotation = 6*secondTime;

        hour.style.transform = `rotate(${hourRotation}deg)`;
        minute.style.transform = `rotate(${minuteRotation}deg)`;
        second.style.transform = `rotate(${secondRotation}deg)`;

    }, 1000);
