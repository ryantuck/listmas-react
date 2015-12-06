
var NewPresentForm = React.createClass({
    displayName: 'NewPresentForm',
    getInitialState: function() {
        return {
            title: 'fun present',
            notes: 'some notes here',
            url: 'http://apple.com'
        }
    },
    render: function() {
        return (
                React.createElement('div',
                    {
                        className: 'new-item-form'
                    },
                    React.createElement('form',
                        {},
                        React.createElement('h2',
                            {
                                className: 'new-present-form-title'
                            },
                            'Add a present!'
                            ),
                        React.createElement('div',
                            {
                                className: 'form-group'
                            },
                            React.createElement('input',
                                {
                                    className: 'form-control',
                                    placeholder: 'present title',
                                    value: null,
                                    onChange: this.titleChange
                                }
                                )
                            ),
                        React.createElement('div',
                            {
                                className: 'form-group'
                            },
                            React.createElement('input',
                                {
                                    className: 'form-control',
                                    placeholder: 'want this in all black',
                                    value: null,
                                    onChange: this.notesChange
                                }
                                )
                            ),
                        React.createElement('div',
                            {
                                className: 'form-group'
                            },
                            React.createElement('input',
                                {
                                    className: 'form-control',
                                    placeholder: 'http://amazon.com/awesome-present',
                                    value: null,
                                    onChange: this.urlChange
                                }
                                )
                            ),
                        React.createElement('button',
                            {
                                className: ' btn btn-default',
                                onClick: this.createPresent
                            },
                            'create present!'
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
        payload = this.state;
        $.ajax({
            url: 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/present',
            data: JSON.stringify(payload),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'POST',
            success: function(response) {
                console.log(response);
            }.bind(this),
            error: function(error) {
                console.log(error);
            }
        });
    }
});
