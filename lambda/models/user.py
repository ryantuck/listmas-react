
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

def post_present_for_user(event, context):

    em = event['user']
    p = event['present']
    action = event['action']

    if action == 'create':
        return create_present_for_user(event, context)
    elif action == 'update':
        dynamo = boto3.resource('dynamodb')
        table = dynamo.Table('users')
        u = user_from_email(em, table)
        presents = u['list']['presents']
        update_present_from_id(presents, p['id'], p)
        u['list']['presents'] = presents
        
        x = replace_empty_strings(u)
        print x

        r = table.put_item(Item=x)
        return r

def create_present_for_user(event, context):
    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    em = event['user']
    params = event['present']

    u = user_from_email(em, table)
    present = new_present_with_params(params)
    u['list']['presents'].append(present)
    
    x = replace_empty_strings(u)
    print x

    r = table.put_item(Item=x)
    return r

def delete_present_for_user(event, context):
    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    em = event['user']
    p_id = event['present_id']

    u = user_from_email(em, table)
    presents = u['list']['presents']
    idx = None
    for i, p in enumerate(presents):
        if p['id'] == p_id:
            idx = i
            break
    presents.pop(idx)

    r = table.put_item(Item=u)
    return r



def new_present_with_params(params):
    p = {
            'id': str(uuid.uuid4()),
            'published': False
            }
    p.update(params)
    return p

def user_from_email(user_email, table):
    em_key = {'email': user_email}
    u = table.get_item(Key=em_key)
    return replace_decimals(u['Item'])

def present_from_id(presents, present_id):
    present = None
    # find present with given id
    for i, p in enumerate(presents):
        if p['id'] == present_id:
            present = p
            break
    return present

def update_present_from_id(presents, present_id, present_params):
    present = present_from_id(presents, present_id)
    print present
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
        
def replace_empty_strings(obj):
    if isinstance(obj, list):
        for i in xrange(len(obj)):
            obj[i] = replace_empty_strings(obj[i])
        return obj
    elif isinstance(obj, dict):
        for k in obj.iterkeys():
            obj[k] = replace_empty_strings(obj[k])
        return obj
    elif isinstance(obj, unicode):
        if obj == '':
            return None
        else:
            return obj
    else:
        return obj
