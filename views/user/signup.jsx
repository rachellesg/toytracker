import React from 'react';

import CreateUserForm from '../components/forms/user-create';

class UserSignUp extends React.Component {
    render() {
        return (
            <div className="modal fade" id="userRegisterModal" tabIndex="1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">Register For An Account</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <CreateUserForm />
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default UserSignUp;

