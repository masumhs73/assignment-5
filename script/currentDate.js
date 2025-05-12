const calender = document.getElementById('calender');
const div = document.createElement('div');
div.classList.add("font-medium",);

let date = new Date();
let currentDate = date.toDateString();

div.innerHTML = `
<p>${currentDate}</P>
`
calender.appendChild(div);