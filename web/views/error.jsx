var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.error.status}>
        <div>Error {this.props.message}</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;