
var ListHeader = React.createClass({
    displayName: 'ListHeader',
    getInitialState: function() {
        return {
        list_title: 'Listmas List',
        is_published: false
        };
    },
    componentWillReceiveProps: function(newprops) {
        if (typeof newprops.user != 'undefined') {
            this.setState({
                list_title: newprops.user.list.name,
                is_published: newprops.user.list.published
            });
        }
    },
    render: function() {
        var published_str;
        if (this.state.is_published) {
            published_str = 'published!';
        } else {
            published_str = 'unpublished :(';
        }
        return (
                React.createElement('div', {className: 'row'},
                    React.createElement('div', {className: 'col-md-9'},
                        React.createElement('h1', null,
                            this.state.list_title
                            )
                        ),
                    React.createElement('div', {className: 'col-md-3'},
                        React.createElement('p', null,
                            'status: '.concat(published_str)
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

