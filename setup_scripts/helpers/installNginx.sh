#!/bin/bash

sudo cp setup_scripts/config/nginx.conf /etc/nginx/sites-available
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-enabled/nginx.conf
sudo ln -sF /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/nginx.conf
sudo pkill nginx
sudo service nginx stop
sudo service nginx start
