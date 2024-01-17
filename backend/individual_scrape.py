import requests
from bs4 import BeautifulSoup


def individual_scraper(url, headers):
    response = requests.get(url, headers=headers)

    soup = BeautifulSoup(response.content, 'html.parser')

    # Recipe Title
    recipe_title = soup.find(
        'h1', class_='heading-1').text

    print(f'Recipe Title: {recipe_title}')

    # Recipe Image
    recipe_image = soup.find('img', alt=True)

    print(f'Image is {recipe_image['src']}')
    # for element in recipe_image:
    #     print(element['src'])

    # Ingredients list - first grab the parent <ul>, then the descendant <li> items' text
    ingredients_parent_ul = soup.find(
        'section', class_='recipe__ingredients col-12 mt-md col-lg-6').find_next('ul')

    # ingredients_list = list(ingredients_parent_ul.descendants)

    ingredients = []

    for li in ingredients_parent_ul.find_all('li'):
        ingredients.append(li.text)

    print(f'Ingredients are: {ingredients}')
