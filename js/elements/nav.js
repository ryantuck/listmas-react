
var Nav = React.createClass({
    displayName: 'Nav',
    render: function() {
        return (
                React.createElement('div', {className: 'navbar navbar-default'},
                    React.createElement('div', {className: 'container'},
                        React.createElement('div', {className: 'navbar-header'},
                            React.createElement('a', {className: 'navbar-brand'}, 'listmas')
                            ),
                        React.createElement('div', {className: 'navbar-inner'},
                            React.createElement('p', {className: 'navbar-text'}, 'santa@listmas.io'),
                            React.createElement('ul', {className: 'nav navbar-nav navbar-right'},
                                React.createElement('li', {},
                                    React.createElement('a',{},'edit list')
                                    ),
                                React.createElement('li', {},
                                    React.createElement('a',{},'my list')
                                    ),
                                React.createElement('li', {},
                                    React.createElement('a',{},'sign out')
                                    )
                                )
                            )
                        )
                    )
               );
    }
});

