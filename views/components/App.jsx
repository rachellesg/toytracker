import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div className="col-sm-12 banner-image">
        <div className="banner-text">
          T O Y  T R A C K E R 
          {/* So close to the real thing, it's like being in the ring! */}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
