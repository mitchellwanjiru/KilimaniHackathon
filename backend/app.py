from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.form.to_dict()
        print(data)
        return jsonify({'message': 'Contact form submitted successfully!'})
    except Exception as e:
        print(f"Error in submit_contact: {e}")
        return jsonify({'message': 'Failed to submit contact form.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
