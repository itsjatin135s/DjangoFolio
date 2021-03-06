# DjangoFolio

<a href="https://badge.fury.io/py/djongo"><img src="https://badge.fury.io/py/djongo.svg" alt="PyPI version" height="18"></a>

Use MongoDB as a backend database for your Django project, without changing the Django ORM. Use the Django Admin GUI to add and modify documents in MongoDB. 

## Usage:
<ol>
<li> Install djongo:

``` 
pip install djongo
```
</li>
<li> Into settings.py file of your project, add: 

```python
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'your-db-name',
        'CLIENT': {
           'host': 'your-db-host',
        }
    }
}
```
</li>   
   <li> Run <code>manage.py makemigrations &ltapp_name&gt </code> followed by <code>manage.py migrate</code> (ONLY the first time to create collections in mongoDB) </li>
   <li> YOUR ARE SET! HAVE FUN! </li>
</ol>

## Requirements:

  1. Python 3.6 or higher.
  2. MongoDB 3.4 or higher.
  3. If your models use nested queries or sub querysets like:
  
      ```python
      inner_qs = Blog.objects.filter(name__contains='Ch').values('name')
      entries = Entry.objects.filter(blog__name__in=inner_qs)
      ```
     MongoDB 3.6 or higher is required.

## Dear Supporter

I am inundated daily with your love, appreciation, queries and feature requests for Djongo. Djongo has grown into more than a simple hobby project of an individual developer.

  
## Contribute
 
 If you think djongo is useful, **please share it** with the world! Your endorsements and online reviews will help get more support for this project.
  
 
 Add a star, show some love :) 

## Questions and Discussion

 * [Djongo groups](https://groups.google.com/d/forum/djongo) is where you can watch for new release announcements, suggest improvements, and discuss topics pertaining to Django and MongoDB.
 * Issues, where things are not working as expected, please raise a git-hub issue ticket. 
 * For questions and clarifications regarding usage, please put it up on stackoverflow instead. 
   

