
function get_presents_for_user(username) {

    var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev';
    var url = [base_url,'/user/',username,'/presents'].join('');
    console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            return response;
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function get_user(username, callback) {

    var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/';
    var url = [base_url,'user/',username].join('');
    console.log(url);

    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function(response) {
            console.log('woohoo success');
            console.log(response);
            callback(response);
        },
        error: function(error) {
            console.log('wahhh error');
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
        dataType: 'json',
        success: function(response) {
            return response;
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function create_present(user, present) {

    var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/present';

    var payload = {
        'user': user,
        'present': present,
        'action': 'create'
    };

    $.ajax({
        url: base_url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
};

function update_present(user, present) {

    var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/present';

    var payload = {
        'user': user,
        'present': present,
        'action': 'update'
    };

    $.ajax({
        url: base_url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(payload),
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

function delete_present(user, present_id) {

    var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/present';

    var payload = {
        'user': user,
        'present_id': present_id
    };

    $.ajax({
        url: base_url,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
};









