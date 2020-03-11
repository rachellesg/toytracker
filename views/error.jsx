import React from 'react';
import { hot } from 'react-hot-loader';

import Layout from './components/Layout';

class Error extends React.Component {
    render() {
        let title;
        if (this.props.page) {
            title = "Toy Tracker  |  " + this.props.page;
        } else {
            title = "Toy Tracker";
        }
        console.log(this.props.collections)
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                404 Error
            </Layout>
        )
    }
}

export default hot(module)(Error);

// ReactDOM.render(<App />, document.getElementById('app'));
