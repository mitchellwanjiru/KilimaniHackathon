from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow cross-origin requests

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-issue', methods=['POST'])
def submit_issue():
    data = request.get_json()
    # Process the data and save it to a database or file
    print(f"Issue submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Issue submitted successfully!'})

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    # Process the data and save it to a database or file
    print(f"Contact submitted: {data}")  # For debugging
    return jsonify({'status': 'success', 'message': 'Contact information submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
