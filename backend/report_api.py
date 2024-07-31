from flask import Blueprint, request, jsonify
import os

report_api = Blueprint('report_api', __name__)

@report_api.route('/api/report', methods=['POST'])
def report_issue():
    data = request.form.to_dict()
    file = request.files.get('photo')
    
    # Save the uploaded file if it exists
    if file:
        file_path = os.path.join('../static/uploads', file.filename)
        file.save(file_path)
        data['file_path'] = file_path

    # Save the form data to a file (or database)
    with open('../storage/reports.json', 'a') as f:
        f.write(f'{data}\n')

    return jsonify({'status': 'success', 'data': data}), 201
