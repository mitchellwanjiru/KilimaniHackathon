document.addEventListener('DOMContentLoaded', () => {
    const dashboardContent = {
        home: `<h2>Know Kilimani</h2>
                <p>Kilimani is a neighbourhood which houses a sizable segment of the upper middle income population of Nairobi...</p>`,
        issues: `<h2>What are the issues in Kilimani?</h2>
                <p>Kilimani faces various challenges. Please let us know about any issues you are experiencing...</p>
                <button onclick="showReportForm()">Report an Issue</button>
                <div id="report-form" class="hidden">
                    <h3>Report an Issue</h3>
                    <form id="issueForm">
                        <label for="issueType">Issue Type:</label>
                        <input type="text" id="issueType" name="issueType" placeholder="Enter issue type" required>
                        <label for="description">Issue Description:</label>
                        <textarea id="description" name="description" placeholder="Describe the issue here" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <ul id="issue-list"></ul>`,
        water: `<h2>Let us explore the water situation</h2>
                <p>Kilimani, once known for its reliable water supply, now faces a growing water crisis...</p>
                <button onclick="reportIssue('water')">Report a Water Issue</button>`,
        greenspace: `<h2>Green Space Crisis and Revival</h2>
                <p>The once lush green spaces of Kilimani have gradually diminished...</p>
                <button onclick="reportIssue('greenspace')">Report a Green Space Issue</button>`,
        maps: `<h2>Location</h2>
               <p>Kilimani is located approximately 5 kilometres (3 mi) west of Nairobi's central business district...</p>`,
        contact: `<h2>Contact Us</h2>
                  <form id="contactForm">
                      <label for="name">Name:</label>
                      <input type="text" id="name" name="name" required>
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required>
                      <label for="message">Message:</label>
                      <textarea id="message" name="message" required></textarea>
                      <button type="submit">Submit</button>
                  </form>`,
        report: `<h2>Report an Issue</h2>
                 <form id="report-form">
                     <label for="issue-type">Issue Type:</label>
                     <select id="issue-type" required>
                         <option value="water-shortage">Water Shortage</option>
                         <option value="green-cover">Green Cover</option>
                     </select>
                     <label for="location">Location:</label>
                     <select id="location" required>
                         <option value="">--Select Location--</option>
                         <option value="yaya-centre">Yaya Centre</option>
                         <option value="adams-arcade">Adams Arcade</option>
                         <option value="green-house">The Green House</option>
                         <option value="prestige-plaza">Prestige Plaza</option>
                         <option value="chandarana-foodplus">Chandarana Foodplus</option>
                         <option value="kings-gym">King's Gym</option>
                         <option value="kilimani-primary-school">Kilimani Primary School</option>
                         <option value="kenol-petrol-station">Kenol Petrol Station</option>
                         <option value="junction-mall">The Junction Mall</option>
                         <option value="lavington-mall">Lavington Mall</option>
                         <option value="kilimani-police-station">Kilimani Police Station</option>
                     </select>
                     <label for="description">Description:</label>
                     <textarea id="description" required></textarea>
                     <label for="photo">Upload Photo/Video:</label>
                     <input type="file" id="photo" name="photo" accept="image/*,video/*">
                     <label for="user-email">Email:</label>
                     <input type="email" id="user-email" name="user-email">
                     <label for="user-phone">Phone Number:</label>
                     <input type="tel" id="user-phone" name="user-phone">
                     <button type="submit">Submit</button>
                 </form>`
    };

    const contentDiv = document.getElementById('content');
    const sectionLinks = document.querySelectorAll('.section-link');

    // Function to display a specific section's content
    function showContent(section) {
        contentDiv.innerHTML = dashboardContent[section];
    }

    // Event listener for section links under the Dashboard
    sectionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });

    // Initialize the dashboard with a default view
    showContent('home');
});
