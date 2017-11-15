#!/bin/bash

# config one liner
# https://artandlogic.com/2016/06/django-channels-ground-part-1/
sudo apt-get install -y python3-dev
sudo apt-get install -y libpq-dev
sudo apt-get install -y postgresql
sudo apt-get install -y postgresql-contrib
sudo apt-get install -y nginx
sudo apt-get install -y supervisor
sudo apt-get install -y python-software-properties
sudo apt-get install -y redis-server

# python environment config
sudo apt-get install -y python3-pip
sudo apt-get install -y python3-venv

# git config for dev servers
git config --global push.default simple

# firewall config for dev
sudo ufw allow 8000
sudo ufw allow http
sudo ufw allow https
