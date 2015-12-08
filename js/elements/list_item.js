
var ListItem = React.createClass({
    displayName: 'ListItem',
    getInitialState: function() {
        return {
            title: this.props.title,
            notes: this.props.notes,
            url: this.props.url
        }
    },
    enableEditing: function() {
        console.log('edit button pressed for list item');
        console.log(this.state);
    },
    deleteItem: function() {
        console.log('delete button pressed for list item');
        console.log(this.state);
    },
    render: function() {
        return (
                React.createElement('li', {className: 'list-group-item'},
                    React.createElement('div',{className: 'row'},
                        React.createElement('div',{className: 'col-md-6'},
                            React.createElement('h1', null,
                                this.state.title
                                )
                            ),
                        React.createElement('div', {className: 'col-md-4'},
                            React.createElement('p', null,
                                this.state.notes
                                ),
                            React.createElement('p', null,
                                this.state.url
                                )
                        ),
                        React.createElement('div', {className: 'col-md-2'},
                            React.createElement('button',
                                {
                                    className: 'btn btn-primary btn-block',
                                    onClick: this.enableEditing
                                },
                                'edit'
                                ),
                            React.createElement('button',
                                {
                                    className: 'btn btn-danger btn-block',
                                    onClick: this.deleteItem
                                },
                                'delete'
                                )
                            )
                        )
                    )
                );
    }
});
