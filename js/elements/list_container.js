
var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, this.props),
                    React.createElement('hr', null),
                    React.createElement(NewPresentForm, this.props),
                    React.createElement('hr', null),
                    React.createElement(List, this.props)
                    )
               );
    }
});

