const devNumber = document.getElementById('dev-number').innerText;
const convertedDevNumber = parseInt(devNumber);
const taskNumber = document.getElementById('task-number').innerText;
const convertedTaskNumber = parseInt(taskNumber);
// console.log(taskAssign);
let devCount = 0;
let taskCount = 0;
const buttons = document.querySelectorAll('.btnComplete');
for (const btnComplete of buttons) {
    btnComplete.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Board updated successfully');
        btnComplete.disabled = true;
        devCount++;
        const updatedDevNumber = convertedDevNumber + devCount;
        // console.log(updatedDevCount);
        document.getElementById('dev-number').innerText = updatedDevNumber;

        taskCount++;
        const updatedTaskNumber = convertedTaskNumber - taskCount;
        // console.log(updatedTaskNumber);

        document.getElementById('task-number').innerText = updatedTaskNumber;
        if (updatedTaskNumber === 0) {
            alert('Congrats! You have completed all the current tasks.');
        }

        const activityContainer = document.getElementById('activity');
        const div = document.createElement('div');
        div.classList.add("bg-sky-50", "m-3", "p-2");

        // const title = button.dataset.title;
        let now = new Date();
        let currentTime = now.toLocaleTimeString({ hour: '2-digit', minute: '2-digit', second: '2-digit' });

        div.innerHTML = `
        <p>You have completed the task at ${currentTime}</P>
        `
        activityContainer.appendChild(div);
    })

}
