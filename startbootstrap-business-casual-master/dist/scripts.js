/*!
* Start Bootstrap - Business Casual v7.0.6 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


// document.querySelector("#sp-wrapper > section.sp-intro.sp-intro-image.fullscreen > div.intro-body > h2 > span > span.typed-container")
// document.querySelector("#sp-wrapper > section.sp-intro.sp-intro-image.fullscreen > div.intro-body > h2 > span > span.typed-cursor")
