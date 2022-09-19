from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.nutrikit_api import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(GetFood,'/nutrikit_api')
api.add_resource(UpdateFood,'/nutrikit_api/update')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('food.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask



    