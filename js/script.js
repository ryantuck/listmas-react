
// React Nesting Example

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
                    React.createElement('h2',
                        {
                            className: 'new-present-form-title'
                        },
                        'Add a present!'
                        ),
                    React.createElement('input',
                        {
                            className: 'new-present-title',
                            value: this.state.title,
                            onChange: this.titleChange
                        }
                        ),
                    React.createElement('input',
                        {
                            className: 'new-present-notes',
                            value: this.state.notes,
                            onChange: this.notesChange
                        }
                        ),
                    React.createElement('input',
                        {
                            className: 'new-present-url',
                            value: this.state.url,
                            onChange: this.urlChange
                        }
                        ),
                    React.createElement('button',
                        {
                            className: 'new-present-submit',
                            onClick: this.createPresent
                        },
                        'create present!'
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

var ListItem = React.createClass({
    displayName: 'ListItem',
    changeColor: function() {
            this.setState({
                count: this.state.count + 1
            });
            if (this.state.background == 'green') {
                this.setState({
                    background: 'red'
                });
            }
            else {
                this.setState({
                    background: 'green'
                });
            }
            var x = 5;
            $.ajax({
                url: '/get-data',
                success: function(response) {
                    x = response.bro;
                    console.log(x);
                    this.setState({
                        isBro: response.bro
                    });
                }.bind(this),
                error: function(error) {
                    console.log(error);
                }
            });
            $.ajax({
                url: 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/users',
                success: function(response) {
                    console.log(response);
                    this.setState({
                        api_response: response
                    });
                }.bind(this),
                error: function(error) {
                    console.log(error);
                }
            });
            console.log(x);

            console.log('background changed!');
            console.log(this.state.background);
            console.log(this.state.count);

    },
    getInitialState: function() {
        return {
            background: 'red',
            count: 0,
            isBro: 'maybs',
            api_Response: 'asdf'
        }
    },
    render: function() {
        return (
                React.createElement('div',
                    {
                        className: 'list-item',
                        style: { backgroundColor: this.state.background }
                    },
                    React.createElement('h1',
                        {
                            className: 'list-item-title'
                        },
                        this.state.count
                        ),
                    React.createElement('p',
                        {
                            className: 'list-item-notes',
                            style: { color: 'yellow' }
                        },
                        this.state.isBro
                        ),
                    React.createElement('p',
                        {
                            className: 'more_stuff',
                            style: { color: 'yellow' }
                        },
                        this.state.api_response
                        ),
                    React.createElement('button',
                        {
                            className: 'list-item-button',
                            onClick: this.changeColor
                        },
                        'claim'
                        )
                    )
               );
    }
});

var ListHeader = React.createClass({
    displayName: 'ListHeader',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-header'},
                    React.createElement('h1',
                        {className: 'list-header-title'},
                        'List Header Title'
                        )
                    )
               );
    }
});

var ListContainer = React.createClass({
    displayName: 'ListContainer',
    render: function() {
        return (
                React.createElement('div',
                    {className: 'list-container'},
                    React.createElement(ListHeader, null),
                    React.createElement(ListItem, null),
                    React.createElement(ListItem, null),
                    React.createElement(ListItem, null),
                    React.createElement(BroInput, null),
                    React.createElement(NewPresentForm,null)
                    )
               );
    }
});

var BroInput = React.createClass({
    displayName: 'BroInput',
    getInitialState: function() {
        return {
            inValue: 'bro bro bro'
        };
    },
    handleChange: function(evt) {
        this.setState({
            inValue: evt.target.value
        });
        console.log(this.state.inValue);
    },
    updateBro: function() {
        $.ajax({
            url: 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/create-user',
            data: JSON.stringify({ 'email': this.state.inValue }),
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

    },
    render: function() {
        return (
                React.createElement('div',
                    {
                        className: 'input-section'
                    },
                    React.createElement('input',
                        {
                            className: 'bro-input',
                            value: this.state.inValue,
                            onChange: this.handleChange
                        },
                        null
                        ),
                    React.createElement('button',
                        {
                            className: 'bro-input-submit',
                            onClick: this.updateBro
                        },
                        'update'
                        )
                    )
               );
    }
});



React.render(
  React.createElement(ListContainer, null),
  document.getElementById('content')
);
