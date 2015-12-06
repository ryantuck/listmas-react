
var List = React.createClass({
    displayName: 'List',
    render: function() {
        return (
                React.createElement('div', { className: 'row' },
                    React.createElement('div', { className: 'col-md-12' },
                        React.createElement('ul',
                            {className: 'list-group'},
                            React.createElement('p',{},null),
                            React.createElement(ListItem, null),
                            React.createElement(ListItem, null),
                            React.createElement(ListItem, null)
                            )
                        )
                    )
               );
    }
});

