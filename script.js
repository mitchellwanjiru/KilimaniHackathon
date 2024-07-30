// document.addEventListener("DOMContentLoaded", function () {
//     const waterShortageCount = document.getElementById('water-shortage');
//     const greenCoverCount = document.getElementById('green-cover');
//     const reportForm = document.getElementById('report-form');

//     let waterShortageAreas = 0;
//     let greenCoverAreas = 0;

//     // Initialize map (Placeholder, replace with actual map integration)
//     const map = document.getElementById('map');
//     map.innerHTML = "<p>Map Placeholder</p>";

//     // Handle form submission
//     reportForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const issueType = document.getElementById('issue-type').value;
//         const location = document.getElementById('location').value;
//         const description = document.getElementById('description').value;
//         const userEmail = document.getElementById('user-email').value;
//         const userPhone = document.getElementById('user-phone').value;

//         const response = await fetch('/report', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ issueType, location, description, userEmail, userPhone })
//         });

//         const newIssue = await response.json();
//         addIssueToList(newIssue);
        

//         // Update statistics
//         if (issueType === 'water-shortage') {
//             waterShortageAreas++;
//             waterShortageCount.textContent = `Water Shortage Areas: ${waterShortageAreas}`;
//         } else if (issueType === 'green-cover') {
//             greenCoverAreas++;
//             greenCoverCount.textContent = `Green Cover Areas: ${greenCoverAreas}`;
//         }
//         // Additional code to handle file upload
//         const photo = document.getElementById('photo').files[0];
//         let photoData = null;
//         if (photo) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 photoData = e.target.result;

//         // Log issue (In a real app, this would be sent to a server)
//         console.log(`Issue Reported: ${issueType} at ${location} - ${description}`);

//         // Reset form
//         reportForm.reset();
//         });
// });

async function reportIssue() {
    const waterShortageCount = document.getElementById('water-shortage');
    const greenCoverCount = document.getElementById('green-cover');
    const reportForm = document.getElementById('report-form');

    let waterShortageAreas = 0;
    let greenCoverAreas = 0;

    // Initialize map (Placeholder, replace with actual map integration)
    const map = document.getElementById('map');
    map.innerHTML = "<p>Map Placeholder</p>";

    // Handle form submission
    reportForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const issueType = document.getElementById('issue-type').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        const userEmail = document.getElementById('user-email').value;
        const userPhone = document.getElementById('user-phone').value;

        const response = await fetch('/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ issueType, location, description, userEmail, userPhone })
        });

        const newIssue = await response.json();
        addIssueToList(newIssue);

        // Update statistics
        if (issueType === 'water-shortage') {
            waterShortageAreas++;
            waterShortageCount.textContent = `Water Shortage Areas: ${waterShortageAreas}`;
        } else if (issueType === 'green-cover') {
            greenCoverAreas++;
            greenCoverCount.textContent = `Green Cover Areas: ${greenCoverAreas}`;
        }

        // Additional code to handle file upload
        const photo = document.getElementById('photo').files[0];
        let photoData = null;
        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photoData = e.target.result;

                // Log issue (In a real app, this would be sent to a server)
                console.log(`Issue Reported: ${issueType} at ${location} - ${description}`);
            };
            reader.readAsDataURL(photo);
        }

        // Reset form
        reportForm.reset();
    });
}
