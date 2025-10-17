document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('current-time');
    const avatarImage = document.getElementById('avatar-image');
    const avatarUpload = document.getElementById('avatar-upload');

    // 1. Update the current time every 100 milliseconds
    function updateTime() {
        if (timeElement) {
            timeElement.textContent = Date.now();
        }
    }
    // Initial call and set interval
    updateTime();
    setInterval(updateTime, 100);

    // 2. Handle avatar image upload
    if (avatarUpload && avatarImage) {
        avatarUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    // The result contains the data as a URL representing the file's data.
                    avatarImage.src = e.target.result;
                };
                
                // Read the image file as a data URL.
                reader.readAsDataURL(file);
            }
        });
    }
});
