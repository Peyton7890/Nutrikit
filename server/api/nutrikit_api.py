from flask_restful import Resource, reqparse
from .swen_344_db_utils import *

class GetFood(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
        result = exec_get_all("SELECT * FROM foods")
        return result

class UpdateFood(Resource):
    def put(self):
    # NOTE: No need to replicate code; use the util function!
        parser = reqparse.RequestParser()
        parser.add_argument('calories')
        parser.add_argument('totalFat')
        parser.add_argument('satFat')
        parser.add_argument('transFat')
        parser.add_argument('protein')
        parser.add_argument('carb')
        parser.add_argument('name')
        args = parser.parse_args()
        
        exec_commit('''UPDATE foods SET calories = %s, totalFat = %s, satFat = %s, transFat  = %s, protein  = %s, carb = %s WHERE name = %s''', (args['calories'], args['totalFat'], args['satFat'], args['transFat'], args['protein'], args['carb'], args['name']))
        