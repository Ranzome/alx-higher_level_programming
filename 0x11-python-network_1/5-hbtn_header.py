#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL and displays
"""
import requests
import sys


if __name__ == "__main__":
    url = sys.argv[1]
    response = requests.get(url)
    value = response.headers.get("X-Request-Id")
    print(value)
