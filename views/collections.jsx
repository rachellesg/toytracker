import React from 'react';

import Layout from './components/Layout';
import Collections from './collections/index';

class UserProfile extends React.Component {
    render() {
        console.log("ERRORRRRRRRRRRR",this.props.hashedLogin);
        let collectionSection;
        if (this.props.errorMessage) {
            collectionSection = this.props.errorMessage;
        } else {
            console.log("IN COLLECTIONS VIEW FILE+++", this.props.collection)
            console.log("-------- END -----------");
            collectionSection = <Collections collection={this.props.collection}/>;
        }
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={this.props.page}>
                <h1>Collections</h1>
                {collectionSection}
            </Layout>
        )
    }
}

export default UserProfile;

// ReactDOM.render(<App />, document.getElementById('app'));
