
import boto3
from boto3.dynamodb.conditions import Key, Attr

def get(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('presents')

    item_key = event

    r = table.get_item(Key=item_key)

    return r['Item']

def get_user_presents(event, context):

    dynamo = boto3.resource('dynamodb')
    presents = dynamo.Table('presents')
    users = dynamo.Table('users')

    exp = Attr('owner').eq(event['owner'])

    r = presents.scan(FilterExpression=exp)

    return r['Items']

def create(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('presents')

    item = event

    r = table.put_item(Item=item)

    return r

def delete(event, context):

    dynamo = boto3.resource('dynamodb')
    table = dynamo.Table('presents')

    item_key = event

    r = table.delete_item(Key=item_key)

    return r

