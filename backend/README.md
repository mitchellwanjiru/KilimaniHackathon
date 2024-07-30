# Kilimani Issues Reporting Backend

This is the backend server for the Kilimani Issues Reporting system. It is built using Flask, a lightweight WSGI web application framework in Python. This server handles form submissions from the frontend and processes the data.

## Project Structure
project/
├── backend/
│ ├── app.py
│ ├── init.py
├── templates/
│ ├── index.html
├── static/
│ ├── styles.css
│ ├── script.js
├── venv/
└── requirements.txt

- `backend/app.py`: The main Flask application file.
- `backend/__init__.py`: The initializer file for the backend package.
- `templates/index.html`: The main HTML file for the frontend.
- `static/styles.css`: The CSS file for styling the frontend.
- `static/script.js`: The JavaScript file for frontend functionality.
- `venv/`: The virtual environment for Python packages.
- `requirements.txt`: The file containing the Python package dependencies.

## Setup

### Prerequisites

- Python 3.x
- Virtualenv (optional but recommended)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/kilimani-issues-reporting.git
    cd kilimani-issues-reporting
    ```

2. **Set up a virtual environment** (recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask application**:
    ```bash
    cd backend
    flask run
    ```

The server should now be running on `http://127.0.0.1:5000/`.

## API Endpoints

### `POST /submit-issue`

This endpoint handles the submission of issue reports.

- **Request Body**:
    ```json
    {
        "issueType": "string",
        "description": "string"
    }
    ```

- **Response**:
    ```json
    {
        "status": "success",
        "message": "Issue submitted successfully!"
    }
    ```

### `POST /submit-contact`

This endpoint handles the submission of contact information.

- **Request Body**:
    ```json
    {
        "name": "string",
        "email": "string",
        "message": "string"
    }
    ```

- **Response**:
    ```json
    {
        "status": "success",
        "message": "Contact information submitted successfully!"
    }
    ```

## Contributing

If you wish to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- The Flask framework: [Flask](https://flask.palletsprojects.com/)
- The Kilimani community for inspiring this project.
