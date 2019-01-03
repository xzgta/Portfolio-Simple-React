import React from 'react';

import './style/App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import About from './containers/About';
import Portofolio from './containers/Portofolio';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home',
    };

    this.renderPage = this.renderPage.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ page });
  }

  renderPage() {
    const { page } = this.state;

    if (page === 'home') {
      return <Home />;
    } else if (page === 'about') {
      return <About />;
    } else if (page === 'portofolio') {
      return <Portofolio />
    }

    return null;
  }

  render() {
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        <div className="Content">
          { this.renderPage() }
        </div>
      </div>
    );
  }
}

export default App;
