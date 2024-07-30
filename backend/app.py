from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow cross-origin requests

@app.route('/submit-issue', methods=['POST'])
def submit_issue():
    data = request.get_json()
    print(f"Issue submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Issue submitted successfully!'})

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    print(f"Contact submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Contact information submitted successfully!'})

@app.route('/submit-report', methods=['POST'])
def submit_report():
    data = request.get_json()
    print(f"Report submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Report submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
