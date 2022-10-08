let hour = 1;
let min = 40;

if (min + 30 >= 60) {
    min = min + 30 - 60;
    if (hour + 1 >= 24) {
        hour = 0;
    }
    else {
        hour += 1;
    }
}
else {
    min = min + 30;
}
    alert(hour + ":" + min)