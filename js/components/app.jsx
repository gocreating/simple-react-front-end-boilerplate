var React = require('react');
var MyButton = require('./myButton.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        hello world
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
    );
  }
})