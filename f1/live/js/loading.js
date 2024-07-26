window.onload = function() {
    // Show the loading overlay when the page loads
    document.querySelector('.loading-overlay').style.display = 'flex';

     // Hide the loading overlay after 3 seconds
    setTimeout(function() {
    document.querySelector('.loading-overlay').style.display = 'none';
    }, 5000);
    // Detect mobile devices and show a popup
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("If you'd like to view the telemetry, Please view this website on a desktop.");
    }
                            };