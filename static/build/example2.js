
// React Nesting Example

var ListItem = React.createClass({
    displayName: 'ListItem',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-item'},
                    React.createElement('h1',
                        {className: 'list-item-title'},
                        'list item title'
                        )
                    )
               );
    }
});

var ListHeader = React.createClass({
    displayName: 'ListHeader',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-header'},
                    React.createElement('h1',
                        {className: 'list-header-title'},
                        'List Header Title'
                        )
                    )
               );
    }
});

var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, null),
                    React.createElement(ListItem, null),
                    React.createElement(ListItem, null),
                    React.createElement(ListItem, null)
                    )
               );
    }
});



React.render(
  React.createElement(ListContainer, null),
  document.getElementById('content')
);
