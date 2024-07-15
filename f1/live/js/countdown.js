window.onload = function() {
    // Define your online periods
    const onlinePeriods = [
        //Hungary GP
        { gpname: 'Hugarian', racename:'Practice 1 Session',start: '2024-07-19T15:00:00+04:00', end: '2024-07-19T17:00:00+04:00' }, //Practice 1
        { gpname: 'Hugarian', racename:'Practice 2 Session',start: '2024-07-19T18:30:00+04:00', end: '2024-07-19T20:30:00+04:00' }, //Practice 2
        { gpname: 'Hugarian', racename:'Practice 3 Session',start: '2024-07-20T14:00:00+04:00', end: '2024-07-20T16:00:00+04:00' }, //Practice 3
        { gpname: 'Hugarian', racename:'Qualifying Session',start: '2024-07-20T17:30:00+04:00', end: '2024-07-20T19:30:00+04:00' }, //Quali
        { gpname: 'Hugarian', racename:'Race',start: '2024-07-21T16:30:00+04:00', end: '2024-07-21T19:30:00+04:00' }, //Race

        //Belgium GP
        { gpname: 'Belgian', racename:'Practice 1 Session',start: '2024-07-26T15:00:00+04:00', end: '2024-07-26T17:00:00+04:00' }, //Practice 1
        { gpname: 'Belgian', racename:'Practice 2 Session',start: '2024-07-26T18:30:00+04:00', end: '2024-07-26T20:30:00+04:00' }, //Practice 2
        { gpname: 'Belgian', racename:'Practice 3 Session',start: '2024-07-27T14:00:00+04:00', end: '2024-07-27T16:00:00+04:00' }, //Practice 3
        { gpname: 'Belgian', racename:'Qualifying Session',start: '2024-07-27T17:30:00+04:00', end: '2024-07-27T19:30:00+04:00' }, //Quali
        { gpname: 'Belgian', racename:'Race',start: '2024-07-28T16:30:00+04:00', end: '2024-07-28T19:30:00+04:00' }, //Race
    ];
    showoverlay();
    function showoverlay(){
        const now = new Date();

    let isOnline = onlinePeriods.some(period => {
        const startTime = new Date(period.start);
        const endTime = new Date(period.end);
        return now >= startTime && now <= endTime;
    });

    if (!isOnline) {
        document.getElementById('streamOfflineOverlay').style.display = 'flex';
    }
    }
    

    // Function to find the nearest online period
    function findNearestOnlinePeriod() {
        const now = new Date();
        return onlinePeriods.reduce((nearest, period) => {
            const startTime = new Date(period.start);
            const endTime = new Date(period.end);
            if (startTime >= now && (!nearest || startTime < new Date(nearest.start))) {
                return period;
            }
            return nearest;
        }, null);
    }

    // Function to update countdown
    function updateCountdown() {
        const nearestOnlinePeriod = findNearestOnlinePeriod();
        if (!nearestOnlinePeriod) {
            document.getElementById('streamOfflineOverlay').querySelector('.logo').innerText = 'Stream is Offline!';
            return;
        }
        const now = new Date();
        const startTime = new Date(nearestOnlinePeriod.start);
        const diff = startTime - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('streamOfflineOverlay').innerHTML = `<div class="stream-info">
                <div class="logo-container">
                    <img class="offlinelogo" src="https://jdn24.github.io/f1/F1.png" alt="F1 Logo">
                    <p class="offlinetext">STREAM IS OFFLINE!</p>
                </div>
            
                <div id="countdownTimer" class="countdown"><span style="font-size:30px;">${days}D ${hours}H ${minutes}M ${seconds}S</span> <br><br>UNTIL THE <span style="color:white;">${nearestOnlinePeriod.gpname.toUpperCase()} GP's </span> ${nearestOnlinePeriod.racename.toUpperCase()}</div>
                <a href="https://jdn24.github.io/f1" class="home-button">Home</a>
            </div>`;
            // Check if the countdown has reached 0
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        window.location.reload(); // Refresh the page
        return; // Exit the function to prevent further execution
        }
    }
    

    // Show the loading overlay when the page loads
    document.querySelector('.loading-overlay').style.display = 'flex';

    // Hide the loading overlay after 3 seconds
    setTimeout(function() {
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 7000);
    
    
    // Initially update countdown
    updateCountdown();
    // Update countdown every second
    setInterval(updateCountdown, 1000);
};