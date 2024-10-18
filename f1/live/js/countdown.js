window.onload = function() {
    // Define your online periods
    const onlinePeriods = [
        {start: '2024-10-18T12:00:00+04:00', end:'2024-10-18T14:00:00+04:00'},
        //US GP
        { gpname: 'United States', racename:'Practice 1 Session',start: '2024-10-18T21:00:00+04:00', end: '2024-10-18T23:00:00+04:00' }, //Practice 1
        { gpname: 'United States', racename:'Sprint Qualifying',start: '2024-10-19T01:00:00+04:00', end: '2024-10-19T02:30:00+04:00' }, //SQ
        { gpname: 'United States', racename:'Sprint Race',start: '2024-10-19T21:30:00+04:00', end: '2024-10-19T23:30:00+04:00' }, //Sprint
        { gpname: 'United States', racename:'Qualifying Session',start: '2024-10-20T01:30:00+04:00', end: '2024-10-20T03:30:00+04:00' }, //Quali
        { gpname: 'United States', racename:'Race',start: '2024-10-20T22:30:00+04:00', end: '2024-10-21T01:30:00+04:00' }, //Race
        
        //México GP
        { gpname: 'México', racename:'Practice 1 Session',start: '2024-10-25T22:00:00+04:00', end: '2024-10-26T00:00:00+04:00' }, //Practice 1
        { gpname: 'México', racename:'Practice 2 Session',start: '2024-10-26T01:30:00+04:00', end: '2024-10-26T04:00:00+04:00' }, //Practice 2
        { gpname: 'México', racename:'Practice 3 Session',start: '2024-10-26T21:00:00+04:00', end: '2024-10-26T23:00:00+04:00' }, //Practice 3
        { gpname: 'México', racename:'Qualifying Session',start: '2024-10-27T00:30:00+04:00', end: '2024-10-27T02:30:00+04:00' }, //Quali
        { gpname: 'México', racename:'Race',start: '2024-10-27T23:30:00+04:00', end: '2024-10-28T02:30:00+04:00' }, //Race

        //Sao Paulo GP
        { gpname: 'São Paulo', racename:'Practice 1 Session',start: '2024-11-01T18:00:00+04:00', end: '2024-11-01T20:00:00+04:00' }, //Practice 1
        { gpname: 'São Paulo', racename:'Sprint Qualifying',start: '2024-11-01T22:00:00+04:00', end: '2024-11-01T23:30:00+04:00' }, //SQ
        { gpname: 'São Paulo', racename:'Sprint Race',start: '2024-11-02T17:30:00+04:00', end: '2024-11-02T19:30:00+04:00' }, //Sprint
        { gpname: 'São Paulo', racename:'Qualifying Session',start: '2024-11-02T21:30:00+04:00', end: '2024-11-02T23:30:00+04:00' }, //Quali
        { gpname: 'São Paulo', racename:'Race',start: '2024-11-03T20:30:00+04:00', end: '2024-11-03T23:30:00+04:00' }, //Race
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
            
                <div id="countdownTimer" class="countdown"><span style="font-size:30px;"><span style="color:white;">${days}</span>D <span style="color:white;">${hours}</span>H <span style="color:white;">${minutes}</span>M <span style="color:white;">${seconds}</span>S</span> <br><br>UNTIL THE <span style="color:white;">${nearestOnlinePeriod.gpname.toUpperCase()} GP's </span> ${nearestOnlinePeriod.racename.toUpperCase()}</div>
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
    }, 3000);
    
    
    // Initially update countdown
    updateCountdown();
    // Update countdown every second
    setInterval(updateCountdown, 1000);
};