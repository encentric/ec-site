var React = require('react');

class NavView extends React.Component {
    render() {
        return (
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="img/encentric-small.png" alt="Logo"/>
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      Home
                    </a>
                    <a className="navbar-item">
                      Examples
                    </a>
                    <a className="navbar-item">
                      Documentation
                    </a>
                    <span className="navbar-item">
                      <a className="button">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>                 

                  </div>
                </div>
              </div>
            </nav>
        );
    }
}

module.exports = NavView;