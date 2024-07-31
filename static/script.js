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

    // Contact status display
    const contactStatus = document.getElementById('contact-status');
    const statusTableBody = document.getElementById('status-table-body');
    
    // Retrieve contact data from localStorage
    const submissionId = localStorage.getItem('submissionId');
    if (submissionId) {
        contactStatus.style.display = 'block';
        fetch('http://127.0.0.1:5000/contact-data')
            .then(response => response.json())
            .then(data => {
                const contact = data.find(entry => entry.id === parseInt(submissionId));
                if (contact) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${contact.id}</td>
                        <td>${contact.received ? '✔️' : '❌'}</td>
                        <td>${contact.being_reviewed ? '✔️' : '❌'}</td>
                        <td>${contact.reviewed ? '✔️' : '❌'}</td>
                    `;
                    statusTableBody.appendChild(row);
                }
                localStorage.removeItem('submissionId');
            })
            .catch(error => {
                console.error('Error fetching contact data:', error);
                contactStatus.style.display = 'none';
            });
    } else {
        contactStatus.style.display = 'none';
    }
});
