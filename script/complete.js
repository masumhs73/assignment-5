const devNumber = document.getElementById('dev-number').innerText;
const convertedDevNumber = parseInt(devNumber);
const taskNumber = document.getElementById('task-number').innerText;
const convertedTaskNumber = parseInt(taskNumber);
// console.log(taskAssign);
let devCount = 0;
let taskCount = 0;
const buttons = document.querySelectorAll('.btnComplete');
for (const btnComplete of buttons) {
    btnComplete.addEventListener('click', function () {
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
        div.innerHTML=`
        <p>You have completed the task ${card-title} at 10:00 AM</p>
        `
        activityContainer.appendChild(div);
    })

}
