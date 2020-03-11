import React from 'react';
import { hot } from 'react-hot-loader';
// import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import App from './components/App';
// import axios from 'axios'; 

class Home extends React.Component {
    render() {
        let title = "Toy Tracker | Login";
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                {this.props.poo}
                <App />
            </Layout>
        )
    }
}

export default hot(module)(Home);

// ReactDOM.render(<App />, document.getElementById('app'));
