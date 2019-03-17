function   bombTimer(str, time) {
    const counter = setInterval(timer, 1000);
    function timer () {
        if (time <= 0) {
            clearInterval(counter);
            document.getElementById('timer').innerHTML = str;
        } else {
            document.getElementById('timer').innerHTML = time;
            time = time - 1;
        }

        }
    }
bombTimer('Boooom', 3);

