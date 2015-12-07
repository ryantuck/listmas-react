
import boto3
import decimal

def get_user(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    item_key = event

    r = table.get_item(Key=item_key)

    # hack to properly return decimal values in dicts
    return replace_decimals(r['Item'])

def put_user(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    item = event

    r = table.put_item(Item=item)

    return r

def delete_user(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    item_key = event

    r = table.delete_item(Key=item_key)

    return r

# stupid helper functions
def create_user(event, context):
    return put_user(event, context)
def update_user(event, context):
    return put_user(event, context)

# taken from @garnaat for dealing with dynamodb decimal issues
def replace_decimals(obj):
    if isinstance(obj, list):
        for i in xrange(len(obj)):
            obj[i] = replace_decimals(obj[i])
        return obj
    elif isinstance(obj, dict):
        for k in obj.iterkeys():
            obj[k] = replace_decimals(obj[k])
        return obj
    elif isinstance(obj, decimal.Decimal):
        if obj % 1 == 0:
            return int(obj)
        else:
            return float(obj)
    else:
        return obj
