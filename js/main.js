//Dom elements
const time = document.getElementById('time'),
    name = document.getElementById('name'),
    greeting = document.getElementById('greeting'),
    focus = document.getElementById('focus');

//Show Am || Pm
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Show AM || PM 
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 Hour format
    hour = hour % 12 || 12;

    //OutPut Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ' '}`;
    setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/217114/pexels-photo-217114.jpeg?crop=entropy&cs=srgb&dl=beautiful-color-dawn-217114.jpg&fit=crop&fm=jpg&h=1280&w=1920')";
        greeting.textContent = 'Good Morning';
        document.body.style.backgroundRepeat = "no - repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'white';
    } else if (hour < 17) {
        //Afternoon
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2421022/pexels-photo-2421022.jpeg?crop=entropy&cs=srgb&dl=big-wheel-carnival-dark-2421022.jpg&fit=crop&fm=jpg&h=1280&w=1920')";
        document.body.style.backgroundRepeat = "no - repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else if (hour < 20) {
        //Evening
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/217114/pexels-photo-217114.jpeg?crop=entropy&cs=srgb&dl=beautiful-color-dawn-217114.jpg&fit=crop&fm=jpg&h=1280&w=1920')";
        document.body.style.backgroundRepeat = "no - repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'black';
    } else {
        //Night
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/217114/pexels-photo-217114.jpeg?crop=entropy&cs=srgb&dl=beautiful-color-dawn-217114.jpg&fit=crop&fm=jpg&h=1280&w=1920')";
        document.body.style.backgroundRepeat = "no - repeat";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

//Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Add EventListener
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();
