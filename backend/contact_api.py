from flask import Blueprint, request, jsonify

contact_api = Blueprint('contact_api', __name__)

@contact_api.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form.to_dict()
        print(data)
        return jsonify({'message': 'Contact form submitted successfully!'})
    except Exception as e:
        print(f"Error in submit_contact: {e}")
        return jsonify({'message': 'Failed to submit contact form.'}), 500
