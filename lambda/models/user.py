
import boto3

def get_user(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('users')

    item_key = event

    r = table.get_item(Key=item_key)

    return r['Item']

def create_user(event, context):

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

