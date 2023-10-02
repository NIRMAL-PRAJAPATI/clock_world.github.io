

const time_func = () => {

    let time = new Date();

    let fulltime = time.toLocaleTimeString();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let days = "";
    let special_day = document.getElementById('special_day');
    let para = document.getElementById('para');

    const arr = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let months = arr[month];

    let hms = document.getElementById('time');
    let dmy = document.getElementById('date');

    switch (day) {
        case 0:
            days = "Sunday, "
            break;

        case 1:
            days = "Monday, "
            break;

        case 2:
            days = "Tuesday, "
            break;

        case 3:
            days = "Wednesday, "
            break;

        case 4:
            days = "Thusday, "
            break;

        case 5:
            days = "Friday, "
            break;

        case 6:
            days = "Saturday, "
            break;

        default:
            days = "Special Day, "
            break;
    }

    if (date == 14 && month == 1) {
        special_day.innerHTML = "Happy Makar Sankranti";
        para.innerHTML = "May you soar high with success just like your kites this Makar Sankranti.";
    }

    else if (date == 26 && month == 0) {
        special_day.innerHTML = "Happy Republic Day";
        para.innerHTML = "Never forget the heroes who sacrificed their lives to bring up this glorious day to India. Happy Republic Day.";
    }

    else if (date == 23 && month == 4) {
        special_day.innerHTML = "Today is My (nirmal) Birthday !!!";
        para.innerHTML = "Happy Birthday Dear... Wishing you a very very happy returns of the day. may all your dream comes true. once again happy birthday for the clock world."
    }

    else if (date == 1 && month == 5) {
        special_day.innerHTML = "Today is my mother's Birthday !!!";
        para.innerHTML = "Happy Birthday Dear... Wishing you a very very happy returns of the day. may all your dream comes true. once again happy birthday for the clock world."
    }

    else if (date == 10 && month == 5) {
        special_day.innerHTML = "Today is my brother's Birthday !!!";
        para.innerHTML = "Happy Birthday Dear... Wishing you a very very happy returns of the day. may all your dream comes true. once again happy birthday for the clock world."
    }

    else if (date == 15 && month == 7) {
        special_day.innerHTML = "Happy Independence Day";
        para.innerHTML = "Freedom in mind, Faith in our heart, Memories in our souls. Let's salute the Nation on Independence Day! Our freedom fighters went through countless sufferings to give us our freedom.";
    }

    else if (date == 1 && month == 9) {
        special_day.innerHTML = "Today is Clock World's Birthday";
        para.innerHTML = "Taday a clock world is created by the Nirmal Prajapati. the perpose to create the clock worls is to practice the JavaScript language which used to create clock world.";
    }

    else if (date == 2 && month == 9) {
        special_day.innerHTML = "It's Gandhi Gayanti";
        para.innerHTML = "On Gandhi Jayanti, let's honor the man who led India to freedom through his principles of truth and love.";
    }

    else if (date == 21 && month == 9) {
        special_day.innerHTML = "Today is My father's Birthday !!!";
        para.innerHTML = "Happy Birthday Dear... Wishing you a very very happy returns of the day. may all your dream comes true. once again happy birthday for the clock world."
    }

    else if (date == 25 && month == 11) {
        special_day.innerHTML = "Marry Christmas";
        para.innerHTML = "Christmas is like candy; it slowly melts in your mouth sweetening every taste bud, making you wish it could last forever.";
    }

    else if (date == 26 && month == 0) {
        special_day.innerHTML = "Happy Republic Day";
    }

    else if (month == 3) {
        special_day.innerHTML = "It's Exam Month !!!";
    }

    else if (month == 4) {
        special_day.innerHTML = "It's Summer Vecation Month !!!";
    }

    else if (month == 8 || month == 9) {
        special_day.innerHTML = "It's Festival Month !!!";
    }

    else if (month == 10) {
        special_day.innerHTML = "It's Winter Vecation Month !!!";
    }

    hms.innerHTML = fulltime;
    dmy.innerHTML = days + date + " " + months + " " + year;
}
setInterval(time_func, 1000);