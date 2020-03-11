import React from 'react';
import moment from 'moment';

// import Listings from './listings';

class Collections extends React.Component {
    render() {
        console.log("IN COLLECTIONS VIEW FILE+++", this.props.collection)
        console.log("-------- END -----------", this.props.username);
        let pageUrl;
        let latestCollections;
        let userUrl;
        if (this.props.collection != undefined) {
            latestCollections = this.props.collection.map (item => {;
                pageUrl = "/collections/" + item.id;
                userUrl = "/users/" + item.user_id;
                return <div className="collection-listings col-sm-3">
                    <div className="collection-listings-content">
                    <span className="collection-listings-name">
                        <a href={pageUrl}>{item.name}</a></span><br /> 
                        <span className="username"><a href={userUrl}>{item.username}</a></span><br />
                        <em className="small">{moment(item.created).fromNow()}</em>
                    </div>
                    </div>
            });
        } else {
            latestCollections = "No collections yet!"
        }
        return (
            <section className="latest-collections">
                <div className="row">
                    {latestCollections}
                </div>
            </section>
        )
    }
}

export default Collections;

// ReactDOM.render(<App />, document.getElementById('app'));
