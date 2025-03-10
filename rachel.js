<?php

    
from flask import Flask, jsonify

app = Flask(__name__)

# Sample list of classmates' names
classmates = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Emma Davis",
    "Ibyimanikora Rachel",
    "Muhire Aime Christian",
    "Cyiza Marie Claire",
    "Mugisha Damien",
    "Mugisha Emmanuel",
    "Niyonkuru Innocent",
    "Mukasangwa Liliane",
    "Musabyisoni Olive",
    "Izikiteganya Jean Pierre",
    "Bwabonimana Mutagoma August"
]

@app.route('/')
def home():
    return "Welcome to the Classmates List Server! Visit /classmates to see the list."

@app.route('/classmates')
def get_classmates():
    return jsonify(classmates)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    

 ?>