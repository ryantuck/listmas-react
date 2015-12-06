
var Listmas = React.createClass({
    displayName: 'Listmas',
    render: function() {
        return (
                React.createElement('div', {className: 'listmas-container'},
                    React.createElement(Nav, null),
                    React.createElement('div', {className: 'container'},
                        React.createElement('div', {className: 'row'},
                            React.createElement('div', {className: 'col-md-12'},
                                React.createElement(ListContainer, null)
                                )
                            )
                        )
                    )
               );
    }
});

