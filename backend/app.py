from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask'}
    return jsonify(data)
