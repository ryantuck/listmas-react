
var ListItem = React.createClass({
    displayName: 'ListItem',
    getInitialState: function() {
        return {
            title: this.props.title,
            notes: this.props.notes,
            url: this.props.url,
            id: this.props.id,
            published: this.props.published,
            editing: false,
            tmp: {
                title: null,
                notes: null,
                url: null
            }
        }
    },
    enableEditing: function() {
        newState = React.addons.update(this.state, {
            editing: {$set: true},
            tmp: {
                title: {$set: this.state.title},
                notes: {$set: this.state.notes},
                url: {$set: this.state.url}
            }
        });
        this.setState(newState);
    },
    deleteItem: function() {
        delete_present(this.props.email, this.props.id);
    },
    tmpTitleChange: function(evt) {
        newState = React.addons.update(this.state, {
            tmp: {
                title: {$set: evt.target.value},
            }
        });
        this.setState(newState);
    },
    tmpNotesChange: function(evt) {
        newState = React.addons.update(this.state, {
            tmp: {
                notes: {$set: evt.target.value},
            }
        });
        this.setState(newState);
    },
    tmpUrlChange: function(evt) {
        newState = React.addons.update(this.state, {
            tmp: {
                url: {$set: evt.target.value},
            }
        });
        this.setState(newState);
    },
    saveChanges: function() {
        // update on server side
        payload = {
            id: this.state.id,
            title: this.state.tmp.title,
            notes: this.state.tmp.notes,
            url: this.state.tmp.url
        };
        update_present(this.props.email, payload);
        // update on front end
        this.setState({
            editing:false,
            title: this.state.tmp.title,
            notes: this.state.tmp.notes,
            url: this.state.tmp.url,
            tmp: {
                title: null,
                notes: null,
                url: null
            }
        });

    },
    cancelEditing: function() {
        this.setState({
            editing:false,
            tmp: {
                title: null,
                notes: null,
                url: null
            }
        });
    },
    render: function() {

        var list_stuff;

        if (this.state.editing) {

            list_stuff = React.createElement('div', {className: 'row'},
                            React.createElement('div',{className: 'col-md-10'},
                                React.createElement('form', null,
                                    // title
                                    React.createElement('div', {className: 'form-group'},
                                        React.createElement('input', {
                                                className: 'form-control',
                                                placeholder: 'present title',
                                                value: this.state.tmp.title,
                                                onChange: this.tmpTitleChange
                                            })
                                        ),
                                    // notes
                                    React.createElement('div', {className: 'form-group'},
                                        React.createElement('input', {
                                                className: 'form-control',
                                                placeholder: 'want this in all black',
                                                value: this.state.tmp.notes,
                                                onChange: this.tmpNotesChange
                                            })
                                        ),
                                    // url
                                    React.createElement('div', {className: 'form-group'},
                                        React.createElement('input', {
                                                className: 'form-control',
                                                placeholder: 'http://amazon.com/awesome-present',
                                                value: this.state.tmp.url,
                                                onChange: this.tmpUrlChange
                                            })
                                        )
                                    )
                                ),
                            React.createElement('div', {className: 'col-md-2'},
                                React.createElement('button',
                                    {
                                        className: 'btn btn-primary btn-block',
                                        onClick: this.saveChanges
                                    },
                                    'save'
                                    ),
                                React.createElement('button',
                                    {
                                        className: 'btn btn-default btn-block',
                                        onClick: this.cancelEditing
                                    },
                                    'cancel'
                                    )
                                )
                            )

        }
        else {

            list_stuff = React.createElement('div', {className: 'row'},
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
                                        className: 'btn btn-default btn-block',
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

        }

        return (
                React.createElement('li', {className: 'list-group-item'},
                    // conditionally show different views if currently editing
                    { list_stuff }
                    )
                );
    }
});
