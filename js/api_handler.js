
function get_presents_for_user(username) {

var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev';
var url = [base_url,'/user/',username,'/presents'].join('');
console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function(response) {
            return response;
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function get_user(username) {

var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/';
var url = [base_url,'user/',username].join('');
console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function(response) {
            return response;
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function get_present(title) {

var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/';
var url = [base_url,'present/',title].join('');
console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function(response) {
            return response;
        },
        error: function(error) {
            console.log(error);
        }
    });
};
function create_present(present) {

var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/present';

    $.ajax({
        url: base_url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(present),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function create_user(email) {

var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/user';

    $.ajax({
        url: base_url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({'email': email}),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
};
