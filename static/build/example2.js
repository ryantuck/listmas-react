
// React Nesting Example

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
                        isBro: 'for sure'
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
            isBro: 'maybs'
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
                    React.createElement(ListItem, null)
                    )
               );
    }
});



React.render(
  React.createElement(ListContainer, null),
  document.getElementById('content')
);
