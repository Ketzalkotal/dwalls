#!/bin/bash

virtualenv --python=/usr/bin/python3 venv
source venv/bin/activate
pip install -r requirements-to-freeze.txt --upgrade
pip freeze > requirements.txt
