from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import uuid

app = Flask(__name__)
CORS(app)  # This will allow cross-origin requests

ISSUE_FILE = 'issues.json'
CONTACT_FILE = 'contacts.json'
REPORT_FILE = 'reports.json'

# Ensure files exist
for file in [ISSUE_FILE, CONTACT_FILE, REPORT_FILE]:
    if not os.path.exists(file):
        with open(file, 'w') as f:
            json.dump([], f)

def save_to_file(filename, data):
    with open(filename, 'r+') as file:
        contents = json.load(file)
        contents.append(data)
        file.seek(0)
        json.dump(contents, file, indent=4)

@app.route('/submit-issue', methods=['POST'])
def submit_issue():
    data = request.get_json()
    issue_id = str(uuid.uuid4())  # Generate a unique ID
    data['id'] = issue_id
    save_to_file(ISSUE_FILE, data)
    print(f"Issue submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Issue submitted successfully!', 'id': issue_id})

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    contact_id = str(uuid.uuid4())  # Generate a unique ID
    data['id'] = contact_id
    save_to_file(CONTACT_FILE, data)
    print(f"Contact submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Contact information submitted successfully!', 'id': contact_id})

@app.route('/submit-report', methods=['POST'])
def submit_report():
    data = request.form.to_dict()
    report_id = str(uuid.uuid4())  # Generate a unique ID
    data['id'] = report_id
    if 'photo' in request.files:
        photo = request.files['photo']
        photo_path = os.path.join('uploads', photo.filename)
        photo.save(photo_path)
        data['photo'] = photo_path
    save_to_file(REPORT_FILE, data)
    print(f"Report submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Report submitted successfully!', 'id': report_id})

if __name__ == '__main__':
    app.run(debug=True)
