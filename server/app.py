from flask import Flask
from flask_restful import Resource, Api
from dataset import dataframe
from random import randint
import json

app = Flask(__name__)
api = Api(app)

df = dataframe('dataset/output/*/*.parquet', ['word', 'definition', 'score'])

class Question(Resource):
	def get(self):
		result = {}
		indexes = [randint(0, df.shape[0]) for _ in range(3)]
		result['words'] = [df.iloc[i]['word'] for i in indexes]
		result['definition'] = df.iloc[indexes[2]]['definition']
		result['answer'] = df.iloc[indexes[2]]['word']
		result['score'] = df.iloc[indexes[2]]['score']

		return json.dumps(result)

api.add_resource(Question, '/')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')
