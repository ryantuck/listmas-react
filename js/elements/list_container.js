var owner = 'ryan';

// var data = get_presents_for_user(owner);
// console.log(data);


var item_data = [
{
    props: {
        user: 'socrates',
        email: 'socs@gmail.com'
    },
    present: {
        title: 'ball',
        notes: 'louder the better',
        url: 'http://ball.com'
    }
},
{
    creds: {
        user: 'socrates',
        email: 'socs@gmail.com'
    },
    present: {
        title: 'twist tie',
        notes: 'white ones',
        url: 'http://tt.com'
    }
}
];

list_items = [];
for (var i=0; i< item_data.length; i++) {
    list_items.push(
        React.createElement(ListItem, item_data[i], null)
        );
}



//var user_stuff = get_user('ryan@ryantuck.io');
//
//var p = {
//    "title": "correctly formatted json"
//}
//
//create_user('socs@gmail.com')
//create_present(p);
//var pres = get_present('asdf');


//console.log(item_data);

var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        var children = React.Children.map(
                this.props.children,
                function(child) {
                    return child;
                });
        console.log('rendering list container');
        console.log(this.props);
        presents_list = [];
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, this.props, {children}),
                    React.createElement('hr', null),
                    React.createElement(NewPresentForm, this.props, {children}),
                    React.createElement('hr', null),
                    React.createElement(List, this.props, {children})
                    )
               );
    }
});

