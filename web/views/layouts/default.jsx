var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
        <html>
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="css/bulma.min.css"/>
                <script defer src="js/all.js"></script>            
            </head>
            <body>{this.props.children}</body>
        </html>
    );
  }
}

module.exports = DefaultLayout;