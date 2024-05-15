function szDisplayNumber(id, number) {
    // 如果id是'year', 'month'或'day'，则长度为4或2，否则不变
    let displayNumber = number;
    if (id === 'year') {
        displayNumber = String(number).padStart(4, '0');
    } else if (id === 'month' || id === 'day') {
        displayNumber = String(number).padStart(2, '0');
    }
    document.getElementById("sz-" + id).innerText = displayNumber;
    document.getElementById("sc-" + id).innerText = displayNumber;
}

function szDisplayTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // JavaScript months are 0-11
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    szDisplayNumber('year', year);
    szDisplayNumber('month', month);
    szDisplayNumber('day', day);
    szDisplayNumber('hours-tens', Math.floor(hours / 10));
    szDisplayNumber('hours-ones', hours % 10);
    szDisplayNumber('minutes-tens', Math.floor(minutes / 10));
    szDisplayNumber('minutes-ones', minutes % 10);
    szDisplayNumber('seconds-tens', Math.floor(seconds / 10));
    szDisplayNumber('seconds-ones', seconds % 10);

    setTimeout(szDisplayTime, 1000);
}

window.onload = szDisplayTime;
