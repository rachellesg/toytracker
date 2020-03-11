import React from 'react';

import gravatar from 'gravatar';

import Layout from './components/Layout';
import Collections from './collections/index';
import AddCollectionForm from './components/forms/collection-add';

class UserProfile extends React.Component {
    render() {
        let title;
        if (this.props.page) {
            title = "Toy Tracker  |  " + this.props.page;
        } else {
            title = "Toy Tracker";
        }
        let userEmail = this.props.userdetails.email;
        let url = gravatar.url(userEmail, {s: '100', r: 'x', d: 'retro'}, false);
        // console.log("ERRORRRRRRRRRRR", url, userEmail);
        let collectionSection;
        let numberOfCollections;
        if (this.props.collection.collection === true) {
            numberOfCollections = <span>{this.props.collection.length} <small>total collections to date</small></span>;
        } 
        if (this.props.errorMessage) {
            collectionSection = this.props.errorMessage;
        } else {
            console.log("IN COLLECTIONS VIEW FILE+++", this.props.collection)
            console.log("-------- END -----------");
            collectionSection = <Collections collection={this.props.collection}/>;
        }
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                <div className="user-profile">
                    <div className="row dashboard-top">
                        <div className="col-sm-9 d-flex dashboard-stats row">
                            <div className="col-sm-2">
                                <img src={url} />
                            </div>
                            <div className="col-sm-10">
                            <h2>Welcome to your PROFILE</h2>
                                <strong>Name:</strong> {this.props.userdetails.name} <br />
                                <strong>Email:</strong> {this.props.userdetails.email}
                            </div>
                        </div>
                        <div className="col-sm-3 text-right">
                            <br />
                            {numberOfCollections} <br /><br />
                            <button type="button" class="btn-default" data-toggle="modal" data-target="#exampleModalCenter">
                                <i class="material-icons">add</i> Add A New Collection
                            </button>
                        </div>
                    </div>
                    <h1>Your Collections</h1>
                    {collectionSection}

                    <AddCollectionForm userId={this.props.userdetails.id} />
                </div>
            </Layout>
        )
    }
}

export default UserProfile;

// ReactDOM.render(<App />, document.getElementById('app'));
