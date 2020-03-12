import React from 'react';

import gravatar from 'gravatar';

import Layout from './components/Layout';
import Collections from './collections/index';

class UserPublicProfile extends React.Component {
    render() {
        let title;
        if (this.props.page) {
            title = "Toy Tracker  |  " + this.props.page;
        } else {
            title = "Toy Tracker";
        }
        let userEmail = this.props.userdetails.email;
        let url = gravatar.url(userEmail, {s: '100', r: 'x', d: 'retro'}, false);
        console.log("ERRORRRRRRRRRRR", url, userEmail);
        let collectionSection;
        if (this.props.errorMessage) {
            collectionSection = this.props.errorMessage;
        } else {
            console.log("IN COLLECTIONS VIEW FILE+++ YSER PROFILE", this.props.collection)
            console.log("-------- END -----------");
            collectionSection = <Collections collection={this.props.collection}/>;
        }
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                <div className="user-profile">
                    <div className="row dashboard-top">
                    <div className="col-sm-12"><h1 className="text-left">{this.props.userdetails.name}'s profile</h1></div>
                        <div className="col-4 row">
                        <div className="col-sm-4">
                                <img src={url} />
                            </div>
                        <div className="col-sm-7">
                            <strong>Name:</strong> {this.props.userdetails.name} <br />
                            <strong>Email:</strong> {this.props.userdetails.email}
                        </div>
                        </div>

                        <div className="col-8 p-0">
                            <h2>Latest Collections</h2>
                            {collectionSection}
                        </div>

                    </div>
                    
                </div>
            </Layout>
        )
    }
}

export default UserPublicProfile;

// ReactDOM.render(<App />, document.getElementById('app'));
