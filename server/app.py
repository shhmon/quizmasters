from flask import Flask, jsonify
from flask_restful import Resource, Api
from dataset import dataframe
from random import randint, shuffle
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

df = dataframe('dataset/output/*/*.parquet', ['word', 'definition', 'score'])


class Question(Resource):
		def get(self):
				result = {}
				indexes = [randint(0, df.shape[0]) for _ in range(4)]
				result['words'] = [df.iloc[i]['word'] for i in indexes]
				result['definition'] = df.iloc[indexes[3]]['definition']
				result['answer'] = df.iloc[indexes[3]]['word']
				result['score'] = df.iloc[indexes[3]]['score']

				shuffle(result['words'])

				return jsonify(result)


api.add_resource(Question, '/')

if __name__ == '__main__':
		app.run(debug=True, host='0.0.0.0')
