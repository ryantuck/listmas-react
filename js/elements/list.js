
var List = React.createClass({
    displayName: 'List',
    render: function() {
        var children = React.Children.map(
                this.props.children,
                function(child) {
                    return child;
                });
        return (
                React.createElement('div', { className: 'row' },
                    React.createElement('div', { className: 'col-md-12' },
                        React.createElement('p',{},null),
                        React.createElement('ul',
                            {className: 'list-group'},
                            {children}
                            )
                        )
                    )
               );
    }
});

