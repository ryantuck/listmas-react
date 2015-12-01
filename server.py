
from flask import Flask, jsonify, render_template, request
import json

app = Flask(__name__)

myVariable = 5

with open('data.json') as f:
    data = json.load(f)

@app.route('/')
def hello():
  global myVariable
  x = myVariable
  return render_template('index.html',**locals())

@app.route('/changeX',methods=['POST'])
def changeX():
  y = request.json['num']
  global myVariable
  myVariable = y
  x = myVariable
  print 'changeX route'
  print 'y = ', y
  print 'myVariable = ', myVariable
  return jsonify(**locals())

@app.route('/get-data', methods=['GET'])
def get_data():
    return jsonify(data)


if __name__ == '__main__':
  app.debug = True
  app.run('0.0.0.0', port=4444)
