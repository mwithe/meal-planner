from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

url = 'https://www.bbcgoodfood.com/recipes/piri-piri-chicken-smashed-sweet-potatoes-broccoli'
response = requests.get(url, headers=headers)

soup = BeautifulSoup(response.content, 'html.parser')

# Recipe Title
recipe_title = soup.find(
    'h1', class_='heading-1').text

print(recipe_title)

# Recipe Image - find out how to send it as a template literal equivalent
recipe_image = soup.find('img', alt={{recipe_title}})
print(recipe_title['src'])

# Ingredients list - first grab the parent <ul>, then the descendant <li> items' text
ingredients_parent_ul = soup.find(
    'section', class_='recipe__ingredients col-12 mt-md col-lg-6').find_next('ul')

ingredients_list = list(ingredients_parent_ul.descendants)

lis = []

for li in ingredients_parent_ul.find_all('li'):
    print(li.text)


# api end point functionality below
app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask'}
    return jsonify(data)
