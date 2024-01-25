import requests
from bs4 import BeautifulSoup


def individual_scraper(url, headers):
    response = requests.get(url, headers=headers)

    soup = BeautifulSoup(response.content, 'html.parser')

    # Recipe Title
    recipe_title = soup.find(
        'h1', class_='heading-1').text

    # Recipe Image
    recipe_image = soup.find('img', alt=True)

    # Recipe Description
    recipe_description = soup.find(
        'div', class_="editor-content mt-sm pr-xxs hidden-print").text

    recipe_id = soup.find('div', class_='post recipe')['data-item-id']

    # Recipe dictionary to be sent to front end
    recipe_set = {'title': recipe_title,
                  'image': recipe_image['src'], 'description': recipe_description, 'id': recipe_id, 'ingredients': [], 'method': []}

    # Ingredients list - first grab the parent <ul>, then the descendant <li> items' text; append to dict
    ingredients_parent_ul = soup.find(
        'section', class_='recipe__ingredients col-12 mt-md col-lg-6').find_next('ul')

    for li in ingredients_parent_ul.find_all('li'):
        recipe_set['ingredients'].append(li.text)

    # Method list - grab parent <ul> and iterate over each <li> to grab <p>.text; append to dict
    parent_method_ul = soup.find(
        'section', class_="recipe__method-steps mb-lg col-12")

    for li in parent_method_ul.find_all('li'):
        recipe_set['method'].append(li.p.text)

    return recipe_set
