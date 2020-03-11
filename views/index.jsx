import React from 'react';
import { hot } from 'react-hot-loader';
// import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import App from './components/App';
import Collections from './collections/index';
// import axios from 'axios'; 

class Home extends React.Component {
    render() {
        let title;
        if (this.props.page) {
            title = "Toy Tracker  |  " + this.props.page;
        } else {
            title = "Toy Tracker";
        }
        console.log(this.props.collection)
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                <App />
                <h1>Latest Collections</h1>
                <Collections collection={this.props.collection}/>
            </Layout>
        )
    }
}

export default hot(module)(Home);

// ReactDOM.render(<App />, document.getElementById('app'));
