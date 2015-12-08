
import boto3
import uuid
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

def put_present_for_user(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    em = event['user']
    p = event['present']

    u = user_from_email(em, table)
    presents = u['list']['presents']
    update_present_from_id(presents, p['id'], p)
    u['list']['presents'] = presents

    r = table.put_item(Item=u)
    return r

def user_from_email(user_email, table):
    em_key = {'email': user_email}
    u = table.get_item(Key=em_key)
    return u

def present_from_id(presents, present_id):
    present = None
    # find present with given id
    for i, p in enumerate(presents):
        if p['id'] == present_id:
            present_idx = p
            break
    return present

def update_present_from_id(presents, present_id, present_params):
    present = present_from_id(presents, present_id)
    present.update(present_params)


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
