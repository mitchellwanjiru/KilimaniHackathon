document.addEventListener('DOMContentLoaded', () => {
    // Chart.js example for statistics
    const ctx = document.getElementById('issuesChart').getContext('2d');
    const issuesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Water Shortage', 'Green Cover'],
            datasets: [{
                label: 'Issues Reported',
                data: [12, 19], // Example data
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Issue form submission
    document.getElementById('issueForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const issueType = document.getElementById('issueType').value;
        const description = document.getElementById('description').value;
        addIssue(issueType, description);
    });

    function addIssue(type, description) {
        const issueList = document.getElementById('issue-list');
        const newIssue = document.createElement('li');
        newIssue.textContent = `${type}: ${description}`;
        issueList.appendChild(newIssue);
        document.getElementById('issueForm').reset();
    }

    // Show the report form
    window.showReportForm = function() {
        document.getElementById('report-form').classList.toggle('active');
    };

    // Report issue button functionality
    window.reportIssue = function(type) {
        document.getElementById('issue-type').value = type;
    };
});
