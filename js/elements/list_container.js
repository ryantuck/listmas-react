
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


console.log(item_data);

var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, null),
                    React.createElement(NewPresentForm,null),
                    React.createElement(List,{asdf: 'asdf'},{list_items})
                    )
               );
    }
});

