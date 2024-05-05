const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

function fetchData() {
    // OUR PUBLIC TOKEN FROM ACCOUNT SECTION IN WEBSITE
    let token = 'BBUS-0UYsgnN53cuSgziuuoZVXN0j0gW1b7';

    console.log("FETCH DATA")

    axios.get(`https://stem.ubidots.com/api/v2.0/devices/65588852f7cea90750c74b89/variables?token=${token}`)
        .then(response => {
            const data = response.data;
            console.clear()
            console.log("DATA", data)

            let tempEl = document.getElementById('temperature');
            let humidityEl = document.getElementById('humidity');
            let speedEl = document.getElementById('wind_speed');
            let directionEl = document.getElementById('wind_direction');

            let temp = data.results.find(result => result.label == 'envtemp')?.lastValue?.value;

            let speed = data.results.find(result => result.label == 'windspeed')?.lastValue?.value;

            let direction = data.results.find(result => result.label == 'winddirection')?.lastValue?.value;

            let humidity = data.results.find(result => result.label == 'envhum')?.lastValue?.value;

            tempEl.innerHTML = temp;
            humidityEl.innerHTML = humidity;
            speedEl.innerHTML = speed;
            directionEl.innerHTML = direction;

            console.log("temp", {
                temp,
                speed,
                direction,
                humidity
            })

        })
        .catch(error => {
            console.error('Axios error:', error);
        });
}



// Get the temperature div element
const temperatureDiv = document.querySelector('.tempDiv');

// Add an event listener to this div
temperatureDiv.addEventListener('click', () => {
    // Get the temperature data
    const temperatureData = document.getElementById('temperature').innerHTML;

    // Store the data in local storage
    localStorage.setItem('temperature', temperatureData);

    // Redirect to the new page
    window.location.href = 'temp.html';
});

// fetchData() remains the same as in your existing code

//-----------------------------------
// Get the humidity div element
const humidityDiv = document.querySelector('.HumidityDiv');

// Add an event listener to this div
humidityDiv.addEventListener('click', () => {
    // Get the humidity data
    const humidityData = document.getElementById('humidity').innerHTML;

    // Store the data in local storage
    localStorage.setItem('humidity', humidityData);

    // Redirect to the new page
    window.location.href = 'humidity.html';
});

// fetchData() remains the same as in your existing code
//-----------------------------------------

// Get the wind speed div element
const windSpeedDiv = document.querySelector('.WindDiv');

// Add an event listener to this div
windSpeedDiv.addEventListener('click', () => {
    // Get the wind speed data
    const windSpeedData = document.getElementById('wind_speed').innerHTML;

    // Store the data in local storage
    localStorage.setItem('windSpeed', windSpeedData);

    // Redirect to the new page
    window.location.href = 'speed.html';
});

// fetchData() remains the same as in your existing code

//---------------------------------------------------
// Get the wind direction div element
const windDirectionDiv = document.querySelector('.DirectionDiv');

// Add an event listener to this div
windDirectionDiv.addEventListener('click', () => {
    // Get the wind direction data
    const windDirectionData = document.getElementById('wind_direction').innerHTML;

    // Store the data in local storage
    localStorage.setItem('windDirection', windDirectionData);

    // Redirect to the new page
    window.location.href = 'direction.html';
});

// fetchData() remains the same as in your existing code

function toggleTheme() {
    const body = document.body; // Access the document body directly
    body.classList.toggle('dark');

    // Check if 'dark' class is present to determine the current mode
    const isDarkMode = body.classList.contains('dark');

    // Update the theme-toggle checkbox state based on the mode
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.checked = isDarkMode;


    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Check if the user has a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
    const body = document.body;
    body.classList.add(savedTheme);
}




fetchData();
