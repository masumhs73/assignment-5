let devCount = document.getElementById('dev-count').innerText;
let convertedDevCount = parseInt(devCount);
let taskAssign = document.getElementById('task-assign').innerText;
console.log(taskAssign);
let count = 0;
const buttons = document.querySelectorAll('.btnComplete');
for(const btnComplete of buttons){
    btnComplete.addEventListener('click', function(){
        alert('Board updated successfully');
        btnComplete.disabled = true;
        count ++;
        const updatedDevCount = convertedDevCount + count;
        // console.log(updatedDevCount);
        document.getElementById('dev-count').innerText = updatedDevCount;

    //    if(attempt >=1){
    //     const devNumber = convertedDevNumber + attempt;
    //     attempt++;
    //     console.log(devNumber);
    //    }
    })
}