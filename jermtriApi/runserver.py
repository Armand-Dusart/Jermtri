"""
This script runs the jermtriApi application using a development server.
"""

from os import environ
from flask import Flask, jsonify, request 
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(__name__)
api = Api(app)

CORS(app, resources={r"/*":{'origins':"*"}})
# CORS(app, resources={r'/*':{'origins': 'http://localhost:8080',"allow_headers": "Access-Control-Allow-Origin"}})

#! Controller
class TestApi(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(TestApi, '/')
class getProductById(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(getProductById, '/test')

#! Running

if __name__ == '__main__':
    HOST = environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(environ.get('SERVER_PORT', '2000'))
    except ValueError:
        PORT = 2000
    
    print(HOST, PORT)
    app.run(HOST, PORT)
