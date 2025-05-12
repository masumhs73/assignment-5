document.getElementById('btn-clearHistory')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const activityContainer = document.getElementById('activity-container');
        activityContainer.innerHTML = '';
    })