
let notifications = document.querySelector('.Notification');
let Success = document.getElementById('Success');
let error = document.getElementById('Error');
let warning = document.getElementById('Warning');
let info = document.getElementById('info');


function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
    notifications.append(newToast);
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 5000
    )
}

Success.onclick = function () {
    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Success';
    let text = 'this is a success toast.'
    createToast(type, icon, title, text);
}
error.onclick = function () {
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let text = 'This is a error toast.';
    createToast(type, icon, title, text);
}
warning.onclick = function () {
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Warning';
    let text = 'This is a warning toast.';
    createToast(type, icon, title, text);
}
info.onclick = function () {
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Info';
    let text = 'This is a info toast.';
    createToast(type, icon, title, text);
}

