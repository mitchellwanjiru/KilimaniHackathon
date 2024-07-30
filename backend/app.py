from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# Allow requests from the specific frontend origin
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

@app.route('/submit-report', methods=['POST'])
def submit_report():
    try:
        # Check if the request contains files
        if 'photo' in request.files:
            photo = request.files['photo']
            # Save or process the file if needed
            # Example: photo.save('/path/to/save/photo')

        # Process other form data
        data = request.form.to_dict()  # Get form data
        # For debugging purposes, print the data
        print(data)

        # Respond with a success message
        return jsonify({'message': 'Report submitted successfully!'})

    except Exception as e:
        # Log the error and return an error message
        print(f"Error in submit_report: {e}")
        return jsonify({'message': 'Failed to submit report.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
