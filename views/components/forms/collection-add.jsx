import React from 'react';

class AddCollectionForm extends React.Component {
    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">Add a New Collection</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="/collections/add" autocomplete="off" method="POST">
                    <div classNameName="row">
                        <div classNameName="col-sm-12">
                            <input type="text" name="name" placeholder="Collection Name" required/>
                        </div>
                        <div classNameName="col-sm-12">
                            <input type="hidden" value={this.props.userId} name="userid" />
                        </div>
                    </div>
                    <div className="form-button">
                        <input className="button-submit" type="submit" />
                    </div>
                    </form>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
            </div>
        )
    }
}

export default AddCollectionForm;

// ReactDOM.render(<App />, document.getElementById('app'));
