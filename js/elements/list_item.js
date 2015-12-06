
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
