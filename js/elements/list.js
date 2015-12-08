
var List = React.createClass({
    displayName: 'List',
    render: function() {
        var presents = null;
        if (typeof this.props.user != 'undefined') {
            presents = this.props.user.list.presents.map(function(p) {
                p.email = this.props.user.email;
                return React.createElement(ListItem, p);
            }.bind(this));
        }
        return (
                React.createElement('div', { className: 'row' },
                    React.createElement('div', { className: 'col-md-12' },
                        React.createElement('p', null),
                        React.createElement('ul', {className: 'list-group'},
                            {presents}
                            )
                        )
                    )
               );
    }
});

