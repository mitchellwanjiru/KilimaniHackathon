from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit-issue', methods=['POST'])
def submit_issue():
    data = request.json
    # Process the data and save it to a database or file
    return jsonify({'status': 'success', 'message': 'Issue submitted successfully!'})

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    data = request.json
    # Process the data and save it to a database or file
    return jsonify({'status': 'success', 'message': 'Contact information submitted successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
