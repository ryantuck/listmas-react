
var Nav = React.createClass({
    displayName: 'Nav',
    render: function() {
        console.log('rendering nav');
        console.log(this.props);
        var email = 'email@email.com';
        if (typeof this.props.user != 'undefined') {
            email = this.props.user.email;
        }
        return (
                React.createElement('div', {className: 'navbar navbar-default'},
                    React.createElement('div', {className: 'container'},
                        React.createElement('div', {className: 'navbar-header'},
                            React.createElement('a', {className: 'navbar-brand'},
                                'listmas'
                                )
                            ),
                        React.createElement('div', {className: 'navbar-inner'},
                            React.createElement('p', {className: 'navbar-text'},
                                email
                                ),
                            React.createElement('ul',
                                {className: 'nav navbar-nav navbar-right'},
                                React.createElement('li', null,
                                    React.createElement('a', null, 'edit list')
                                    ),
                                React.createElement('li', null,
                                    React.createElement('a',null, 'my list')
                                    ),
                                React.createElement('li', null,
                                    React.createElement('a', null, 'sign out')
                                    )
                                )
                            )
                        )
                    )
               );
    }
});

