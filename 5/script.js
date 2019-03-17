function  bombTimer(str, time) {

    let counter = setTimeout(function timer () {

        if (time === 0) {
            document.getElementById('timer').innerHTML = str;
        } else {
            document.getElementById('timer').innerHTML = time;
            time = time - 1;

            counter = setTimeout(timer, 1000);
        }


    }, 1000);
}
 bombTimer('Boooom', 3);








