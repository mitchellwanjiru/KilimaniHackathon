from flask import Blueprint, request, jsonify
import json
import os
from datetime import datetime

contact_api = Blueprint('contact_api', __name__)

# File to store contact form submissions
CONTACT_DATA_FILE = 'contact_data.json'

# Ensure the file exists
if not os.path.exists(CONTACT_DATA_FILE):
    with open(CONTACT_DATA_FILE, 'w') as f:
        json.dump([], f)

@contact_api.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form.to_dict()
        # Generate an ID for the contact form entry
        contact_id = datetime.now().strftime('%Y%m%d%H%M%S')
        timestamp = datetime.now().isoformat()
        
        contact_entry = {
            'id': contact_id,
            'timestamp': timestamp,
            **data
        }

        # Append the contact entry to the JSON file
        with open(CONTACT_DATA_FILE, 'r') as f:
            contact_data = json.load(f)
        contact_data.append(contact_entry)
        with open(CONTACT_DATA_FILE, 'w') as f:
            json.dump(contact_data, f, indent=4)

        return jsonify({
            'message': 'Contact form submitted successfully!',
            'id': contact_id,
            'timestamp': timestamp
        })
    except Exception as e:
        print(f"Error in submit_contact: {e}")
        return jsonify({'message': 'Failed to submit contact form.'}), 500
