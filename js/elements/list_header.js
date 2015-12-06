
var ListHeader = React.createClass({
    displayName: 'ListHeader',
    render: function() {
        return (
                React.createElement('div', {className: 'row'},
                    React.createElement('div', {className: 'col-md-10'},
                        React.createElement('h1', null,
                            'List Header Title'
                            )
                        ),
                    React.createElement('div', {className: 'col-md-2'},
                        React.createElement('p', null,
                            'status: unpublished'
                            ),
                        React.createElement('button',
                            {className: 'btn btn-success btn-block'},
                            'publish!'
                            )
                        )
                    )
               );
    }
});

