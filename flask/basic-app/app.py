from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    """Render homepage"""
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    """Render about page"""
    return render_template('about.html', title='About')

@app.route('/api/data')
def get_data():
    """Sample API endpoint"""
    return jsonify({
        'status': 'success',
        'data': [1, 2, 3, 4, 5]
    })

@app.route('/submit', methods=['POST'])
def submit_form():
    """Handle form submission"""
    name = request.form.get('name')
    return f'Hello, {name}! Form submitted successfully.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
