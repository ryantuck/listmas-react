
var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, null),
                    React.createElement(NewPresentForm,null),
                    React.createElement(List,null)
                    )
               );
    }
});

