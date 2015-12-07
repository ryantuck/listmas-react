
var List = React.createClass({
    displayName: 'List',
    render: function() {
        console.log('rendering list');
        console.log(this.props);

        var children = React.Children.map(
                this.props.children,
                function(child) {
                    return child;
                });

        var presents = null;
        if (typeof this.props.user != 'undefined') {
            presents = this.props.user.list.presents.map(function(p) {
                console.log(p);
                return React.createElement(ListItem, p);
            });
            console.log('printing presents');
            console.log(presents);
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

