#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

# python manage.py flush --no-input
python manage.py makemigrations users
python manage.py makemigrations orgs
python manage.py makemigrations events
python manage.py makemigrations
python manage.py migrate users
python manage.py migrate orgs
python manage.py migrate events
python manage.py migrate 
python manage.py runserver 0.0.0.0:8000
gunicorn --bind 0.0.0.0:8000 --workers 3 iam.wsgi

exec "$@"