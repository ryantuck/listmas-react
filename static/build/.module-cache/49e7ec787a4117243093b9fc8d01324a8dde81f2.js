
// React Nesting Example

var ARow = React.createClass({displayName: "ARow",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "ARow")
      )
    );
  }
});

var BRow = React.createClass({displayName: "BRow",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "BRow"), 
        React.createElement(ARow, null)
      )
    );
  }
});

var CRow = React.createClass({displayName: "CRow",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "CRow"), 
        React.createElement(BRow, null)
      )
    );
  }
});

var DRow = React.createClass({displayName: "DRow",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Hey David asdfkjasdlfjdsf"), 
        React.createElement(ARow, null), 
        React.createElement(BRow, null), 
        React.createElement(CRow, null), 
        React.createElement(CRow, null), 
        React.createElement(CRow, null)
      )
    );
  }
});


React.render(
  React.createElement(DRow, null),
  document.getElementById('content')
);
