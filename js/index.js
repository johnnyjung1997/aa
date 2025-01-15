
let startDate = new Date('2023-08-08');
let todayDate = new Date();
let diffTime = todayDate.getTime() - startDate.getTime();
let diffDays = Math.floor(diffTime / (1000*60*60*24))

$(document).ready(function () {
    $('#dday').text(diffDays + "일")
});

function countDDay(){

}