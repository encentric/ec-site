var React = require('react');
var DefaultLayout = require('./layouts/default');
//import * as NavView from './nav'; 
var NavView = require('./nav');

class IndexView extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        {/*----------------------------------------
             Hero Section
          -----------------------------------------*/}
        <section className="hero is-light is-bold">
          <div className="hero-head">
            <NavView/> 
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <img src="img/encentric-large.png"/>
            </div>
            <div className="container has-text-centered">
                <h2>To cause to be * focused</h2>
            </div>
          </div>

          <div className="hero-foot">
            <div className="field is-grouped is-grouped-centered" style={{padding:'10px'}}>
              <p className="control">
                <a className="button" href="https://github.com/encentric/ec-site" target="_blank">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>              
              </p>            
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = IndexView;