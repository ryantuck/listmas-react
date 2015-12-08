
var NewPresentForm = React.createClass({
    displayName: 'NewPresentForm',
    getInitialState: function() {
        return {
            title: null,
            notes: null,
            url: null
        }
    },
    render: function() {
        return (
                React.createElement('div', { className: 'row' },
                    React.createElement('div', { className: 'col-md-12' },
                        React.createElement('form', null,
                            React.createElement('h3', null,
                                'Add a present!'
                                ),
                            // title
                            React.createElement('div', {className: 'form-group'},
                                React.createElement('input', {
                                        className: 'form-control',
                                        placeholder: 'present title',
                                        value: null,
                                        onChange: this.titleChange
                                    })
                                ),
                            // notes
                            React.createElement('div', {className: 'form-group'},
                                React.createElement('input', {
                                        className: 'form-control',
                                        placeholder: 'want this in all black',
                                        value: null,
                                        onChange: this.notesChange
                                    })
                                ),
                            // url
                            React.createElement('div', {className: 'form-group'},
                                React.createElement('input', {
                                        className: 'form-control',
                                        placeholder: 'http://amazon.com/awesome-present',
                                        value: null,
                                        onChange: this.urlChange
                                    })
                                ),
                            // submit button
                            React.createElement('button', {
                                    className: ' btn btn-success btn-block',
                                    onClick: this.createPresent
                                },
                                'create present!'
                                )
                            )
                        )
                    )
               );
    },
    titleChange: function(evt) {
        this.setState({
            title: evt.target.value
        });
    },
    notesChange: function(evt) {
        this.setState({
            notes: evt.target.value
        });
    },
    urlChange: function(evt) {
        this.setState({
            url: evt.target.value
        });
    },
    createPresent: function(evt) {
        create_present(this.props.user.email, this.state);
    }
});
