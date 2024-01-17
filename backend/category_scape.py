import requests
from bs4 import BeautifulSoup


def category_scraper(url, headers):
    response = requests.get(url, headers=headers)

    soup = BeautifulSoup(response.content, 'html.parser')

    title = soup.find('h1').text
    print(title)

    parent_ul = soup.find('ul', class_='dynamic-list__list list')

    recipes = []

    for li in parent_ul.find_all('li'):
        recipe_dict = {
            'title': li.article['data-item-name'],
            'description': li.p.text,
            'image': li.img['src'],
            'link': li.a['href'],
            'rating': li.span.text
        }

        recipes.append(recipe_dict)

        # print(li.a['href'])
        # print(li.article['data-item-name'])
        # print(li.img['src'])
        # print(li.p.text)
        # print(li.span.text)

    return recipes
