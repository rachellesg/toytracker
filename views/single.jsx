import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

import Layout from './components/Layout';
import AddItemForm from './components/forms/item-add';
import Items from './collections/items';

class SingleCollection extends React.Component {
    render() {
        let title;
        let adminButton;
        let deleteButton = "";
        let deleteUrl;
        let showItems;
        let likeButtonUrl;
        let likeButton;
        if (this.props.collection.username == this.props.username) {
            console.log("user matches");
            deleteUrl = "/collections/" + this.props.collection.id + "?_method=delete";
            deleteButton =  <form action={deleteUrl} method="POST"><button className="btn-second button-delete"><i className="material-icons">delete</i> Delete Collection</button></form>;
            adminButton = <button type="button" className="btn-default" data-toggle="modal" data-target="#addNewItemModal"><i className="material-icons">add</i> Add New Item To Collection</button>;
        } else {
            adminButton = "";
            likeButtonUrl = "/collections/" + this.props.collection.id + "/like";
            likeButton = <a href={likeButtonUrl}><i class="material-icons">favorite_border</i></a>
        }
        if (this.props.page) {
            title = "Toy Tracker  |  " + this.props.page;
        } else {
            title = "Toy Tracker";
        }
        if (this.props.items.length != 0) {
            showItems = <Items currentUser={this.props.userId} items={this.props.items} />;
        } else {
            showItems = <section>No items in this collection yet x</section>;
        }
        return (
            <Layout hashedLogin={this.props.hashedLogin} title={title}>
                <section className="single-collection">
                    <div className="row">
                        <div className="col-12 text-center mb-3">
                            <h1>{this.props.collection.name} {likeButton}</h1>
                            posted by {this.props.collection.username}
                            {/* / last updated: {moment(this.props.collection.created).fromNow()} */}
                        </div>
                        <div className="col-sm-6">
                            {/* does not work yet lawlz */}
                             {deleteButton}
                        </div>
                        <div className="col-sm-6 text-right">
                            {adminButton}
                        </div>
                        {showItems}
                    </div>
                </section>
                <AddItemForm collectionUser={this.props.collection.user_id} collectionId={this.props.collection.id} companyData={this.props.companyData} brandData={this.props.brandData} />
            </Layout>
        )
    }
}

export default hot(module)(SingleCollection);
