from flask import Flask, render_template, jsonify
from flask_cors import CORS
import json
from individual_scrape import individual_scraper
from category_scape import category_scraper

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

url1 = 'https://www.bbcgoodfood.com/recipes/collection/easy-dinner-recipes'
category_data = category_scraper(url1, headers)

# print(category_data)

##################### Individual Recipe ###################
# url2 = 'https://www.bbcgoodfood.com/recipes/sausage-kale-gnocchi-one-pot'

# individual_scraper(url2, headers)
###########################################################

# api end point functionality below
app = Flask(__name__)
CORS(app)


# @app.route('/')
# def index():
#     return render_template('index.html')


@app.route('/')
def get_data():
    data = category_data
    return jsonify(data)
