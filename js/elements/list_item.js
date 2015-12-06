
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

            console.log('background changed!');
            console.log(this.state.background);
            console.log(this.state.count);

    },
    printTest: function() {
        console.log(this.props);
    },
    getInitialState: function() {
        return {
            background: 'red',
            count: 0,
            isBro: 'maybs',
            api_Response: 'asdf',
            title: this.props.present.title,
            notes: this.props.present.notes,
            url: this.props.present.url
        }
    },
    render: function() {
        return (
                React.createElement('li',
                    {
                        className: 'list-group-item'
                    },
                    React.createElement('div',
                        {
                            className: 'row'
                        },
                        React.createElement('div',
                            {
                                className: 'col-md-6'
                            },
                            React.createElement('h1',
                                {
                                    className: 'list-item-title'
                                },
                                this.state.title
                                )
                            ),
                        React.createElement('div',
                            {
                                className: 'col-md-4'
                            },
                            React.createElement('p',
                                {
                                    className: 'list-item-notes'
                                },
                                this.state.notes
                                ),
                            React.createElement('p',
                                {
                                    className: 'more_stuff'
                                },
                                this.state.url
                                )
                        ),
                        React.createElement('div',
                            {
                                className: 'col-md-2'
                            },
                            React.createElement('button',
                                {
                                    className: 'btn btn-primary btn-block',
                                    onClick: this.printTest
                                },
                                'edit'
                                ),
                            React.createElement('button',
                                {
                                    className: 'btn btn-danger btn-block',
                                    onClick: this.changeColor
                                },
                                'delete'
                                )
                            )
                        )
                    )
                );
    }
});
