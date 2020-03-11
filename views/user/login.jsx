import React from 'react';

import LogInUserForm from '../components/forms/user-login';

class UserLogIn extends React.Component {
    render() {
        return (
            <div className="modal fade" id="userLoginModal" tabIndex="2" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">Log In</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <LogInUserForm />
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default UserLogIn;

// ReactDOM.render(<App />, document.getElementById('app'));
