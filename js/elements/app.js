var Listmas = React.createClass({
    displayName: 'Listmas',
    componentDidMount: function() {
        this.loadEverything();
    },
    loadEverything: function() {
        var base_url = 'https://uebxofiaf4.execute-api.us-west-2.amazonaws.com/dev/';
        var url = [base_url,'user/',this.props.user_email].join('');
        console.log(url);

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log('woohoo success');
                if (this.isMounted()) {
                    this.setProps({
                        user: response,
                        reloadFunction: this.loadEverything
                    });
                }
            }.bind(this),
            error: function(error) {
                console.log('wahhh error');
                console.log(error);
            }
        });

    },
    render: function() {
        console.log('printing user at app level');
        console.log(this.props.user);

        return (
                React.createElement('div', {className: 'listmas-container'},
                    React.createElement(Nav, this.props),
                    React.createElement('div', {className: 'container'},
                        React.createElement('div', {className: 'row'},
                            React.createElement('div', {className: 'col-md-12'},
                                React.createElement(ListContainer, this.props)
                                )
                            )
                        )
                    )
               );
    }
});

