import React from 'react';
import moment from 'moment';

class Items extends React.Component {
    render() {
        // console.log("(((((( ITEMS PROPS WHERE IS item.id ? ))))))", this.props.items)
        console.log("-------- END -----------");
        let deleteButton;
        let deleteUrl;
        let currentUser = this.props.currentUser;
        let itemsCollection = this.props.items.map (thing => {
            deleteUrl = "/items/" + thing.id + "?_method=delete";
            console.log("============== %%", thing.user_id, currentUser);
            if (thing.user_id == currentUser) {
                deleteButton =  <form action={deleteUrl} method="POST"><button class="button-delete"><i class="material-icons"> delete</i> Delete Item</button><input type="hidden" name="id" value={thing.item_id} /></form>;
            } else {
                deleteButton = "";
            }
            return <div className="collection-listings col-sm-4">
                <div className="items-listings-content">
                <img src={thing.image_url} className="img-fluid" /> <br />
                <div className="collection-listings-name">
                    {thing.name} {deleteButton} </div>
                    Brand: <span className="tags-brand">{thing.brand}</span>, Company: <span className="tags-company">{thing.company}</span> <br />
                    Year: <span className="tags-year">{thing.year}</span>, Condition: <span className="tags-condition">{thing.condition}</span>, Price: <span className="tags-price">${thing.price}</span><br />
                    <em className="small">{moment(thing.created).fromNow()}</em>
                </div>
                </div>
        });
        return (
            <section className="col-12 row">
                {itemsCollection}
            </section>
        )
    }
}

export default Items;
