
var List = React.createClass({
    displayName: 'List',
    render: function() {
        var presents = null;
        if (typeof this.props.user != 'undefined') {
            presents = this.props.user.list.presents.map(function(p) {
                return React.createElement(ListItem, p);
            });
        }
        return (
                React.createElement('div', { className: 'row' },
                    React.createElement('div', { className: 'col-md-12' },
                        React.createElement('p', null),
                        React.createElement('ul', null,
                            {presents}
                            )
                        )
                    )
               );
    }
});

